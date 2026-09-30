'use client';

import { useState } from 'react';

const nav = [
  ['Tecnología', '#tecnologia'],
  ['Desempeño', '#desempeno'],
  ['Certificaciones', '#certificaciones'],
  ['Aplicaciones', '#aplicaciones'],
  ['Criterios técnicos', '#criterios-tecnicos'],
  ['Contacto', '#contacto'],
];

function Mark() {
  return <span className="mark" aria-label="Barrera con rodillos"><i/><i/></span>;
}

function Header() {
  const [open,setOpen]=useState(false);
  return <header className="header">
    <a href="#inicio" className="brand"><Mark/></a>
    <button className="menuBtn" aria-label="Abrir menú" onClick={()=>setOpen(!open)}>☰</button>
    <nav className={open ? 'nav open' : 'nav'}>
      {nav.map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}
    </nav>
    <a className="topCta" href="#contacto">Solicitar información <span>→</span></a>
  </header>
}

const certs=[
  ['MASH','TL-3 / TL-4'],['EN 1317','H1 / H2'],['CE',''],['FHWA',''],['IRF','']
];

function Hero(){
  return <>
    <section id="inicio" className="hero">
      <div className="heroPhoto"/>
      <div className="heroShade"/>
      <div className="heroContent">
        <div className="invias">Especificación INVÍAS <b>|</b> Artículo 732-22</div>
        <h1>Barrera Metálica<br/>con Rodillos</h1>
        <div className="subtitle">Rolling Barrier System</div>
        <p>Una solución orientada a proteger vidas<br/>y reducir la severidad de los impactos.</p>
        <div className="heroActions">
          <a href="#contacto" className="btn primary">Solicitar cotización técnica <span>→</span></a>
          <a href="#tecnologia" className="btn secondary"><span className="play">▶</span> Ver cómo funciona</a>
        </div>
        <div id="certificaciones" className="certStrip">
          {certs.map(([a,b])=><div className="cert" key={a}><div className="certIcon">{a==='CE'?'CE':'◉'}</div><b>{a}</b>{b&&<small>{b}</small>}</div>)}
        </div>
      </div>
    </section>
    <Performance/>
  </>
}

function Performance(){
 const data=[
  ['H1 / H2 / H3','Niveles de contención documentados','Capacidad para contener vehículos hasta 13 toneladas'],
  ['ASI ≤ 1.3','Desempeño de severidad registrado',''],
  ['105.8 km/h','Velocidad de prueba indicada',''],
  ['15° – 25°','Ángulo de impacto documentado',''],
  ['0,27 – 0,38 m','Deflexión dinámica indicada',''],
  ['≤ 0,81 m','Intrusión del vehículo indicada',''],
 ];
 return <section id="desempeno" className="performance sectionLight">
   <div className="sectionEyebrow"><span/>DESEMPEÑO TÉCNICO</div>
   <div className="metricGrid">
     {data.map((d,i)=><article className="metric" key={d[0]}>
       <Mark/><strong>{d[0]}</strong><h3>{d[1]}</h3>{d[2]&&<p>{d[2]}</p>}
     </article>)}
   </div>
 </section>
}

function Technology(){
 return <section id="tecnologia" className="technology sectionLight">
   <div className="techTop">
     <div className="techCopy">
       <div className="sectionEyebrow"><span/>¿CÓMO FUNCIONA?</div>
       <h2>Funcionamiento<br/>del <em>sistema</em></h2>
       <p>La barrera metálica con rodillos transforma la energía de impacto, la absorbe y la disipa a través del movimiento rotacional de sus rodillos, ayudando a redirigir el vehículo de forma controlada.</p>
     </div>
     <div className="techVisual"><img src="/assets/function-road.jpg" alt="Barrera metálica con rodillos durante una trayectoria de impacto"/></div>
   </div>
   <div className="steps">
     {[
       ['01','Transformación de energía','La energía de impacto se transforma en energía rotacional a través del movimiento de los rodillos.'],
       ['02','Absorción y disipación','Los rodillos ayudan a absorber y disipar la energía de forma progresiva, reduciendo la fuerza del impacto.'],
       ['03','Redirección controlada','El sistema ayuda a guiar el vehículo de regreso a la trayectoria de la vía de forma controlada.'],
     ].map(([n,t,d])=><article className="step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}
   </div>
 </section>
}

function Advantages(){
 const cards=[
  ['↪','Redirección controlada','Ayuda a reconducir el vehículo de forma estable y segura después del impacto.'],
  ['◇','Diseño modular','Componentes reemplazables que facilitan el mantenimiento y reducen costos operativos.'],
  ['✓','Menor daño estructural','La absorción progresiva de energía contribuye a reducir daños en el vehículo y en la infraestructura.'],
  ['◉','Alta visibilidad','Rodillos amarillos con bandas reflectantes que mejoran la percepción del sistema en diversas condiciones.'],
 ];
 return <section className="advantages">
   <div className="advantagesVisual"><img src="/assets/advantages-road.jpg" alt="Barrera metálica con rodillos en curva"/></div>
   <div className="advantagesIntro">
      <Mark/><div className="sectionEyebrow dark"><span/>¿POR QUÉ ESTE SISTEMA?</div>
      <h2>Ventajas técnicas<br/>y de <em>diseño</em></h2>
      <p>El sistema combina absorción de impacto, redirección controlada y componentes modulares para ofrecer una solución más visible, duradera y funcional en infraestructura vial.</p>
   </div>
   <div className="advGrid">{cards.map(([ic,t,d])=><article className="advCard" key={t}><div className="advIcon">{ic}</div><h3>{t}</h3><p>{d}</p></article>)}</div>
   <div className="advFoot"><span>◷ Vida útil prolongada</span><span>⌕ Bajo mantenimiento</span><span>✓ Componentes de alta durabilidad</span></div>
 </section>
}

function Applications(){
 const items=[
  ['Separadores viales','Uso en medianas y separadores para contener y redirigir vehículos.'],
  ['Laterales de carretera','Protección en bordes de vía y arcenes con alta exposición al riesgo.'],
  ['Entradas de túneles','Mayor visibilidad y transición segura en accesos a túneles.'],
  ['Curvas y puntos críticos','Aplicación en tramos con mayor riesgo de salida de vía e impacto.'],
  ['Puentes y viaductos','Solución para estructuras especiales y corredores elevados.'],
  ['Laderas y taludes','Implementación en zonas con geometría compleja y condiciones críticas.'],
 ];
 return <section id="aplicaciones" className="applications sectionLight">
   <div className="appsHero">
     <div className="appsVisual"><img src="/assets/applications-road.jpg" alt="Barrera Metálica con Rodillos en carretera curva"/></div>
     <div className="appsShade"/>
     <div className="appsCopy"><div className="sectionEyebrow dark"><span/>APLICACIONES</div><h2>Solución adaptable a<br/><em>diferentes entornos viales</em></h2><p>El sistema de contención vehicular puede aplicarse en diversos entornos viales, según las necesidades técnicas y comerciales de cada proyecto.</p></div>
   </div>
   <div className="appsGrid">{items.map(([t,d],i)=><article className="appCard" key={t}><div className="appIcon">{['∥','⌁','∩','S','Π','▲'][i]}</div><div><h3>{t}</h3><p>{d}</p></div></article>)}</div>
 </section>
}

function Radar(){
 return <svg className="radar" viewBox="0 0 260 230" role="img" aria-label="Comparación gráfica de desempeño">
   <g fill="none" stroke="#cbd2d8" strokeWidth="1">
    <polygon points="130,20 225,72 225,158 130,210 35,158 35,72"/><polygon points="130,45 198,82 198,148 130,185 62,148 62,82"/><polygon points="130,70 172,92 172,138 130,160 88,138 88,92"/>
   </g>
   <polygon points="130,28 213,78 207,153 130,197 48,152 47,79" fill="rgba(236,181,55,.28)" stroke="#ECB537" strokeWidth="3"/>
   <polygon points="130,68 170,92 165,137 130,158 91,138 91,93" fill="rgba(231,112,65,.22)" stroke="#e77041" strokeWidth="3"/>
   <g fontSize="10" fill="#192C3D" textAnchor="middle"><text x="130" y="12">Nivel de contención</text><text x="235" y="70">ASI</text><text x="232" y="172">Deflexión</text><text x="130" y="225">Anchura</text><text x="23" y="172">Intrusión</text><text x="25" y="70">Redirección</text></g>
 </svg>
}

function Criteria(){
 return <section id="criterios-tecnicos" className="criteria sectionLight">
   <div className="criteriaHero"><div className="criteriaVisual"><img src="/assets/criteria-road.jpg" alt="Detalle del sistema de barrera metálica con rodillos"/></div><div className="criteriaShade"/><div className="criteriaCopy"><div className="sectionEyebrow dark"><span/>CRITERIOS TÉCNICOS DE DESEMPEÑO</div><h2>Criterios técnicos<br/>de desempeño</h2><p>La selección de un sistema de barrera con rodillos debe evaluar la severidad del impacto, la deflexión, la anchura de trabajo, la intrusión y la capacidad de redireccionamiento.</p></div></div>
   <div className="criteriaGrid">
    <article className="criteriaNotes"><h4>NOTAS TÉCNICAS CLAVE</h4>{[
     ['ASI (Accident Severity Index)','El sistema presenta menor aceleración, resultando en menor severidad del impacto y mayor seguridad pasiva para los ocupantes.'],
     ['Intrusión','Menor deformación del vehículo, menor daño estructural, menos lesiones.'],
     ['Anchura de trabajo y deflexión dinámica','Claves en tramos estrechos o con obstáculos laterales. Menor invasión del entorno.'],
     ['Redireccionamiento','El diseño de rodillos disipa la energía y reconduce el vehículo, reduciendo el riesgo de rebote hacia la vía o el vuelco.'],
    ].map(([t,d])=><div className="note" key={t}><span>●</span><div><b>{t}</b><p>{d}</p></div></div>)}</article>
    <article className="comparison"><h4>COMPARATIVA TÉCNICA</h4><div className="tableWrap"><table><thead><tr><th>Parámetro</th><th>Barrera con Rodillos</th><th>Defensas Convencionales</th></tr></thead><tbody>
     <tr><td>Nivel de contención</td><td>H1, H2, H3 / TL-3<br/>hasta 13 toneladas</td><td>N2, H1 / TL-2 o TL-3</td></tr>
     <tr><td>ASI</td><td>≤ 1.3</td><td>1.4 – 1.9</td></tr><tr><td>Deflexión dinámica</td><td>0.27 – 0.38 m</td><td>0.60 – 1.20 m</td></tr><tr><td>Anchura de trabajo</td><td>0.54 – 0.68 m</td><td>0.8 – 1.5 m</td></tr><tr><td>Intrusión</td><td>0.77 – 0.81 m</td><td>1.0 – 1.4 m</td></tr><tr><td>Redireccionamiento</td><td>Alta</td><td>Media</td></tr>
    </tbody></table></div></article>
    <article className="radarCard"><h4>COMPARACIÓN GRÁFICA DE DESEMPEÑO</h4><Radar/><p>La selección de un sistema de contención no puede limitarse al nivel de contención. Debe incluir un análisis integral del desempeño bajo condiciones reales.</p></article>
    <article className="summaryCard"><h4>EN RESUMEN</h4><h3>No es solo<br/>el nivel de<br/>contención.<br/><em>Es el conjunto<br/>de factores.</em></h3><p>El sistema ofrece un desempeño diferenciado en múltiples variables técnicas y un comportamiento posterior al impacto orientado a la seguridad vial.</p></article>
   </div>
 </section>
}

function Contact(){
 return <section id="contacto" className="contact">
  <div className="contactBg"><img src="/assets/contact-road.jpg" alt="Barrera metálica con rodillos en entorno vial"/></div><div className="contactShade"/>
  <div className="contactCopy"><div className="sectionEyebrow dark"><span/>CONTACTO</div><h2>Hablemos de<br/>su <em>proyecto vial</em></h2><p>Una solución orientada a proteger vidas y reducir la severidad de los impactos. Solicite una cotización técnica o una reunión para conocer la tecnología.</p><div className="heroActions"><a className="btn primary" href="mailto:contacto@barreraconrodillos.com?subject=Solicitud%20de%20cotización%20técnica">Solicitar cotización técnica →</a><a className="btn secondary" href="mailto:contacto@barreraconrodillos.com?subject=Agendar%20una%20reunión">Agendar una reunión</a></div></div>
  <aside className="contactCard"><div className="person"><div className="personIcon">●</div><div><h3>Vanessa Díaz Torres</h3><p>Consultas técnicas y comerciales</p></div></div><hr/><p>⌖ Valencia, España</p><a href="tel:+34675123282">☎ +34 675 123 282</a><a href="mailto:contacto@barreraconrodillos.com">✉ contacto@barreraconrodillos.com</a><hr/><p>◎ Atención para proyectos en Colombia y Latinoamérica.</p></aside>
  <footer><Mark/><nav>{nav.map(([label,href])=><a key={href} href={href}>{label}</a>)}</nav><span>Barrera Metálica con Rodillos · Especificación INVÍAS Artículo 732-22</span></footer>
 </section>
}

export default function Page(){
 return <main><Header/><Hero/><Technology/><Advantages/><Applications/><Criteria/><Contact/></main>
}
