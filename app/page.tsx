'use client';

import { useEffect, useState } from 'react';

const nav = [
  ['Tecnología', '#tecnologia'],
  ['Desempeño', '#desempeno'],
  ['Certificaciones', '#certificaciones'],
  ['Aplicaciones', '#aplicaciones'],
  ['Criterios técnicos', '#criterios-tecnicos'],
  ['Casos de éxito', '#casos-exito'],
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
  if (type === 'EN') return <span className="euMark"><b>✦</b><b>✦</b><b>✦</b><b>✦</b><b>✦</b><b>✦</b><b>✦</b><b>✦</b></span>;
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
  const metrics = [
    ['H1 / H2 / H3', 'Niveles de contención documentados', 'Capacidad para contener vehículos hasta 13 toneladas'],
    ['ASI ≤ 1.3', 'Desempeño de severidad registrado', ''],
    ['105.8 km/h', 'Velocidad de prueba indicada', ''],
    ['15° – 25°', 'Ángulo de impacto documentado', ''],
    ['0,27 – 0,38 m', 'Deflexión dinámica indicada', ''],
    ['≤ 0,81 m', 'Intrusión del vehículo indicada', ''],
  ];
  return (
    <section id="desempeno" className="section light performance sectionAnchor">
      <div className="eyebrow"><span/>DESEMPEÑO TÉCNICO</div>
      <div className="metricsGrid">
        {metrics.map(([value, label, note]) => (
          <article className="metricCard" key={value}>
            <BrandMark small/>
            <strong>{value}</strong>
            <h3>{label}</h3>
            {note && <p>{note}</p>}
          </article>
        ))}
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
    ['turn', 'Redirección controlada', 'Ayuda a reconducir el vehículo de forma estable y segura después del impacto.'],
    ['modules', 'Diseño modular', 'Componentes reemplazables que facilitan el mantenimiento y reducen costos operativos.'],
    ['shield', 'Menor daño estructural', 'La absorción progresiva de energía contribuye a reducir daños en el vehículo y en la infraestructura.'],
    ['eye', 'Alta visibilidad', 'Rodillos amarillos con bandas reflectantes que mejoran la percepción del sistema en diversas condiciones.'],
  ];
  return (
    <section className="section dark advantages">
      <img className="advantagesBg" src="/assets/advantages-road.jpg" alt="Barrera Metálica con Rodillos instalada en una vía curva"/>
      <div className="advantagesOverlay"/>
      <div className="advantagesCopy">
        <BrandMark/>
        <div className="eyebrow onDark"><span/>¿POR QUÉ ESTE SISTEMA?</div>
        <h2>Ventajas técnicas<br/>y de <em>diseño</em></h2>
        <p>La Barrera Metálica con Rodillos combina absorción de impacto, redirección controlada y componentes modulares para ofrecer una solución más visible, duradera y funcional en infraestructura vial.</p>
      </div>
      <div className="advantagesGrid">
        {cards.map(([icon, title, text]) => (
          <article className="advantageCard" key={title}>
            <div className="iconCircle"><Icon name={icon}/></div><h3>{title}</h3><p>{text}</p>
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
    <svg className="radar" viewBox="0 0 320 270" role="img" aria-label="Comparación gráfica de desempeño entre Barrera Metálica con Rodillos y defensas convencionales">
      <g fill="none" stroke="#d7dce0" strokeWidth="1"><polygon points="160,28 270,88 270,184 160,244 50,184 50,88"/><polygon points="160,55 240,99 240,173 160,217 80,173 80,99"/><polygon points="160,82 211,110 211,162 160,190 109,162 109,110"/></g>
      <polygon points="160,35 258,92 252,180 160,232 64,180 62,92" fill="rgba(236,181,55,.28)" stroke="#ECB537" strokeWidth="4"/>
      <polygon points="160,86 208,113 203,159 160,186 115,160 115,113" fill="rgba(214,45,55,.16)" stroke="#D62D37" strokeWidth="4"/>
      <g fontSize="11" fill="#192C3D" textAnchor="middle"><text x="160" y="16">Nivel de contención</text><text x="294" y="88">ASI</text><text x="286" y="202">Deflexión dinámica</text><text x="160" y="263">Anchura de trabajo</text><text x="28" y="202">Intrusión</text><text x="28" y="88">Redireccionamiento</text></g>
    </svg>
  );
}

function Criteria() {
  const notes = [
    ['shield', 'ASI (Accident Severity Index)', 'Mide la severidad del impacto para los ocupantes. La Barrera Metálica con Rodillos presenta menor aceleración, mejorando la seguridad pasiva.'],
    ['car', 'Intrusión', 'Menor deformación del vehículo, menor daño estructural, menos lesiones.'],
    ['width', 'Anchura de trabajo y deflexión dinámica', 'Son determinantes para tramos estrechos o con obstáculos laterales. La Barrera Metálica con Rodillos ofrece menor invasión del entorno.'],
    ['turn', 'Redireccionamiento', 'El diseño de rodillos disipa la energía y reconduce al vehículo, reduciendo el riesgo de rebote hacia la vía o vuelco.'],
  ];
  return (
    <section id="criterios-tecnicos" className="criteria section light sectionAnchor">
      <div className="criteriaHero">
        <img src="/assets/criteria-road.jpg" alt="Proyecto real con Barrera Metálica con Rodillos en una vía de alta velocidad"/>
        <div className="criteriaOverlay"/>
        <div className="criteriaCopy"><div className="eyebrow onDark"><span/>CRITERIOS TÉCNICOS DE DESEMPEÑO</div><h2>Criterios técnicos<br/>de <em>desempeño</em></h2><p>La selección de un Sistema de contención vehicular debe evaluar la severidad del impacto, la deflexión, la anchura de trabajo, la intrusión y la capacidad de redireccionamiento.</p></div>
      </div>
      <div className="criteriaGrid">
        <article className="criteriaPanel notesPanel"><h4>NOTAS TÉCNICAS CLAVE</h4>{notes.map(([icon, title, text]) => <div className="technicalNote" key={title}><div className="noteIcon"><Icon name={icon}/></div><div><b>{title}</b><p>{text}</p></div></div>)}</article>
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

function Contact() {
  return (
    <section id="contacto" className="contact sectionAnchor">
      <img className="contactBg" src="/assets/contact-road.jpg" alt="Barrera Metálica con Rodillos instalada en carretera"/>
      <div className="contactOverlay"/>
      <div className="contactCopy"><div className="eyebrow onDark"><span/>CONTACTO</div><h2>Hablemos de<br/>su <em>proyecto vial</em></h2><p>Una solución orientada a proteger vidas y reducir la severidad de los impactos. Solicite una cotización técnica o una reunión para conocer la tecnología.</p><div className="contactButtons"><a className="btn btnYellow" href="mailto:contacto@barreraconrodillos.com?subject=Solicitud%20de%20cotización%20técnica">Solicitar cotización técnica <span>→</span></a><a className="btn btnGhost" href="https://calendar.app.google/cWq6oxHw6p4u9mKKA" target="_blank" rel="noopener noreferrer">Agendar una reunión</a></div></div>
      <aside className="contactCard"><div className="person"><div className="personDot"><Icon name="user"/></div><div><h3>Vanessa Díaz Torres</h3><p>Consultas técnicas y comerciales</p></div></div><hr/><p><Icon name="pin"/> Valencia, España</p><a href="tel:+34675123282"><Icon name="phone"/> +34 675 123 282</a><a href="mailto:contacto@barreraconrodillos.com"><Icon name="mail"/> contacto@barreraconrodillos.com</a><hr/><p><Icon name="globe"/> Atención para proyectos en Colombia y Latinoamérica.</p></aside>
      <footer className="footer"><BrandMark small/><nav>{nav.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav><span>© 2026 Barrera Metálica con Rodillos · Todos los derechos reservados.</span></footer>
    </section>
  );
}

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false);
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
        <Contact/>
      </main>
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)}/>
    </>
  );
}
