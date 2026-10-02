'use client';

import { useEffect, useState } from 'react';

const nav = [
  ['Tecnología', '#tecnologia'],
  ['Desempeño', '#desempeno'],
  ['Certificaciones', '#certificaciones'],
  ['Aplicaciones', '#aplicaciones'],
  ['Criterios técnicos', '#criterios-tecnicos'],
  ['Casos de éxito', '#casos-exito'],
  ['Galería', '#galeria'],
  ['Contacto', '#contacto'],
];

const countries = [
  'Corea', 'Indonesia', 'Tailandia', 'Malasia', 'Mongolia', 'Ghana', 'Rumania', 'Filipinas',
  'Taiwán', 'Kazajistán', 'Pakistán', 'Irán', 'Turquía', 'Estados Unidos', 'Chile', 'México',
  'Puerto Rico', 'Curazao', 'Australia', 'Trinidad y Tobago', 'Arabia Saudita', 'China', 'India',
  'Sudáfrica', 'Singapur'
];

function BrandMark({ small = false }: { small?: boolean }) {
  return (
    <span className={small ? 'brandMark small' : 'brandMark'} aria-label="Símbolo de Barrera Metálica con Rodillos">
      <i/><i/>
    </span>
  );
}

function Icon({ name }: { name: string }) {
  const common = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  if (name === 'shield') return <svg {...common}><path d="M12 3 19 6v5c0 5-3.3 8.2-7 10-3.7-1.8-7-5-7-10V6l7-3Z"/></svg>;
  if (name === 'car') return <svg {...common}><path d="m5 13 2-5h10l2 5"/><path d="M4 13h16v5H4z"/><circle cx="7" cy="18" r="1"/><circle cx="17" cy="18" r="1"/></svg>;
  if (name === 'width') return <svg {...common}><path d="M4 12h16M7 9l-3 3 3 3M17 9l3 3-3 3"/></svg>;
  if (name === 'turn') return <svg {...common}><path d="M5 18v-4a6 6 0 0 1 6-6h6"/><path d="m14 5 3 3-3 3"/></svg>;
  if (name === 'eye') return <svg {...common}><path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></svg>;
  if (name === 'modules') return <svg {...common}><path d="m7 4 4 2.3-4 2.3L3 6.3 7 4Zm10 0 4 2.3-4 2.3-4-2.3L17 4ZM7 13l4 2.3-4 2.3-4-2.3L7 13Zm10 0 4 2.3-4 2.3-4-2.3 4-2.3Z"/></svg>;
  if (name === 'pin') return <svg {...common}><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/></svg>;
  if (name === 'phone') return <svg {...common}><path d="M6 3h3l1 4-2 1c1.2 3 3.2 5 6 6l1-2 4 1v3c0 1.1-.9 2-2 2C10.4 18 6 13.6 6 8V5c0-1.1.9-2 2-2Z"/></svg>;
  if (name === 'mail') return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>;
  if (name === 'globe') return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>;
  if (name === 'user') return <svg {...common}><circle cx="12" cy="8" r="3.5"/><path d="M5 21v-2a7 7 0 0 1 14 0v2"/></svg>;
  if (name === 'road') return <svg {...common}><path d="M9 21 11 3M15 21 13 3M12 7v3M12 14v3"/></svg>;
  if (name === 'tunnel') return <svg {...common}><path d="M5 20V9a7 7 0 0 1 14 0v11M9 20V9a3 3 0 0 1 6 0v11"/></svg>;
  if (name === 'bridge') return <svg {...common}><path d="M3 8h18M5 8v11M19 8v11M8 8v5M16 8v5M3 13h18"/></svg>;
  if (name === 'mountain') return <svg {...common}><path d="m3 19 6-10 4 6 3-5 5 9H3Z"/></svg>;
  if (name === 'curve') return <svg {...common}><path d="M7 20c0-4 5-3 5-7s-5-3-5-7M17 20c0-4-5-3-5-7s5-3 5-7"/></svg>;
  return <svg {...common}><circle cx="12" cy="12" r="8"/></svg>;
}

function CertificationMark({ type }: { type: string }) {
  if (type === 'MASH') return <span className="certMarkSvg"><Icon name="shield"/></span>;
  if (type === 'EN') return <span className="enMark">EN</span>;
  if (type === 'CE') return <span className="ceMark">CE</span>;
  if (type === 'FHWA') return <span className="fhwaMark"><i/><i/><i/></span>;
  if (type === 'IRF') return <span className="certMarkSvg"><Icon name="globe"/></span>;
  if (type === 'ASTM') return <span className="astmMark">ASTM</span>;
  if (type === 'KICT') return <span className="kictMark">KICT</span>;
  return <span className="certMarkText">{type}</span>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="siteHeader">
      <a className="logoLink" href="#inicio"><BrandMark/></a>
      <button className="menuButton" aria-label="Abrir menú" onClick={() => setOpen(!open)}>☰</button>
      <nav className={open ? 'mainNav open' : 'mainNav'}>
        {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <a className="headerCta" href="#contacto">Solicitar información <span>→</span></a>
    </header>
  );
}

function Hero({ onOpenVideo }: { onOpenVideo: () => void }) {
  const heroCerts = [
    ['MASH', 'TL-3 / TL-4', 'MASH'], ['EN 1317', 'H1 / H2', 'EN'], ['CE', '', 'CE'], ['FHWA', '', 'FHWA'], ['IRF', '', 'IRF']
  ];
  return (
    <>
      <section id="inicio" className="hero sectionAnchor">
        <img className="heroImage" src="/assets/hero-road.jpg" alt="Barrera Metálica con Rodillos instalada en una curva vial"/>
        <div className="heroOverlay"/>
        <div className="heroInner">
          <a className="inviasPill" href="/docs/articulo-732-22-invias.pdf" target="_blank" rel="noreferrer">
            Especificaciones INVÍAS <b>|</b> Artículo 732-22 <span>↗</span>
          </a>
          <h1>Barrera Metálica<br/>con Rodillos</h1>
          <div className="heroSubtitle">Rolling Barrier System</div>
          <p>Una solución orientada a proteger vidas<br/>y reducir la severidad de los impactos.</p>
          <div className="heroButtons">
            <a className="btn btnYellow" href="#contacto">Solicitar cotización técnica <span>→</span></a>
            <button className="btn btnGhost videoTrigger" type="button" onClick={onOpenVideo}><span className="play">▶</span> Ver cómo funciona</button>
          </div>
          <div className="heroCerts" aria-label="Certificaciones y respaldo">
            {heroCerts.map(([name, level, mark]) => (
              <a className="heroCert" key={name} href="#certificaciones">
                <div className="heroCertSymbol"><CertificationMark type={mark}/></div>
                <strong>{name}</strong>{level && <small>{level}</small>}
              </a>
            ))}
          </div>
        </div>
      </section>
      <Performance/>
    </>
  );
}

function VideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="videoModal" role="dialog" aria-modal="true" aria-label="Video de funcionamiento de la Barrera Metálica con Rodillos" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="videoModalPanel">
        <button className="videoClose" type="button" aria-label="Cerrar video" onClick={onClose}>×</button>
        <div className="videoFrame">
          <video controls preload="metadata" playsInline poster="/assets/function-main-final.jpg">
            <source src="/video/funcionamiento-barrera.mp4" type="video/mp4"/>
            Su navegador no admite la reproducción de video HTML5.
          </video>
        </div>
        <div className="videoModalFooter">
          <div>
            <strong>Funcionamiento de la Barrera Metálica con Rodillos</strong>
            <span>Impacto · absorción y disipación · redirección controlada</span>
          </div>
          <a href="#tecnologia" onClick={onClose}>Ver explicación técnica ↓</a>
        </div>
      </div>
    </div>
  );
}

function Performance() {
  const jumpToNote = (event: any, href: string) => {
    event.preventDefault();
    const id = href.replace('#', '');
    window.history.replaceState(null, '', href);
    window.dispatchEvent(new CustomEvent('technical-note-focus', { detail: id }));
    window.setTimeout(() => {
      const target = document.getElementById(id);
      if (!target) return;
      const header = document.querySelector('.siteHeader') as HTMLElement | null;
      const headerHeight = header?.offsetHeight ?? 0;
      const visualOffset = window.innerWidth <= 780
        ? Math.max(headerHeight + 34, window.innerHeight * 0.20)
        : headerHeight + 42;
      const top = window.scrollY + target.getBoundingClientRect().top - visualOffset;
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }, 160);
  };
  const metrics = [
    ['H1 / H2 / H3', 'Nivel de contención (NC)', 'Capacidad para contener vehículos hasta 13 toneladas', '#note-nc'],
    ['ASI ≤ 1.3', 'ASI | Índice de Severidad de la Aceleración', 'Desempeño de severidad registrado', '#note-asi'],
    ['0,27 – 0,38 m', 'Deflexión dinámica (D)', 'Desplazamiento lateral dinámico indicado', '#note-deflexion'],
    ['0,54 – 0,68 m', 'Anchura de trabajo (W)', 'Espacio lateral de trabajo indicado', '#note-anchura'],
    ['0,77 – 0,81 m', 'Intrusión del vehículo (VI)', 'Intrusión lateral indicada', '#note-intrusion'],
    ['Alta', 'Redireccionamiento', 'Capacidad de reconducción documentada', '#note-redireccionamiento'],
  ];
  return (
    <section id="desempeno" className="section light performance sectionAnchor">
      <div className="eyebrow"><span/>DESEMPEÑO TÉCNICO</div>
      <div className="metricsGrid">
        {metrics.map(([value, label, note, href]) => (
          <a className="metricCard" key={value} href={href} onClick={(event) => jumpToNote(event, href)} aria-label={`${label}: ${value}. Ver significado técnico`}>
            <BrandMark small/>
            <strong>{value}</strong>
            <h3>{label}</h3>
            <p>{note}</p>
            <span className="metricMeaning">¿Qué significa? ↓</span>
          </a>
        ))}
      </div>
      <div className="testConditions" aria-label="Condiciones de ensayo documentadas">
        <h3>Condiciones de ensayo documentadas</h3>
        <div><b>105.8 km/h</b><span>Velocidad de prueba indicada</span></div>
        <div><b>15° – 25°</b><span>Ángulo de impacto documentado</span></div>
      </div>
    </section>
  );
}

function Technology() {
  const steps = [
    ['01', 'Transformación de energía', 'El sistema transforma la energía cinética del impacto en energía rotacional mediante el movimiento de los rodillos, reduciendo significativamente la fuerza transmitida.'],
    ['02', 'Absorción y disipación', 'Los rodillos fabricados en EVA absorben y disipan la energía del impacto de forma progresiva, evitando una transferencia brusca a los ocupantes del vehículo.'],
    ['03', 'Redirección controlada', 'Tras el impacto, el sistema redirige suavemente el vehículo de vuelta a la vía, evitando rebotes peligrosos o salidas de la calzada.'],
  ];
  return (
    <section id="tecnologia" className="section light technology sectionAnchor">
      <div className="technologyTop">
        <div className="technologyCopy">
          <div className="eyebrow"><span/>¿CÓMO FUNCIONA?</div>
          <h2>Funcionamiento<br/>del <em>sistema</em></h2>
          <p>La barrera metálica con rodillos transforma la energía de impacto, la absorbe y la disipa a través del movimiento rotacional de sus rodillos, ayudando a redirigir el vehículo de forma controlada.</p>
        </div>
        <div className="technologyVisual mechanismSequence" aria-label="Secuencia de funcionamiento: impacto, rotación de rodillos y redirección">
          <figure className="mechanismPanel">
            <img src="/assets/function-seq-1.png" alt="01. Vehículo impactando lateralmente contra la Barrera Metálica con Rodillos"/>
            <figcaption><b>01</b><span>Impacto</span></figcaption>
          </figure>
          <figure className="mechanismPanel">
            <img src="/assets/function-seq-2.png" alt="02. Rodillos girando durante la absorción y disipación de energía"/>
            <figcaption><b>02</b><span>Absorción</span></figcaption>
          </figure>
          <figure className="mechanismPanel">
            <img src="/assets/function-seq-3.png" alt="03. Vehículo redirigido manteniendo el mismo sentido de circulación"/>
            <figcaption><b>03</b><span>Redirección</span></figcaption>
          </figure>
        </div>
      </div>
      <div className="stepsGrid">
        {steps.map(([n, title, text], index) => (
          <article className="stepCard" key={n}>
            <div className="stepNumber">{n}</div>
            <div className="stepText"><h3>{title}</h3><p>{text}</p></div>
            <div className={'stepPhoto stepPhoto' + (index + 1)}>
              <img src={`/assets/function-seq-${index + 1}.png`} alt={`${n}. ${title}`}/>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Advantages() {
  const cards = [
    ['modules', 'Diseño modular', 'Componentes reemplazables que facilitan el mantenimiento y reducen costos operativos.', '/assets/advantages/modular.jpg', 'Vista en despiece de los componentes de la Barrera Metálica con Rodillos'],
    ['curve', 'Versátil', 'Puede utilizarse en curvas peligrosas, rampas de entrada y salida con radios de curvatura pronunciados, tableros de puentes y entradas de túneles, así como para proteger instalaciones situadas junto a la carretera que presenten riesgos potenciales.', '/assets/advantages/versatil.jpg', 'Barrera Metálica con Rodillos instalada en una curva con condiciones invernales'],
    ['eye', 'Alta visibilidad', 'Los rodillos EVA cuentan con bandas de lámina reflectante de alta visibilidad 3M que proporcionan una advertencia reflectante segura para los conductores durante la noche.', '/assets/advantages/visibilidad-nocturna.jpg', 'Bandas reflectantes de alta visibilidad en la Barrera Metálica con Rodillos durante la noche'],
  ];
  return (
    <section className="section dark advantages">
      <img className="advantagesBg" src="/assets/advantages-road.jpg" alt="Barrera Metálica con Rodillos instalada en una vía curva"/>
      <div className="advantagesOverlay"/>
      <div className="advantagesCopy">
        <BrandMark/>
        <div className="eyebrow onDark"><span/>¿POR QUÉ ESTE SISTEMA?</div>
        <h2>Ventajas técnicas<br/>y de <em>diseño</em></h2>
        <p>La Barrera Metálica con Rodillos combina diseño modular, versatilidad de aplicación y alta visibilidad para responder a diferentes condiciones de infraestructura vial.</p>
      </div>
      <div className="advantagesGrid advantagesGridThree">
        {cards.map(([icon, title, text, image, alt]) => (
          <article className="advantageCard advantageCardVisual" key={title}>
            <img src={image} alt={alt}/>
            <div className="advantageCardBody"><div className="iconCircle"><Icon name={icon}/></div><div><h3>{title}</h3><p>{text}</p></div></div>
          </article>
        ))}
      </div>
      <div className="advantagesBar"><span>◷ Vida útil prolongada</span><span>⌁ Bajo mantenimiento</span><span>✓ Componentes de alta durabilidad</span></div>
    </section>
  );
}

function Certifications() {
  const certs = [
    ['EN 1317 H1/H2/H3', 'Certificación Europea CE para barreras de contención con los niveles más altos. Cumplimiento de normativa de seguridad vial europea.', '#certificaciones', 'CE'],
    ['MASH TL-3 – FHWA', 'Certificación de elegibilidad emitida por la Federal Highway Administration de Estados Unidos.', '#certificaciones', 'MASH'],
    ['Certificado CE', 'Garantiza el cumplimiento de las exigentes normas de seguridad de la Unión Europea para su comercialización y uso.', '#certificaciones', 'EN'],
    ['Normas ASTM', 'Ensayos de impacto y desempeño de sistemas de contención vehicular bajo estándares internacionales.', '#certificaciones', 'ASTM'],
    ['KICT – Corea del Sur', 'Desarrollado y validado por el Korea Institute of Civil Engineering and Building Technology.', '#certificaciones', 'KICT'],
  ];
  return (
    <section id="certificaciones" className="certifications sectionAnchor">
      <div className="certHero">
        <img src="/assets/certifications-road.jpg" alt="Proyecto real con Barrera Metálica con Rodillos"/>
        <div className="certHeroOverlay"/>
        <div className="certHeroCopy"><div className="eyebrow onDark"><span/>CERTIFICACIONES Y RESPALDO</div><h2>Estándares<br/>que <em>salvan vidas</em></h2><p>La barrera metálica con rodillos cumple con especificaciones técnicas nacionales e internacionales, respaldada por ensayos y certificaciones que validan su desempeño en condiciones reales de impacto.</p></div>
      </div>
      <div className="certContent">
        <article className="inviasCard">
          <div className="eyebrow"><span/>COLOMBIA</div>
          <h3>Especificaciones INVÍAS</h3>
          <p>Nuestro sistema cumple con las Especificaciones Técnicas del Instituto Nacional de Vías (INVÍAS) del año 2022, para sistemas de contención vehicular.</p>
          <a className="referenceCard" href="/docs/articulo-732-22-invias.pdf" target="_blank" rel="noreferrer"><span className="docIcon">PDF</span><span><b>Referencia</b><small>Especificaciones Técnicas INVÍAS – Artículo 732-22 (PDF)</small></span><strong>→</strong></a>
        </article>
        <article className="internationalCard">
          <div className="eyebrow"><span/>RESPALDO INTERNACIONAL</div>
          <h3>Certificaciones de desempeño</h3>
          <p>Ensayada y certificada bajo estándares internacionales reconocidos en seguridad vial y sistemas de contención.</p>
          <div className="certGrid">
            {certs.map(([title, text, href, logo]) => <a key={title} href={href} className="certCard" target={href.startsWith('/docs') ? '_blank' : undefined} rel="noreferrer"><div className="certLogo"><CertificationMark type={logo}/></div><div><b>{title}</b><p>{text}</p></div></a>)}
          </div>
        </article>
      </div>
      <div className="certBottom"><span>◉ Validación internacional de desempeño en seguridad vial.</span><span>⌁ Sistema modular de alta durabilidad y resistencia a la corrosión.</span><span>◌ Mayor visibilidad y seguridad para los usuarios viales.</span><span>◎ Presencia internacional con soporte técnico.</span></div>
    </section>
  );
}

function Applications() {
  const apps = [
    ['road', 'Separadores viales', 'Uso en medianas y separadores para contener y redirigir vehículos.', 'separadores.jpg'],
    ['road', 'Laterales de carretera', 'Protección en bordes de vía y arcenes con alta exposición al riesgo.', 'laterales.jpg'],
    ['tunnel', 'Entradas de túneles', 'Mayor visibilidad y transición segura en accesos a túneles.', 'tuneles.jpg'],
    ['curve', 'Curvas y puntos críticos', 'Aplicación en tramos con mayor riesgo de salida de vía e impacto.', 'curvas.jpg'],
    ['bridge', 'Puentes y viaductos', 'Solución para estructuras especiales y corredores elevados.', 'puentes.jpg'],
    ['mountain', 'Laderas y taludes', 'Implementación en zonas con geometría compleja y condiciones críticas.', 'laderas.jpg'],
  ];
  return (
    <section id="aplicaciones" className="applications section light sectionAnchor">
      <div className="applicationsHero">
        <img src="/assets/hero-road.jpg" alt="Barrera Metálica con Rodillos en diferentes entornos viales"/>
        <div className="applicationsOverlay"/>
        <div className="applicationsCopy"><div className="eyebrow onDark"><span/>APLICACIONES</div><h2>Solución adaptable a<br/><em>diferentes entornos viales</em></h2><p>El sistema de contención vehicular puede aplicarse en diversos entornos viales, según las necesidades técnicas y comerciales de cada proyecto.</p></div>
      </div>
      <div className="applicationsGrid">
        {apps.map(([icon, title, text, file]) => <article className="applicationCard" key={title}><div className="applicationHead"><div className="appIcon"><Icon name={icon}/></div><div><h3>{title}</h3><p>{text}</p></div></div><img src={'/assets/apps/' + file} alt={title}/></article>)}
      </div>
    </section>
  );
}

function Radar() {
  return (
    <svg className="radar" viewBox="0 0 360 280" role="img" aria-label="Comparación gráfica de desempeño entre Barrera Metálica con Rodillos y defensas convencionales">
      <g fill="none" stroke="#d7dce0" strokeWidth="1"><polygon points="180,32 290,92 290,188 180,248 70,188 70,92"/><polygon points="180,59 260,103 260,177 180,221 100,177 100,103"/><polygon points="180,86 231,114 231,166 180,194 129,166 129,114"/></g>
      <polygon points="180,39 278,96 272,184 180,236 84,184 82,96" fill="rgba(236,181,55,.28)" stroke="#ECB537" strokeWidth="4"/>
      <polygon points="180,90 228,117 223,163 180,190 135,164 135,117" fill="rgba(214,45,55,.16)" stroke="#D62D37" strokeWidth="4"/>
      <g fontSize="10.5" fill="#192C3D"><text x="180" y="18" textAnchor="middle">Nivel de contención</text><text x="350" y="94" textAnchor="end">ASI</text><text x="350" y="208" textAnchor="end">Deflexión dinámica</text><text x="180" y="274" textAnchor="middle">Anchura de trabajo</text><text x="10" y="208" textAnchor="start">Intrusión</text><text x="10" y="94" textAnchor="start">Redireccionamiento</text></g>
    </svg>
  );
}

function Criteria() {
  const notes = [
    ['shield', 'Nivel de contención (NC)', 'Capacidad que tiene un sistema para retener y absorber una cantidad determinada de energía cinética transversal durante el choque de un vehículo fuera de control, evitando que este atraviese la barrera o se vuelque. Se determina mediante pruebas de impacto a escala real y se clasifica en rangos, desde nivel Normal NC1 hasta Muy Alto NC4, que corresponden a clases como N2, H1–H4 o L1–L4 en la norma europea EN 1317, o TL-2 a TL-5 en la norma estadounidense MASH.', 'note-nc'],
    ['shield', 'ASI (Accident Severity Index) | Índice de Severidad de la Aceleración', 'Indicador numérico que mide la magnitud del impacto y las desaceleraciones o fuerzas «G» transmitidas al habitáculo del vehículo durante la colisión. Cuantifica el nivel de riesgo de sufrir lesiones para los ocupantes.', 'note-asi'],
    ['width', 'Deflexión dinámica (D)', 'El máximo desplazamiento lateral dinámico que sufre la cara frontal del sistema, la más próxima al tráfico, durante el impacto directo del vehículo. Es el parámetro clave para clasificar la barrera según su rigidez —flexible, semirrígida o rígida— y permite determinar si la cara de la barrera se deformará afectando el espacio posterior.', 'note-deflexion'],
    ['width', 'Anchura de trabajo (W)', 'Distancia transversal medida entre la cara frontal de la barrera antes del choque y la posición lateral más alejada que alcanza cualquier parte esencial del sistema o del vehículo durante la deformación del impacto. Representa el espacio lateral total que requiere la barrera para funcionar adecuadamente y fija la distancia mínima a la que debe colocarse respecto a un obstáculo.', 'note-anchura'],
    ['car', 'Intrusión del vehículo (VI)', 'Aplica principalmente al impacto de vehículos pesados —buses o camiones— y corresponde al máximo desplazamiento lateral dinámico de la parte superior o carrocería del vehículo por encima de la cara frontal de la barrera sin deformar, debido al cabeceo o inclinación lateral durante el choque.', 'note-intrusion'],
    ['turn', 'Redireccionamiento', 'Capacidad del sistema de contención para corregir la trayectoria del vehículo errante tras la colisión, encauzándolo de manera controlada y paralela al flujo vial.', 'note-redireccionamiento'],
  ];
  const [openNote, setOpenNote] = useState<string | null>(null);
  const [highlightedNote, setHighlightedNote] = useState<string | null>(null);
  useEffect(() => {
    let highlightTimer: ReturnType<typeof setTimeout> | undefined;
    const syncHash = () => {
      const id = window.location.hash.replace('#', '');
      if (notes.some(([, , , noteId]) => noteId === id)) {
        setOpenNote(id);
        setHighlightedNote(id);
        if (highlightTimer) clearTimeout(highlightTimer);
        highlightTimer = setTimeout(() => setHighlightedNote(null), 2800);
      }
    };
    syncHash();
    const onTechnicalNoteFocus = (event: Event) => {
      const custom = event as CustomEvent<string>;
      const id = custom.detail;
      if (!id || !notes.some(([, , , noteId]) => noteId === id)) return;
      setOpenNote(id);
      setHighlightedNote(id);
      if (highlightTimer) clearTimeout(highlightTimer);
      highlightTimer = setTimeout(() => setHighlightedNote(null), 3200);
    };
    window.addEventListener('hashchange', syncHash);
    window.addEventListener('technical-note-focus', onTechnicalNoteFocus as EventListener);
    return () => {
      window.removeEventListener('hashchange', syncHash);
      window.removeEventListener('technical-note-focus', onTechnicalNoteFocus as EventListener);
      if (highlightTimer) clearTimeout(highlightTimer);
    };
  }, []);
  return (
    <section id="criterios-tecnicos" className="criteria section light sectionAnchor">
      <div className="criteriaHero">
        <img src="/assets/criteria-road.jpg" alt="Proyecto real con Barrera Metálica con Rodillos en una vía de alta velocidad"/>
        <div className="criteriaOverlay"/>
        <div className="criteriaCopy"><div className="eyebrow onDark"><span/>CRITERIOS TÉCNICOS DE DESEMPEÑO</div><h2>Criterios técnicos<br/>de <em>desempeño</em></h2><p>La selección de un Sistema de contención vehicular debe evaluar la severidad del impacto, la deflexión, la anchura de trabajo, la intrusión y la capacidad de redireccionamiento.</p></div>
      </div>
      <div className="criteriaGrid">
        <article className="criteriaPanel notesPanel"><h4>NOTAS TÉCNICAS CLAVE</h4>{notes.map(([icon, title, text, id]) => (
          <div className={`technicalNote${openNote === id ? ' isOpen' : ''}${highlightedNote === id ? ' isHighlighted' : ''}`} id={id} key={title}>
            <button className="technicalNoteToggle" type="button" onClick={() => setOpenNote(openNote === id ? null : id)} aria-expanded={openNote === id}>
              <span className="noteIcon"><Icon name={icon}/></span>
              <span className="technicalNoteTitle">{title}</span>
              <span className="technicalNoteChevron">⌄</span>
            </button>
            <div className="technicalNoteBody"><p>{text}</p><a className="returnToPerformance" href="#desempeno">↑ Volver a desempeño</a></div>
          </div>
        ))}</article>
        <article className="criteriaPanel comparisonPanel"><h4>COMPARATIVA TÉCNICA</h4><div className="tableWrap"><table><thead><tr><th>Parámetro</th><th className="rollingHead">Barrera Metálica<br/>con Rodillos</th><th className="conventionalHead">Defensas<br/>Convencionales</th></tr></thead><tbody>
          <tr><td>Nivel de contención</td><td>H1, H2, H3 / TL-3<br/>hasta 13 toneladas</td><td>N2, H1 / TL-2 o TL-3</td></tr>
          <tr><td>ASI</td><td>≤ 1.3</td><td>1.4 – 1.9</td></tr>
          <tr><td>Deflexión dinámica</td><td>0.27 – 0.38 m</td><td>0.60 – 1.20 m</td></tr>
          <tr><td>Anchura de trabajo</td><td>0.54 – 0.68 m</td><td>0.8 – 1.5 m</td></tr>
          <tr><td>Intrusión</td><td>0.77 – 0.81 m</td><td>1.0 – 1.4 m</td></tr>
          <tr><td>Redireccionamiento</td><td>Alta</td><td>Media</td></tr>
        </tbody></table></div></article>
        <article className="criteriaPanel radarPanel"><h4>COMPARACIÓN GRÁFICA DE DESEMPEÑO</h4><Radar/><div className="legend"><span className="yellowDot"/>Barrera Metálica con Rodillos <span className="redDot"/>Defensas Convencionales</div></article>
        <article className="criteriaPanel summaryPanel"><h4>EN RESUMEN</h4><h3>No es solo<br/>el nivel de<br/>contención.<br/><em>Es el conjunto<br/>de factores.</em></h3><p>La Barrera Metálica con Rodillos presenta un comportamiento diferenciado en múltiples variables técnicas, que deben evaluarse de forma conjunta para la selección del sistema de contención.</p></article>
      </div>
      <div className="criteriaFoot"><span className="infoDot">i</span><p><b>Aunque dos o más sistemas compartan una misma clasificación de Nivel de Contención (NC),</b> esto no implica que tengan un comportamiento equivalente frente a todos los escenarios de impacto. La homologación bajo un mismo NC —como H1 o H2 en la norma EN 1317 o TL-3 bajo MASH— solo asegura que el sistema cumple con unos criterios mínimos ante ciertos tipos de vehículos y velocidades, pero no contempla diferencias críticas como el ancho de trabajo, la deflexión dinámica o el índice de severidad del impacto (ASI).</p></div>
    </section>
  );
}

function Cases() {
  return (
    <section id="casos-exito" className="cases section light sectionAnchor">
      <div className="casesTop">
        <div className="casesIntro">
          <div className="eyebrow"><span/>CASOS DE ÉXITO Y RESULTADOS</div>
          <h2>Presencia Internacional</h2>
          <p>La Barrera Metálica con Rodillos cuenta con presencia internacional en distintos entornos viales, con implementaciones reportadas en seis continentes.</p>
          <div className="caseStats">
            <div><Icon name="globe"/><strong>6</strong><span>continentes</span></div>
            <div><Icon name="pin"/><strong>25</strong><span>países y territorios</span></div>
            <div><Icon name="road"/><strong>Proyectos</strong><span>instalados en entornos reales</span></div>
          </div>
        </div>
        <div className="worldCard">
          <div className="worldHeader"><h3>Proyectos en 6 continentes</h3><span>PRESENCIA INTERNACIONAL</span></div>
          <div className="worldBody">
            <div className="worldMap"><img src="/assets/world-map-final.jpg" alt="Mapa mundial con presencia de proyectos en seis continentes"/></div>
            <div className="countryList"><h4>Países y territorios donde se ha implementado</h4><div>{countries.map(c => <span key={c}>• {c}</span>)}</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const photos = [
    ['/assets/gallery/01-median-strip.jpg', 'Barrera Metálica con Rodillos instalada en separador vial'],
    ['/assets/gallery/02-tunnel.jpg', 'Barrera Metálica con Rodillos instalada en entrada de túnel'],
    ['/assets/gallery/03-curve.jpg', 'Barrera Metálica con Rodillos instalada en curva vial'],
    ['/assets/gallery/04-roadside.jpg', 'Barrera Metálica con Rodillos instalada en lateral de carretera'],
    ['/assets/gallery/05-close-curve.jpg', 'Vista cercana de Barrera Metálica con Rodillos en curva'],
    ['/assets/gallery/06-autumn-curve.jpg', 'Barrera Metálica con Rodillos instalada en carretera de montaña'],
    ['/assets/gallery/07-wide-curve.jpg', 'Barrera Metálica con Rodillos en curva de amplio radio'],
    ['/assets/gallery/08-road-signs.jpg', 'Barrera Metálica con Rodillos instalada en corredor vial'],
    ['/assets/gallery/09-centerline.jpg', 'Barrera Metálica con Rodillos instalada en mediana de carretera'],
    ['/assets/gallery/10-closeup.jpg', 'Primer plano de rodillos EVA instalados en carretera'],
    ['/assets/gallery/11-winter-closeup.jpg', 'Barrera Metálica con Rodillos instalada en condiciones invernales'],
  ];
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    if (active === null) return;
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowRight') setActive((active + 1) % photos.length);
      if (e.key === 'ArrowLeft') setActive((active - 1 + photos.length) % photos.length);
    };
    document.addEventListener('keydown', key);
    const old = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', key); document.body.style.overflow = old; };
  }, [active]);
  return (
    <section id="galeria" className="gallery section light sectionAnchor">
      <div className="eyebrow"><span/>GALERÍA</div>
      <div className="galleryHeader"><h2>Sistema instalado en<br/><em>diferentes entornos viales</em></h2><p>Registro visual de implementaciones reales de la Barrera Metálica con Rodillos.</p></div>
      <div className="galleryGrid">
        {photos.map(([src, alt], index) => <button className="galleryItem" type="button" key={src} onClick={() => setActive(index)} aria-label={`Ampliar imagen ${index + 1}: ${alt}`}><img src={src} alt={alt} loading="lazy"/></button>)}
      </div>
      {active !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Galería ampliada" onMouseDown={(e) => { if (e.target === e.currentTarget) setActive(null); }}>
        <button className="lightboxClose" type="button" onClick={() => setActive(null)} aria-label="Cerrar galería">×</button>
        <button className="lightboxNav prev" type="button" onClick={() => setActive((active - 1 + photos.length) % photos.length)} aria-label="Imagen anterior">‹</button>
        <figure><img src={photos[active][0]} alt={photos[active][1]}/><figcaption>{active + 1} / {photos.length}</figcaption></figure>
        <button className="lightboxNav next" type="button" onClick={() => setActive((active + 1) % photos.length)} aria-label="Imagen siguiente">›</button>
      </div>}
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="contact sectionAnchor">
      <img className="contactBg" src="/assets/contact-road.jpg" alt="Barrera Metálica con Rodillos instalada en carretera"/>
      <div className="contactOverlay"/>
      <div className="contactCopy"><div className="eyebrow onDark"><span/>CONTACTO</div><h2>Hablemos de<br/>su <em>proyecto vial</em></h2><p>Una solución orientada a proteger vidas y reducir la severidad de los impactos. Solicite una cotización técnica o una reunión para conocer la tecnología.</p><div className="contactButtons"><a className="btn btnYellow" href="mailto:contacto@barreraconrodillos.com?subject=Solicitud%20de%20cotización%20técnica">Solicitar cotización técnica <span>→</span></a><a className="btn btnGhost" href="https://calendar.app.google/cWq6oxHw6p4u9mKKA" target="_blank" rel="noopener noreferrer">Agendar una reunión</a></div><div className="contactImpact"><strong>En 2025, 8.697 personas murieron en siniestros viales en Colombia.</strong><span>Un 5,15 % más que en 2024.</span><span>Hagamos posible que esta tecnología llegue a más carreteras de Colombia y Latinoamérica.</span><em>Porque un error humano no debería costar una vida.</em><small>Fuente: Agencia Nacional de Seguridad Vial (ANSV), 2025.</small></div></div>
      <aside className="contactCard"><div className="person"><div className="personDot"><Icon name="user"/></div><div><h3>Vanessa Díaz Torres</h3><p>Consultas técnicas y comerciales</p></div></div><hr/><p><Icon name="pin"/> Valencia, España</p><a href="tel:+34675123282"><Icon name="phone"/> +34 675 123 282</a><a href="mailto:contacto@barreraconrodillos.com"><Icon name="mail"/> contacto@barreraconrodillos.com</a><hr/><p><Icon name="globe"/> Atención para proyectos en Colombia y Latinoamérica.</p></aside>
      <footer className="footer"><BrandMark small/><nav>{nav.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav><span>© 2026 Barrera Metálica con Rodillos · Todos los derechos reservados.</span></footer>
    </section>
  );
}

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 650);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <>
      <Header/>
      <main>
        <Hero onOpenVideo={() => setVideoOpen(true)}/>
        <Technology/>
        <Advantages/>
        <Certifications/>
        <Applications/>
        <Criteria/>
        <Cases/>
        <Gallery/>
        <Contact/>
      </main>
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)}/>
      <button className={showTop ? "backToTop visible" : "backToTop"} type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Volver al inicio">↑</button>
    </>
  );
}
