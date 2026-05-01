/* main.js — Three.js particle field + 3D card tilt + scroll reveal + i18n */

// ── I18N ─────────────────────────────────────────────────────────────────────
const TRANSLATIONS = {
  ko: {
    'nav-cta':            '파트너 문의',
    'hero-sub':           'AI와 데이터, 창의성의 융합으로 산업의 기준을 재정의하는 혁신 집단.<br/>우리는 새로운 룰을 따르는 것이 아닌, 새로운 룰을 만듭니다.',
    'btn-portfolio':      '포트폴리오 →',
    'btn-partner':        '파트너 문의',
    'vision-text':        '기술과 창의성의 융합을 통해 산업의 기준을 재정의하고, 글로벌 시장에서 새로운 표준을 제시하는 혁신 기업이 됩니다.',
    'mission-text':       '데이터 기반 인사이트를 제공하고, 사용자 맞춤형 솔루션을 개발하며, 빠른 실행으로 차별화된 결과를 창출합니다.',
    'values-title':       '우리가 믿는 <span class="accent">세 가지 원칙</span>',
    'values-desc':        '기술, 예술, 전략을 결합한 창의적 사고로 기존의 한계를 초월합니다.',
    'val1-text':          '기술, 예술, 전략을 결합한 창의적 사고. 경계를 허물고 새로운 관점에서 문제를 해결합니다.',
    'val2-text':          '기존 틀을 깨는 독창적인 가치 창출. 업계의 룰을 따르는 것이 아닌, 새로운 룰을 만듭니다.',
    'val3-text':          'AI와 데이터 기반의 정밀한 결과 도출. 직관이 아닌 데이터로 모든 의사결정을 뒷받침합니다.',
    'behavior-title':     '행동 <span class="accent">원칙</span>',
    'behavior-desc':      'LUNATICS의 모든 구성원이 공유하는 실행 방식',
    'b1-text':            '데이터 기반 의사결정. 모든 판단의 근거는 숫자와 인사이트입니다.',
    'b2-text':            '경계를 넘는 협업. 분야와 조직의 경계 없이 최선의 결과를 추구합니다.',
    'b3-text':            '정확하고 빠른 실행. 완벽한 계획보다 빠른 실행과 반복이 더 강력합니다.',
    'portfolio-title':    '우리가 만드는 <span class="accent">제품</span>',
    'migo-desc':          '관심사 기반으로 사람들을 연결하고, 실제 오프라인 만남까지 이어주는 소셜 플랫폼. 온라인의 연결을 오프라인의 경험으로 확장합니다.',
    'chip1':              '관심사 기반 매칭',
    'chip2':              '오프라인 모임',
    'chip3':              'AI 추천',
    'chip4':              '위치 기반',
    'studio-desc':        'AI 기반 콘텐츠 창작 솔루션. 브랜드의 목소리를 AI로 증폭시킵니다.',
    'datapulse-desc':     '실시간 데이터 인사이트 플랫폼. 비즈니스 의사결정을 데이터로 가속화합니다.',
    'brand-title':        '브랜드 <span class="accent">컬러 시스템</span>',
    'brand-desc':         '미래지향적 · 정밀함 · 프리미엄을 담은 팔레트',
    'color1-meaning':     '신뢰와 안정',
    'color2-meaning':     '창의성과 독창성',
    'color3-meaning':     '기술과 혁신',
    'color4-meaning':     '미니멀함과 명확성',
    'cta-title':          '새로운 기준을<br/>함께 만들어요',
    'cta-desc':           'LUNATICS와 함께 AI + 데이터로 비즈니스의 새 챕터를 여세요.',
    'cta-btn1':           '파트너 문의하기 →',
    'cta-btn2':           '포트폴리오 보기',
    'footer-delete':      '데이터 삭제 요청',
    'modal-title':        '파트너 문의',
    'modal-sub':          'LUNATICS GROUP과 함께 새로운 기준을 만들어보세요.',
    'label-name':         '// 이름 *',
    'label-company':      '// 회사명',
    'label-email':        '// 이메일 *',
    'label-type':         '// 문의 유형',
    'label-message':      '// 문의 내용 *',
    'ph-name':            '홍길동',
    'ph-company':         'OO 주식회사',
    'ph-message':         '어떤 프로젝트를 구상 중이신가요? 자유롭게 작성해주세요.',
    'opt-default':        '선택해주세요',
    'opt1':               '비즈니스 파트너십',
    'opt2':               'AI 솔루션 도입',
    'opt3':               '투자 및 제휴',
    'opt4':               '채용 및 협업',
    'opt5':               '기타 문의',
    'btn-submit':         '문의 보내기 →',
    'success-title':      '문의가 접수되었습니다!',
    'success-desc':       '빠른 시일 내에 연락드리겠습니다.<br/>contact@lunaticsgroup.com',
    'alert-required':     '이름, 이메일, 문의 내용은 필수 항목입니다.',
    'btn-sending':        '전송 중...',
    'alert-error':        '전송 중 오류가 발생했습니다.\n잠시 후 다시 시도하거나 contact@lunaticsgroup.com으로 직접 연락해주세요.',
    'lang-html':          'ko',
    'page-title':         'LUNATICS GROUP (LNC) — AI 기반 혁신 그룹 | Intelligent Creation',
    'page-desc':          'LUNATICS GROUP(LNC)은 AI와 데이터, 창의성을 융합해 산업의 기준을 재정의하는 혁신 그룹입니다.',
  },
  en: {
    'nav-cta':            'Partner Inquiry',
    'hero-sub':           'An innovation collective that redefines industry standards through the fusion of AI, data, and creativity.<br/>We don\'t follow new rules — we make them.',
    'btn-portfolio':      'Portfolio →',
    'btn-partner':        'Partner Inquiry',
    'vision-text':        'Through the fusion of technology and creativity, we redefine industry standards and set new benchmarks in the global market.',
    'mission-text':       'We deliver data-driven insights, develop user-tailored solutions, and generate differentiated results through rapid execution.',
    'values-title':       'Three Principles <span class="accent">We Believe In</span>',
    'values-desc':        'We transcend existing limits through creative thinking that combines technology, art, and strategy.',
    'val1-text':          'Creative thinking combining technology, art, and strategy. We break boundaries and solve problems from new perspectives.',
    'val2-text':          'Creating original value that breaks the existing mold. We don\'t follow industry rules — we make new ones.',
    'val3-text':          'Delivering precise results based on AI and data. Every decision is backed by data, not intuition.',
    'behavior-title':     'Behavioral <span class="accent">Principles</span>',
    'behavior-desc':      'The execution style shared by every member of LUNATICS',
    'b1-text':            'Data-driven decision making. Every judgment is grounded in numbers and insights.',
    'b2-text':            'Boundary-less collaboration. We pursue the best outcomes regardless of field or organizational lines.',
    'b3-text':            'Precise and fast execution. Rapid iteration beats a perfect plan every time.',
    'portfolio-title':    'Products We <span class="accent">Create</span>',
    'migo-desc':          'A social platform that connects people based on shared interests and bridges online connections to real-world offline meetups.',
    'chip1':              'Interest-Based Matching',
    'chip2':              'Offline Meetups',
    'chip3':              'AI Recommendations',
    'chip4':              'Location-Based',
    'studio-desc':        'AI-powered content creation solution. Amplify your brand\'s voice with AI.',
    'datapulse-desc':     'Real-time data insights platform. Accelerate business decisions with data.',
    'brand-title':        'Brand <span class="accent">Color System</span>',
    'brand-desc':         'A palette embodying future-forward · precision · premium',
    'color1-meaning':     'Trust & Stability',
    'color2-meaning':     'Creativity & Originality',
    'color3-meaning':     'Technology & Innovation',
    'color4-meaning':     'Minimalism & Clarity',
    'cta-title':          'Let\'s Build a New<br/>Standard Together',
    'cta-desc':           'Open a new chapter for your business with AI + data alongside LUNATICS.',
    'cta-btn1':           'Partner Inquiry →',
    'cta-btn2':           'View Portfolio',
    'footer-delete':      'Data Deletion Request',
    'modal-title':        'Partner Inquiry',
    'modal-sub':          'Let\'s build a new standard together with LUNATICS GROUP.',
    'label-name':         '// Name *',
    'label-company':      '// Company',
    'label-email':        '// Email *',
    'label-type':         '// Inquiry Type',
    'label-message':      '// Message *',
    'ph-name':            'John Doe',
    'ph-company':         'Company Inc.',
    'ph-message':         'What project are you envisioning? Write freely.',
    'opt-default':        'Please select',
    'opt1':               'Business Partnership',
    'opt2':               'AI Solution Adoption',
    'opt3':               'Investment & Alliance',
    'opt4':               'Hiring & Collaboration',
    'opt5':               'Other Inquiry',
    'btn-submit':         'Send Inquiry →',
    'success-title':      'Inquiry Received!',
    'success-desc':       'We\'ll get back to you shortly.<br/>contact@lunaticsgroup.com',
    'alert-required':     'Name, email, and message are required.',
    'btn-sending':        'Sending...',
    'alert-error':        'An error occurred during submission.\nPlease try again or contact us at contact@lunaticsgroup.com.',
    'lang-html':          'en',
    'page-title':         'LUNATICS GROUP (LNC) — AI-Driven Innovation Group | Intelligent Creation',
    'page-desc':          'LUNATICS GROUP (LNC) is an innovation group that redefines industry standards by fusing AI, data, and creativity.',
  },
  th: {
    'nav-cta':            'สอบถามพาร์ทเนอร์',
    'hero-sub':           'กลุ่มนวัตกรรมที่กำหนดมาตรฐานใหม่ของอุตสาหกรรม<br/>ด้วยการผสมผสาน AI ข้อมูล และความคิดสร้างสรรค์',
    'btn-portfolio':      'ผลงาน →',
    'btn-partner':        'สอบถามพาร์ทเนอร์',
    'vision-text':        'ผ่านการผสมผสานเทคโนโลยีและความคิดสร้างสรรค์ เรากำหนดมาตรฐานใหม่ในอุตสาหกรรมและตั้งเกณฑ์ใหม่ในตลาดโลก',
    'mission-text':       'เราให้ข้อมูลเชิงลึกที่ขับเคลื่อนด้วยข้อมูล พัฒนาโซลูชันที่ปรับแต่งตามผู้ใช้ และสร้างผลลัพธ์ที่แตกต่างผ่านการดำเนินงานที่รวดเร็ว',
    'values-title':       'สามหลักการ <span class="accent">ที่เราเชื่อ</span>',
    'values-desc':        'เราก้าวข้ามข้อจำกัดเดิมด้วยการคิดเชิงสร้างสรรค์ที่รวมเทคโนโลยี ศิลปะ และกลยุทธ์เข้าด้วยกัน',
    'val1-text':          'การคิดเชิงสร้างสรรค์ที่รวมเทคโนโลยี ศิลปะ และกลยุทธ์ เราทลายขอบเขตและแก้ปัญหาจากมุมมองใหม่',
    'val2-text':          'สร้างคุณค่าต้นฉบับที่ทำลายรูปแบบเดิม เราไม่ปฏิบัติตามกฎของอุตสาหกรรม — เราสร้างกฎใหม่',
    'val3-text':          'ส่งมอบผลลัพธ์ที่แม่นยำโดยอิงจาก AI และข้อมูล ทุกการตัดสินใจได้รับการสนับสนุนด้วยข้อมูล ไม่ใช่สัญชาตญาณ',
    'behavior-title':     'หลักการ <span class="accent">การปฏิบัติ</span>',
    'behavior-desc':      'รูปแบบการดำเนินงานที่สมาชิกทุกคนของ LUNATICS ยึดถือ',
    'b1-text':            'การตัดสินใจขับเคลื่อนด้วยข้อมูล ทุกการตัดสินใจมีพื้นฐานจากตัวเลขและข้อมูลเชิงลึก',
    'b2-text':            'การทำงานร่วมกันแบบไร้ขอบเขต เราแสวงหาผลลัพธ์ที่ดีที่สุดโดยไม่คำนึงถึงสาขาหรือองค์กร',
    'b3-text':            'การดำเนินงานที่แม่นยำและรวดเร็ว การวนซ้ำอย่างรวดเร็วดีกว่าแผนที่สมบูรณ์แบบทุกครั้ง',
    'portfolio-title':    'ผลิตภัณฑ์ที่เรา <span class="accent">สร้าง</span>',
    'migo-desc':          'แพลตฟอร์มโซเชียลที่เชื่อมโยงผู้คนตามความสนใจร่วมกัน และเชื่อมต่อออนไลน์สู่การพบปะออฟไลน์จริง',
    'chip1':              'จับคู่ตามความสนใจ',
    'chip2':              'นัดพบออฟไลน์',
    'chip3':              'แนะนำด้วย AI',
    'chip4':              'บริการตามตำแหน่ง',
    'studio-desc':        'โซลูชันสร้างเนื้อหาด้วย AI ขยายเสียงของแบรนด์คุณด้วย AI',
    'datapulse-desc':     'แพลตฟอร์มข้อมูลเชิงลึกแบบเรียลไทม์ เร่งการตัดสินใจทางธุรกิจด้วยข้อมูล',
    'brand-title':        'ระบบ <span class="accent">สีแบรนด์</span>',
    'brand-desc':         'จานสีที่สื่อถึงอนาคต · ความแม่นยำ · ความพรีเมียม',
    'color1-meaning':     'ความไว้วางใจและความมั่นคง',
    'color2-meaning':     'ความคิดสร้างสรรค์และความเป็นต้นฉบับ',
    'color3-meaning':     'เทคโนโลยีและนวัตกรรม',
    'color4-meaning':     'ความเรียบง่ายและความชัดเจน',
    'cta-title':          'มาสร้างมาตรฐานใหม่<br/>ด้วยกัน',
    'cta-desc':           'เปิดบทใหม่ของธุรกิจคุณด้วย AI + ข้อมูล ร่วมกับ LUNATICS',
    'cta-btn1':           'สอบถามพาร์ทเนอร์ →',
    'cta-btn2':           'ดูผลงาน',
    'footer-delete':      'ขอลบข้อมูล',
    'modal-title':        'สอบถามพาร์ทเนอร์',
    'modal-sub':          'มาสร้างมาตรฐานใหม่ร่วมกับ LUNATICS GROUP',
    'label-name':         '// ชื่อ *',
    'label-company':      '// บริษัท',
    'label-email':        '// อีเมล *',
    'label-type':         '// ประเภทคำถาม',
    'label-message':      '// ข้อความ *',
    'ph-name':            'สมชาย ใจดี',
    'ph-company':         'บริษัท ABC จำกัด',
    'ph-message':         'คุณกำลังวางแผนโปรเจกต์อะไร? เขียนได้อย่างอิสระ',
    'opt-default':        'กรุณาเลือก',
    'opt1':               'ความร่วมมือทางธุรกิจ',
    'opt2':               'นำ AI Solution มาใช้',
    'opt3':               'การลงทุนและพันธมิตร',
    'opt4':               'การจ้างงานและความร่วมมือ',
    'opt5':               'สอบถามอื่นๆ',
    'btn-submit':         'ส่งคำถาม →',
    'success-title':      'ได้รับคำถามแล้ว!',
    'success-desc':       'เราจะติดต่อกลับโดยเร็วที่สุด<br/>contact@lunaticsgroup.com',
    'alert-required':     'ชื่อ อีเมล และข้อความเป็นข้อมูลที่จำเป็น',
    'btn-sending':        'กำลังส่ง...',
    'alert-error':        'เกิดข้อผิดพลาดระหว่างการส่ง\nกรุณาลองอีกครั้งหรือติดต่อ contact@lunaticsgroup.com',
    'lang-html':          'th',
    'page-title':         'LUNATICS GROUP (LNC) — กลุ่มนวัตกรรมขับเคลื่อนด้วย AI | Intelligent Creation',
    'page-desc':          'LUNATICS GROUP (LNC) คือกลุ่มนวัตกรรมที่กำหนดมาตรฐานใหม่ของอุตสาหกรรมด้วยการผสมผสาน AI ข้อมูล และความคิดสร้างสรรค์',
  }
};

let currentLang = localStorage.getItem('lnc-lang') || 'ko';
window.currentLang = currentLang;

function applyLang(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;
  currentLang = lang;
  window.currentLang = lang;
  localStorage.setItem('lnc-lang', lang);

  // html lang attr
  document.documentElement.lang = t['lang-html'];
  document.title = t['page-title'];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = t['page-desc'];

  // apply all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (!t[key]) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t[key];
    } else if (el.dataset.i18nHtml) {
      el.innerHTML = t[key];
    } else {
      el.innerHTML = t[key];
    }
  });

  // active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
  applyLang(currentLang);
}

// expose for inline onclick
window.applyLang = applyLang;

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

// ── INIT LANG SWITCHER ───────────────────────────────────────────────────────
initLangSwitcher();
