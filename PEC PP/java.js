const PROJECTS = [
  {
    id:1, sem:"2do Semestre · 2A", tags:["2do","foda"],
    pdf:"resources/doc-foda-guadalupe.pdf",
    title:"Analisis FODA — Guadalupe de Rivera",
    place:"Guadalupe de Rivera, Irapuato",
    desc:"Diagnostico integral de la comunidad rural de Guadalupe de Rivera. Los alumnos identificaron que la comunidad tiene una ubicacion estrategica cerca del corredor industrial de Irapuato y redes de apoyo solidas entre vecinos, pero enfrenta amenazas externas graves: violencia de grupos delictivos en la region, cambio climatico que afecta la agricultura familiar y falta de atencion gubernamental en obras publicas basicas como alumbrado y pavimentacion de calles.",
    alumnos:["Alexis Aza Hernandez","Miriam Serrano Mosqueda","Pamela Mosqueda Negrete","Ana Rosa Ortiz Ortiz","Yuritzi Ledesma Elias","Cristian Alfaro Almaguer","Noemi Rodriguez Hernandez"],
    docente:"Rene Gonzalez Duran",
    findings:[
      {v:"Fortaleza",d:"Ubicacion estrategica cerca del corredor industrial de Irapuato y sentido de organizacion comunitaria activo."},
      {v:"Oportunidad",d:"Cercania con universidades y acceso a transporte que permite a los jovenes continuar estudiando fuera de la comunidad."},
      {v:"Amenaza",d:"Presencia de crimen organizado en la region que genera miedo, limita la convivencia social y pone en riesgo a la poblacion joven."}
    ],
    conc:"La comunidad de Guadalupe de Rivera tiene bases sociales solidas, pero las amenazas externas — especialmente la inseguridad — requieren atencion urgente. El analisis mostro que la participacion ciudadana organizada es la herramienta mas viable a corto plazo para mejorar las condiciones locales."
  },
  {
    id:2, sem:"2do Semestre ", tags:["2do","ambiental"],
    pdf:"resources/doc-encuesta-rancho.pdf",
    title:"Encuesta Ambiental PEC",
    place:"Rancho Nuevo de la Cruz, Abasolo",
    desc:"Encuesta de percepcion ambiental aplicada a 33 personas de la comunidad. El estudio revelo que la acumulacion de basura es identificada por el 46% como el problema mas grave, seguido de la quema de basura y la perdida de areas verdes. El 85% afirmo observar practicas daninas al medio ambiente de manera frecuente o constante, lo que indica que el problema es visible y cotidiano para los habitantes de la comunidad.",
    alumnos:["Ayala Arellano Fatima","Borja Ramirez Jonatan","Delgado Delgado Fatima Monserrat","Delgado Linares Estrella","Flores Bravo Candelaria","Hernandez Vazquez Evelin","Landeros Gordillo Hugo Tristan","Moreno Rios Nadia","Ramirez Moreno Juan Axel"],
    docente:"Academia de Matematicas 2do Semestre",
    findings:[
      {v:"46%",d:"Identifica la acumulacion de basura como el principal problema ambiental de la comunidad."},
      {v:"85%",d:"Afirma observar practicas daninas al medio ambiente de manera frecuente o constante."},
      {v:"57%",d:"Estaria dispuesto a participar activamente en un proyecto ambiental comunitario organizado."}
    ],
    conc:"Los resultados senalaron que la plaza principal, el kiosco y las areas verdes son los espacios que los habitantes consideran prioritarios para mejorar. La alta disposicion a participar indica que existe capital social suficiente para ejecutar intervenciones comunitarias exitosas si se cuenta con organizacion y liderazgo."
  },
  {
    id:3, sem:"2do Semestre · Ofimatica", tags:["2do","ambiental"],
    pdf:"resources/doc-encuesta-trinidad.pdf",
    title:"Percepcion Ambiental — La Trinidad",
    place:"La Trinidad, Abasolo",
    desc:"Encuesta aplicada a 24 personas de la comunidad. Los hallazgos muestran que el 67% identifica la acumulacion y quema de basura como los problemas mas graves. El 79% considera que la poblacion es poco responsable con el cuidado del medio ambiente, apuntando a una necesidad urgente de educacion ambiental desde etapas tempranas. La mayoria percibe que no existen practicas institucionalizadas de cuidado ambiental en la comunidad.",
    alumnos:["Castillo Nieto Miguel","Vargas Castro Aldo Antonio","Dimas Ayala Edgar Leonardo","Rosales Nunez Jesus Emmanuel","Ramirez Castaneda Gael Octavio","Aldaco Cisneros Luis Fernando","Cisneros Mosqueda Valeria","Galvan Laguna Claudia"],
    docente:"Academia de Matematicas 2do Semestre",
    findings:[
      {v:"67%",d:"Identifica la acumulacion y quema de basura como los mayores problemas ambientales de su comunidad."},
      {v:"79%",d:"Considera que la poblacion local es poco o nada responsable con el cuidado del medio ambiente."},
      {v:"58%",d:"Prioriza la educacion ambiental y jornadas de limpieza como las acciones que mas ayudarian."}
    ],
    conc:"La prioridad es clara: limpieza de calles, recoleccion de basura y recuperacion de areas verdes. El proyecto concluye que sin un cambio en la cultura ambiental, cualquier intervencion fisica tendra efectos temporales. La educacion desde la escuela es el punto de partida mas eficaz."
  },
  {
    id:4, sem:"2do Semestre · Agropecuario", tags:["2do","ambiental"],
    pdf:"resources/doc-encuesta-community.pdf",
    title:"Perception and Actions on Community",
    place:"Comunidad local, Abasolo",
    desc:"Survey applied in English to 11 community members to assess environmental perception and individual actions. Most respondents rate the environment as good, but identified waste management as only fair. The survey revealed a disconnect between positive environmental perception and harmful practices observed daily, suggesting residents may not associate common behaviors like burning trash with environmental damage.",
    alumnos:["Hernandez Marquez Hector Jesus","Camargo Garcia Yaneiry Guadalupe","Zavala Rivera Jose Fidel"],
    docente:"CBTA 174 · 2do A Agropecuario",
    findings:[
      {v:"81.8%",d:"Would actively participate in a community environmental project if organized."},
      {v:"63.6%",d:"Rates local waste management as only fair, showing significant room for improvement."},
      {v:"81.8%",d:"Considers environmental education the single most impactful action for community improvement."}
    ],
    conc:"The high willingness to participate makes this community particularly receptive to organized environmental initiatives. A well-structured project focused on education and waste management could generate meaningful and lasting change with relatively low resistance from residents."
  },
  {
    id:5, sem:"4to Semestre · Ofimatica", tags:["4to","ambiental"],
    pdf:"resources/doc-cultura-medio-ambiente.pdf",
    title:"Cultura y Cuidado del Medio Ambiente",
    place:"Rancho Nuevo de la Cruz, Abasolo",
    desc:"Los alumnos disenaron propuestas de bardas comunitarias en Canva aplicando la paleta del Gobierno Federal y principios de comunicacion visual para transmitir mensajes de concientizacion ambiental. El proceso incluyo presentacion ante la academia, seleccion del trabajo ganador por votacion colectiva y publicacion en la pagina oficial de Facebook del CBTA 174. Ademas desarrollaron sitios informativos en Google Sites como parte de sus competencias digitales.",
    alumnos:["Alumnos de 4to Semestre Ofimatica — CBTA 174"],
    docente:"Alberto Prado Martinez",
    findings:[
      {v:"Canva",d:"Plataforma utilizada para disenar bardas comunitarias con paleta institucional del Gobierno Federal."},
      {v:"Google Sites",d:"Herramienta usada para crear sitios web informativos sobre el proyecto PAEC."},
      {v:"Facebook",d:"Red social donde se difundio el diseno ganador, logrando alcance en la comunidad educativa."}
    ],
    conc:"El proyecto demostro que los alumnos pueden aplicar competencias digitales para generar contenido con impacto social real. Ver su trabajo publicado y reconocido por la comunidad reforzо el sentido de responsabilidad y pertenencia de los estudiantes hacia su entorno."
  },
  {
    id:6, sem:"4to Semestre · Ofimatica", tags:["4to","ambiental"],
    pdf:"resources/doc-capsula-tiempo.pdf",
    title:"Capsula del Tiempo — Mi Comunidad y su Cuidado",
    place:"Plantel CBTA 174, Abasolo",
    desc:"Proyecto que combina investigacion historica sobre el CBTA 174 con intervencion ambiental concreta. Los alumnos documentaron que la escuela fue fundada en 1975 e inicio actividades en 1984 en 100 hectareas ejidales donadas por la comunidad de Rancho Nuevo de la Cruz. Con ese contexto historico como motivacion, organizaron jornadas de limpieza en el estacionamiento del plantel separando residuos organicos e inorganicos y recuperando areas descuidadas.",
    alumnos:["Diana Ramirez Vargas","Francisco Emanuel Garcia Aldaco"],
    docente:"MVZ. Noe Ramirez Ramirez",
    findings:[
      {v:"1984",d:"Ano en que el CBTA 174 inicio actividades academicas formales en Rancho Nuevo de la Cruz, Abasolo."},
      {v:"100 ha",d:"Superficie ejidal donada por la comunidad para la construccion del plantel que hoy alberga a cientos de estudiantes."},
      {v:"8AM — 1PM",d:"Horario completo de la jornada de limpieza realizada en el area del estacionamiento y jardineras del plantel."}
    ],
    conc:"Conocer la historia del plantel genero en los alumnos un sentido de responsabilidad hacia el espacio que ocupan. Cuando los estudiantes entienden el esfuerzo que costo construir lo que tienen, lo cuidan de manera distinta. La identidad historica es una herramienta poderosa para motivar el cuidado del entorno."
  },
  {
    id:7, sem:"2do Semestre · 2A RRHH", tags:["2do","foda"],
    pdf:"resources/doc-foda-san-cristobal.pdf",
    title:"FODA Comunitario — San Cristobal",
    place:"San Cristobal, Irapuato",
    desc:"Analisis FODA de San Cristobal, ubicada al noreste del centro de Irapuato. Con aproximadamente 5,100 habitantes y edad promedio de 27 anos, es una comunidad joven con economia basada en agricultura y comercio. Como fortaleza principal se identifico el sentido de pertenencia y las redes de apoyo entre vecinos. Como principal amenaza, la presencia del crimen organizado en Irapuato, que ha registrado hechos violentos en zonas cercanas a la comunidad.",
    alumnos:["Arevalo Jorge Victoria Nereida","Serrano Banda Maria Guadalupe","Martinez Corona Kamila","Contreras Perez Renata","Contreras Ramirez Leslie Pamela","Banda Gallaga Jessica Nathalia","Hernandez Medina Estefania","Rodriguez Hernandez Juan Pablo","Granados Castaneda Mario Alexis"],
    docente:"L.A. Rene Gonzalez Duran",
    findings:[
      {v:"5,100+",d:"Habitantes en San Cristobal segun datos de 2020, con poblacion predominantemente joven y en edad productiva."},
      {v:"27 anos",d:"Edad promedio de la comunidad, ventaja demografica importante para el desarrollo economico local."},
      {v:"Crimen org.",d:"Principal amenaza externa: grupos delictivos en Irapuato afectan la tranquilidad y limitan actividades comunitarias."}
    ],
    conc:"San Cristobal tiene un perfil demografico favorable que representa una oportunidad real de desarrollo. Sin embargo, el FODA fue claro: la inseguridad es el freno mas grande. Fortalecer la organizacion ciudadana y exigir mayor presencia policial son los pasos mas urgentes para esta comunidad."
  },
  {
    id:8, sem:"4to Semestre · Ofimatica", tags:["4to","ambiental"],
    pdf:"resources/doc-conciencia-historica.pdf",
    title:"Conciencia Historica — Mejorar tu Comunidad",
    place:"Rancho Nuevo de la Cruz, Abasolo",
    desc:"Proyecto de divulgacion que documenta el ciclo completo del PAEC 2025-2026 e investiga la historia del CBTA 174 y del boulevard de Rancho Nuevo de la Cruz. En febrero de 2021 se dio el banderazo de pavimentacion de la Avenida del Trabajo — la arteria principal de la comunidad — con una inversion conjunta del Gobierno del Estado y el Municipio de Abasolo que supero los 19 millones de pesos.",
    alumnos:["Michellle Alondra Hernandez Alfaro","Ximena Negrete Garcia","Esmeralda Camarillo Sanchez"],
    docente:"Claudia Hernandez Laguna",
    findings:[
      {v:"1975 — 84",d:"Origen y fundacion del CBTA 174: la idea nacio en 1975 y las actividades academicas iniciaron en septiembre de 1984."},
      {v:"19M MXN",d:"Inversion publica en la pavimentacion del boulevard de Rancho Nuevo de la Cruz ejecutada en 2021."},
      {v:"3 fases",d:"Ciclo completo del PAEC documentado: diagnostico en 2do, ejecucion en 4to y divulgacion en 5to semestre."}
    ],
    conc:"El proyecto cumplio el objetivo de dar visibilidad al esfuerzo colectivo de los alumnos del CBTA 174. Al integrar la historia del plantel y del boulevard con las actividades del PAEC, las alumnas crearon un documento que conecta el pasado de la comunidad con su presente y sienta bases para futuras ediciones."
  }
];

const COMMUNITIES = [
  {
    name:"Rancho Nuevo de la Cruz", muni:"Abasolo, Guanajuato",
    detail:"Sede del CBTA 174 y principal comunidad intervenida. Aqui se realizaron jornadas de limpieza del plantel, diseno y publicacion de bardas comunitarias, e investigacion historica sobre la fundacion de la escuela y su boulevard. Es el epicentro del proyecto."
  },
  {
    name:"Guadalupe de Rivera", muni:"Irapuato, Guanajuato",
    detail:"Comunidad rural diagnosticada mediante FODA. Enfrenta inseguridad del crimen organizado en la region de Irapuato, escasez de empleo local y los efectos del cambio climatico en la produccion agricola familiar. Cuenta con redes de apoyo comunitarias solidas."
  },
  {
    name:"San Cristobal", muni:"Irapuato, Guanajuato",
    detail:"Zona urbano-rural con aproximadamente 5,100 habitantes y edad promedio de 27 anos. Diagnosticada mediante FODA. Economia basada en agricultura y comercio. La inseguridad derivada del crimen organizado en Irapuato es su principal amenaza identificada."
  },
  {
    name:"La Trinidad", muni:"Abasolo, Guanajuato",
    detail:"Comunidad encuestada sobre percepcion y manejo ambiental. Acumulacion de basura, quema de residuos y falta de areas verdes son los problemas mas urgentes. La prioridad de intervencion es la limpieza de calles y la instalacion de contenedores de residuos."
  },
  {
    name:"Plantel CBTA 174", muni:"Abasolo, Guanajuato",
    detail:"El propio plantel fue intervenido como espacio comunitario. Brigadas de limpieza en estacionamiento, jardineras y areas recreativas. Se realizo separacion de residuos organicos e inorganicos y se recuperaron zonas descuidadas dentro de las instalaciones."
  }
];

(function () {
  const hdr   = document.getElementById('header');
  const ham   = document.getElementById('ham');
  const mob   = document.getElementById('mob-nav');
  const links = document.querySelectorAll('#nav-links a');
  const secs  = ['hero','pec','desarrollo','proyectos','galeria','comunidades'];

  window.addEventListener('scroll', () => {
    hdr.classList.toggle('up', window.scrollY > 50);
  }, { passive: true });

  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    mob.classList.toggle('open');
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(a => a.classList.remove('active'));
      const a = document.querySelector(`#nav-links a[data-s="${e.target.id}"]`);
      if (a) a.classList.add('active');
    });
  }, { threshold: 0.25 });

  secs.forEach(id => { const el = document.getElementById(id); if (el) io.observe(el); });
})();

function closeMob() {
  document.getElementById('ham').classList.remove('open');
  document.getElementById('mob-nav').classList.remove('open');
}

(function () {
  const bg = document.getElementById('hero-bg');
  if (!bg) return;
  let t = false;
  window.addEventListener('scroll', () => {
    if (t) return;
    requestAnimationFrame(() => { bg.style.transform = `translateY(${window.scrollY * .25}px)`; t = false; });
    t = true;
  }, { passive: true });
})();

(function () {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      const tgt = parseInt(e.target.dataset.count, 10);
      const dur = 1500, s = performance.now();
      ;(function run(now) {
        const p = Math.min((now - s) / dur, 1);
        e.target.textContent = Math.round((1 - Math.pow(2, -10 * p)) * tgt);
        if (p < 1) requestAnimationFrame(run);
      })(s);
    });
  }, { threshold: .5 });
  document.querySelectorAll('[data-count]').forEach(c => io.observe(c));
})();

(function () {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      setTimeout(() => e.target.classList.add('on'), parseInt(e.target.dataset.d || 0, 10));
    });
  }, { threshold: .08 });
  document.querySelectorAll('[data-r]').forEach(el => io.observe(el));
})();

function revealCards() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      e.target.classList.add('vis');
    });
  }, { threshold: .04 });
  document.querySelectorAll('.prow:not(.vis),.comm-row:not(.vis),.gi:not(.vis)').forEach(el => io.observe(el));
}

function renderProjects(filter) {
  const list  = document.getElementById('proj-list');
  const count = document.getElementById('pcount');
  const items = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.tags.includes(filter));

  count.textContent = `${items.length} proyecto${items.length !== 1 ? 's' : ''}`;

  list.innerHTML = items.map((p, i) => `
    <div class="prow" data-id="${p.id}" style="transition-delay:${i * 45}ms">
      <div class="prow-left">
        <div class="prow-meta">
          <span class="prow-sem">${p.sem}</span>
          <div class="prow-tags">
            ${p.tags.map(t => `<span class="prow-tag">${t}</span>`).join('')}
          </div>
        </div>
        <h3 class="prow-title">${p.title}</h3>
        <div class="prow-place">
          <svg width="8" height="10" viewBox="0 0 8 10" fill="currentColor">
            <path d="M4 0a4 4 0 0 0-4 4c0 3 4 6 4 6s4-3 4-6a4 4 0 0 0-4-4zm0 5.5A1.5 1.5 0 1 1 4 2.5a1.5 1.5 0 0 1 0 3z"/>
          </svg>
          ${p.place}
        </div>
        <p class="prow-desc">${p.desc}</p>
      </div>
      <div class="prow-arrow">→</div>
    </div>
  `).join('');

  list.querySelectorAll('.prow').forEach(row => {
    row.addEventListener('click', () => openModal(+row.dataset.id));
  });
  revealCards();
}

function renderCommunities() {
  document.getElementById('comm-list').innerHTML = COMMUNITIES.map((c, i) => `
    <div class="comm-row" style="transition-delay:${i * 65}ms">
      <div class="comm-left">
        <div class="comm-name">${c.name}</div>
        <div class="comm-muni">${c.muni}</div>
      </div>
      <p class="comm-detail">${c.detail}</p>
    </div>
  `).join('');
  revealCards();
}

document.querySelectorAll('.fb').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.fb').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.f);
  });
});

function openModal(id) {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;

  document.getElementById('modal-inner').innerHTML = `
    <span class="m-sem">${p.sem}</span>
    <h2 class="m-title">${p.title}</h2>
    <div class="m-place">
      <svg width="8" height="10" viewBox="0 0 8 10" fill="currentColor">
        <path d="M4 0a4 4 0 0 0-4 4c0 3 4 6 4 6s4-3 4-6a4 4 0 0 0-4-4zm0 5.5A1.5 1.5 0 1 1 4 2.5a1.5 1.5 0 0 1 0 3z"/>
      </svg>
      ${p.place}
    </div>

    <span class="m-sec">Descripcion del proyecto</span>
    <p class="m-text">${p.desc}</p>

    <div class="m-div"></div>

    <span class="m-sec">Hallazgos clave</span>
    <div class="m-findings">
      ${p.findings.map(f => `
        <div class="mf">
          <div class="mf-val">${f.v}</div>
          <div class="mf-desc">${f.d}</div>
        </div>
      `).join('')}
    </div>

    <div class="m-div"></div>

    <span class="m-sec">Conclusion</span>
    <p class="m-text">${p.conc}</p>

    <div class="m-div"></div>

    <span class="m-sec">Integrantes · ${p.docente}</span>
    <div class="m-chips">
      ${p.alumnos.map(a => `<span class="m-chip">${a}</span>`).join('')}
    </div>

    <div class="m-div"></div>

    <a href="${p.pdf}" download class="m-download">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1v9M4 7l4 4 4-4M2 13h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Descargar documento completo
    </a>
  `;

  document.getElementById('modal-bg').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-bg').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modal-bg').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-bg')) closeModal();
});
document.getElementById('modal-x').addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

renderProjects('all');
renderCommunities();
revealCards();

(function () {
  const h1 = document.querySelector('.hero-h1');
  if (!h1) return;

  const chars = '!<>-_\\/[]{}—=+*^?#@$%';
  const originalHTML = h1.innerHTML;
  const plainText = h1.innerText;
  let iteration = 0;
  let frame = 0;

  function glitch() {
    const progress = iteration / (plainText.length * 2.5);
    if (progress >= 1) { h1.innerHTML = originalHTML; return; }

    let result = '';
    let charIdx = 0;
    for (let i = 0; i < originalHTML.length; i++) {
      const ch = originalHTML[i];
      if (ch === '<') {
        const end = originalHTML.indexOf('>', i);
        result += originalHTML.slice(i, end + 1);
        i = end;
        continue;
      }
      if (ch === ' ' || ch === '\n') { result += ch; continue; }
      if (charIdx < Math.floor(iteration)) {
        result += ch;
      } else {
        result += chars[Math.floor(Math.random() * chars.length)];
      }
      charIdx++;
    }
    h1.innerHTML = result;
    iteration += .4;
    requestAnimationFrame(glitch);
  }

  setTimeout(glitch, 400);
})();

(function () {
  const bgCanvas = document.createElement('canvas');
  bgCanvas.style.cssText = `
    position:fixed; inset:0; z-index:9997;
    pointer-events:none; opacity:.45;
  `;
  document.body.appendChild(bgCanvas);

  const heroEl   = document.getElementById('hero');
  const fgCanvas = document.createElement('canvas');
  fgCanvas.id = 'rain-canvas';
  fgCanvas.style.cssText = `
    position:absolute; inset:0; z-index:4;
    pointer-events:none; opacity:.75;
  `;
  heroEl.appendChild(fgCanvas);

  const bgCtx = bgCanvas.getContext('2d');
  const fgCtx = fgCanvas.getContext('2d');
  let W, H, HH, HW;

  function Drop(intense) {
    this.intense = intense;
    this.reset();
  }
  Drop.prototype.reset = function () {
    const w = this.intense ? HW : W;
    const h = this.intense ? HH : H;
    this.x     = Math.random() * w;
    this.y     = Math.random() * h - h;
    this.len   = this.intense
      ? Math.random() * 32 + 14
      : Math.random() * 22 + 8;
    this.speed = this.intense
      ? Math.random() * 3.5 + 2
      : Math.random() * 1.8 + .8;
    this.alpha = this.intense
      ? Math.random() * .45 + .18
      : Math.random() * .28 + .1;
    this.width = this.intense
      ? (Math.random() < .15 ? 2 : .9)
      : (Math.random() < .12 ? 1.2 : .6);
  };
  Drop.prototype.update = function () {
    this.y += this.speed;
    const h = this.intense ? HH : H;
    if (this.y > h + this.len) this.reset();
  };

  let bgDrops = [], fgDrops = [];

  function resize() {
    W  = bgCanvas.width  = window.innerWidth;
    H  = bgCanvas.height = window.innerHeight;
    HW = fgCanvas.width  = heroEl.offsetWidth;
    HH = fgCanvas.height = heroEl.offsetHeight;
  }

  function init() {
    resize();
    bgDrops = Array.from({ length: 130 }, () => new Drop(false));
    fgDrops = Array.from({ length: 200 }, () => new Drop(true));
  }

  function draw() {
    bgCtx.clearRect(0, 0, W, H);
    bgDrops.forEach(d => {
      d.update();
      bgCtx.beginPath();
      bgCtx.moveTo(d.x, d.y);
      bgCtx.lineTo(d.x - .4, d.y + d.len);
      bgCtx.strokeStyle = `rgba(29,185,84,${d.alpha})`;
      bgCtx.lineWidth = d.width;
      bgCtx.stroke();
    });

    fgCtx.clearRect(0, 0, HW, HH);
    fgDrops.forEach(d => {
      d.update();
      fgCtx.beginPath();
      fgCtx.moveTo(d.x, d.y);
      fgCtx.lineTo(d.x - .5, d.y + d.len);
      fgCtx.strokeStyle = `rgba(29,185,84,${d.alpha})`;
      fgCtx.lineWidth = d.width;
      fgCtx.stroke();
    });

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', init);
  init();
  draw();
})();

(function () {
  document.querySelectorAll('.sec-black, .hero, #desarrollo').forEach(sec => {
    const line = document.createElement('div');
    line.className = 'scan-line';
    sec.style.position = 'relative';
    sec.style.overflow = 'hidden';
    sec.appendChild(line);
  });
})();