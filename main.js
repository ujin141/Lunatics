/* main.js — Three.js particle field + 3D card tilt + scroll reveal */

// ── THREE.JS PARTICLE FIELD ──────────────────────────────────────────────────
(function initThree() {
  const canvas = document.getElementById('bg-canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 30;

  // ─ Particle field
  const COUNT = 2000;
  const positions = new Float32Array(COUNT * 3);
  const colors    = new Float32Array(COUNT * 3);
  const SPREAD = 80;

  const col1 = new THREE.Color('#00FFD1'); // mint
  const col2 = new THREE.Color('#7C3AED'); // purple
  const col3 = new THREE.Color('#22D3EE'); // cyan

  for (let i = 0; i < COUNT; i++) {
    positions[i * 3]     = (Math.random() - .5) * SPREAD;
    positions[i * 3 + 1] = (Math.random() - .5) * SPREAD;
    positions[i * 3 + 2] = (Math.random() - .5) * SPREAD;
    const c = Math.random();
    const pick = c < .45 ? col1 : c < .75 ? col2 : col3;
    colors[i * 3]     = pick.r;
    colors[i * 3 + 1] = pick.g;
    colors[i * 3 + 2] = pick.b;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color',    new THREE.BufferAttribute(colors, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.12,
    vertexColors: true,
    transparent: true,
    opacity: 0.7,
    sizeAttenuation: true,
  });

  const points = new THREE.Points(geo, mat);
  scene.add(points);

  // ─ Grid lines plane
  const gridHelper = new THREE.GridHelper(120, 30, 0x0D1224, 0x0D1224);
  gridHelper.position.y = -20;
  gridHelper.material.transparent = true;
  gridHelper.material.opacity = 0.25;
  scene.add(gridHelper);

  // ─ Wireframe sphere (hero depth)
  const sphereGeo = new THREE.IcosahedronGeometry(10, 1);
  const sphereMat = new THREE.MeshBasicMaterial({
    color: 0x7C3AED,
    wireframe: true,
    transparent: true,
    opacity: 0.06,
  });
  const sphere = new THREE.Mesh(sphereGeo, sphereMat);
  sphere.position.set(18, 0, -10);
  scene.add(sphere);

  // ─ Torus (right side accent)
  const torusGeo = new THREE.TorusGeometry(6, 0.03, 8, 80);
  const torusMat = new THREE.MeshBasicMaterial({
    color: 0x00FFD1,
    transparent: true,
    opacity: 0.12,
  });
  const torus = new THREE.Mesh(torusGeo, torusMat);
  torus.position.set(-18, 4, -8);
  torus.rotation.x = Math.PI / 3;
  scene.add(torus);

  // ─ Mouse parallax
  const mouse = { x: 0, y: 0 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth  - .5) * 2;
    mouse.y = (e.clientY / window.innerHeight - .5) * 2;
  });

  // ─ Resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // ─ Animate
  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    points.rotation.y = t * 0.018;
    points.rotation.x = t * 0.008;

    sphere.rotation.x = t * 0.12;
    sphere.rotation.y = t * 0.08;

    torus.rotation.z = t * 0.06;
    torus.rotation.y = t * 0.04;

    // Parallax
    camera.position.x += (mouse.x * 3 - camera.position.x) * 0.04;
    camera.position.y += (-mouse.y * 2 - camera.position.y) * 0.04;
    camera.lookAt(scene.position);

    // Scroll-based depth push
    const scrollY = window.scrollY / window.innerHeight;
    points.position.z = -scrollY * 4;

    renderer.render(scene, camera);
  }
  animate();
})();

// ── SCROLL REVEAL ────────────────────────────────────────────────────────────
(function initReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
})();

// ── NAV SCROLL ───────────────────────────────────────────────────────────────
(function initNav() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
})();

// ── 3D CARD TILT ─────────────────────────────────────────────────────────────
(function initTilt() {
  document.querySelectorAll('.tilt').forEach(card => {
    const MAX = 12;
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - .5;
      const y = (e.clientY - rect.top)  / rect.height - .5;
      card.style.transform = `perspective(800px) rotateY(${x * MAX}deg) rotateX(${-y * MAX}deg) scale3d(1.02,1.02,1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateY(0) rotateX(0) scale3d(1,1,1)';
    });
  });
})();

// ── GLITCH REFRESH ───────────────────────────────────────────────────────────
(function initGlitch() {
  const el = document.querySelector('.glitch');
  if (el) {
    el.setAttribute('data-text', el.textContent);
  }
})();

// ── TYPED COUNTER (stats) ─────────────────────────────────────────────────────
(function initTypeCounter() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      const raw = el.dataset.count;
      if (isNaN(raw)) return;
      const target = parseFloat(raw);
      const isFloat = raw.includes('.');
      let start = null;
      const dur = 1400;
      function step(ts) {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        el.textContent = isFloat
          ? (ease * target).toFixed(1)
          : Math.round(ease * target);
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }, { threshold: .5 });
    obs.observe(el);
  });
})();
