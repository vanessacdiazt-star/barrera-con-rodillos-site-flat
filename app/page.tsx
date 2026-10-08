'use client';

import { useState } from 'react';

const nav = [
  ['Tecnología', '#tecnologia'],
  ['Desempeño', '#desempeno'],
  ['Certificaciones', '#certificaciones'],
  ['Evaluación', '#aplicaciones'],
  ['Criterios técnicos', '#criterios-tecnicos'],
  ['Colombia', '#colombia'],
  ['Contacto', '#contacto'],
];

function Mark() {
  return (
    <span className="mark" aria-label="Barrera con rodillos">
      <i />
      <i />
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <a href="#inicio" className="brand">
        <Mark />
      </a>

      <button
        className="menuBtn"
        aria-label="Abrir menú"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <nav className={open ? 'nav open' : 'nav'}>
        {nav.map(([label, href]) => (
          <a
            key={href}
            href={href}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>

      <a className="topCta" href="#contacto">
        Solicitar información <span>→</span>
      </a>
    </header>
  );
}

const certs = [
  ['MASH', 'TL-3 / TL-4'],
  ['EN 1317', 'H1 / H2'],
  ['CE', ''],
  ['FHWA', ''],
  ['IRF', ''],
];

function Hero() {
  return (
    <>
      <section id="inicio" className="hero">
        <div className="heroPhoto" />
        <div className="heroShade" />

        <div className="heroContent">
          <div className="invias">
            Marco técnico en Colombia <b>|</b> INVÍAS · Artículo 730-22
          </div>

          <h1>
            Barrera Metálica
            <br />
            con Rodillos
          </h1>

          <div className="subtitle">Rolling Barrier System</div>

          <p>
            Una solución orientada a proteger vidas
            <br />
            y reducir la severidad de los impactos.
          </p>

          <div className="heroActions">
            <a href="#contacto" className="btn primary">
              Solicitar cotización técnica <span>→</span>
            </a>

            <a href="#tecnologia" className="btn secondary">
              <span className="play">▶</span> Ver cómo funciona
            </a>
          </div>

          <div id="certificaciones" className="certStrip">
            {certs.map(([a, b]) => (
              <div className="cert" key={a}>
                <div className="certIcon">
                  {a === 'CE' ? 'CE' : '◉'}
                </div>
                <b>{a}</b>
                {b && <small>{b}</small>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Performance />
    </>
  );
}

function Performance() {
  const data = [
    [
      'H1 / H2 / H3',
      'Niveles de contención documentados',
      'Capacidad para contener vehículos hasta 13 toneladas',
    ],
    [
      'ASI ≤ 1.3',
      'Desempeño de severidad registrado',
      '',
    ],
    [
      '105.8 km/h',
      'Velocidad de prueba indicada',
      '',
    ],
    [
      '15° – 25°',
      'Ángulo de impacto documentado',
      '',
    ],
    [
      '0,27 – 0,38 m',
      'Deflexión dinámica indicada',
      '',
    ],
    [
      '≤ 0,81 m',
      'Intrusión del vehículo indicada',
      '',
    ],
  ];

  return (
    <section
      id="desempeno"
      className="performance sectionLight"
    >
      <div className="sectionEyebrow">
        <span />
        DESEMPEÑO TÉCNICO
      </div>

      <div className="metricGrid">
        {data.map((d) => (
          <article className="metric" key={d[0]}>
            <Mark />
            <strong>{d[0]}</strong>
            <h3>{d[1]}</h3>
            {d[2] && <p>{d[2]}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section
      id="tecnologia"
      className="technology sectionLight"
    >
      <div className="techTop">
        <div className="techCopy">
          <div className="sectionEyebrow">
            <span />
            ¿CÓMO FUNCIONA?
          </div>

          <h2>
            Funcionamiento
            <br />
            del <em>sistema</em>
          </h2>

          <p>
            La barrera metálica con rodillos transforma parte de la
            energía del impacto, la absorbe y la disipa mediante el
            movimiento rotacional de sus rodillos, contribuyendo al
            redireccionamiento controlado del vehículo.
          </p>
        </div>

        <div className="techVisual">
          <img
            src="/assets/function-road.jpg"
            alt="Barrera metálica con rodillos durante una trayectoria de impacto"
          />
        </div>
      </div>

      <div className="steps">
        {[
          [
            '01',
            'Transformación de energía',
            'La energía de impacto se transforma parcialmente en energía rotacional a través del movimiento de los rodillos.',
          ],
          [
            '02',
            'Absorción y disipación',
            'Los rodillos ayudan a absorber y disipar la energía de forma progresiva durante la interacción con el vehículo.',
          ],
          [
            '03',
            'Redirección controlada',
            'El sistema contribuye a orientar nuevamente el vehículo hacia una trayectoria controlada después del impacto.',
          ],
        ].map(([n, t, d]) => (
          <article className="step" key={n}>
            <span>{n}</span>

            <div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Advantages() {
  const cards = [
    [
      '↪',
      'Redirección controlada',
      'Ayuda a reconducir el vehículo de forma estable después del impacto.',
    ],
    [
      '◇',
      'Diseño modular',
      'Componentes reemplazables que facilitan las labores de mantenimiento del sistema.',
    ],
    [
      '✓',
      'Gestión progresiva del impacto',
      'La configuración del sistema está orientada a gestionar progresivamente la energía durante la colisión.',
    ],
    [
      '◉',
      'Alta visibilidad',
      'Rodillos amarillos con bandas reflectantes que mejoran la percepción del sistema en distintas condiciones.',
    ],
  ];

  return (
    <section className="advantages">
      <div className="advantagesVisual">
        <img
          src="/assets/advantages-road.jpg"
          alt="Barrera metálica con rodillos en curva"
        />
      </div>

      <div className="advantagesIntro">
        <Mark />

        <div className="sectionEyebrow dark">
          <span />
          ¿POR QUÉ ESTE SISTEMA?
        </div>

        <h2>
          Ventajas técnicas
          <br />
          y de <em>diseño</em>
        </h2>

        <p>
          El sistema combina gestión del impacto, redireccionamiento,
          visibilidad y una arquitectura modular pensada para responder
          como un conjunto.
        </p>
      </div>

      <div className="advGrid">
        {cards.map(([ic, t, d]) => (
          <article className="advCard" key={t}>
            <div className="advIcon">{ic}</div>
            <h3>{t}</h3>
            <p>{d}</p>
          </article>
        ))}
      </div>

      <div className="advFoot">
        <span>◷ Vida útil prolongada</span>
        <span>⌕ Mantenimiento localizado</span>
        <span>✓ Componentes de alta durabilidad</span>
      </div>
    </section>
  );
}

function Applications() {
  const items = [
    [
      'Separadores viales',
      'Puede evaluarse en medianas y separadores cuando las condiciones del proyecto requieren contener vehículos errantes.',
    ],
    [
      'Laterales de carretera',
      'Puede considerarse en bordes de vía con presencia de peligros u obstáculos laterales.',
    ],
    [
      'Entradas de túneles',
      'Sectores donde la geometría, la transición y las condiciones de riesgo requieren evaluar sistemas de contención.',
    ],
    [
      'Curvas y puntos críticos',
      'Tramos donde existe mayor exposición a salidas de vía y donde el riesgo debe analizarse específicamente.',
    ],
    [
      'Puentes y viaductos',
      'Estructuras donde la selección del sistema debe responder a las condiciones y restricciones particulares del proyecto.',
    ],
    [
      'Laderas y taludes',
      'Zonas laterales con desniveles, geometría compleja u otros peligros asociados a una salida de vía.',
    ],
  ];

  return (
    <section
      id="aplicaciones"
      className="applications sectionLight"
    >
      <div className="appsHero">
        <div className="appsVisual">
          <img
            src="/assets/applications-road.jpg"
            alt="Barrera Metálica con Rodillos en carretera curva"
          />
        </div>

        <div className="appsShade" />

        <div className="appsCopy">
          <div className="sectionEyebrow dark">
            <span />
            EVALUACIÓN DE APLICACIÓN
          </div>

          <h2>
            Dónde puede evaluarse
            <br />
            <em>su aplicación</em>
          </h2>

          <p>
            No todos los proyectos requieren la misma solución. La
            aplicación de un sistema de contención depende del riesgo
            identificado, las condiciones de la vía y el desempeño
            requerido.
          </p>
        </div>
      </div>

      <div className="appsGrid">
        {items.map(([t, d], i) => (
          <article className="appCard" key={t}>
            <div className="appIcon">
              {['∥', '⌁', '∩', 'S', 'Π', '▲'][i]}
            </div>

            <div>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Radar() {
  return (
    <svg
      className="radar"
      viewBox="0 0 260 230"
      role="img"
      aria-label="Comparación gráfica de desempeño"
    >
      <g
        fill="none"
        stroke="#cbd2d8"
        strokeWidth="1"
      >
        <polygon points="130,20 225,72 225,158 130,210 35,158 35,72" />
        <polygon points="130,45 198,82 198,148 130,185 62,148 62,82" />
        <polygon points="130,70 172,92 172,138 130,160 88,138 88,92" />
      </g>

      <polygon
        points="130,28 213,78 207,153 130,197 48,152 47,79"
        fill="rgba(236,181,55,.28)"
        stroke="#ECB537"
        strokeWidth="3"
      />

      <polygon
        points="130,68 170,92 165,137 130,158 91,138 91,93"
        fill="rgba(231,112,65,.22)"
        stroke="#e77041"
        strokeWidth="3"
      />

      <g
        fontSize="10"
        fill="#192C3D"
        textAnchor="middle"
      >
        <text x="130" y="12">
          Nivel de contención
        </text>
        <text x="235" y="70">
          ASI
        </text>
        <text x="232" y="172">
          Deflexión
        </text>
        <text x="130" y="225">
          Anchura
        </text>
        <text x="23" y="172">
          Intrusión
        </text>
        <text x="25" y="70">
          Redirección
        </text>
      </g>
    </svg>
  );
}

function Criteria() {
  return (
    <section
      id="criterios-tecnicos"
      className="criteria sectionLight"
    >
      <div className="criteriaHero">
        <div className="criteriaVisual">
          <img
            src="/assets/criteria-road.jpg"
            alt="Detalle del sistema de barrera metálica con rodillos"
          />
        </div>

        <div className="criteriaShade" />

        <div className="criteriaCopy">
          <div className="sectionEyebrow dark">
            <span />
            CRITERIOS TÉCNICOS DE DESEMPEÑO
          </div>

          <h2>
            Criterios técnicos
            <br />
            de desempeño
          </h2>

          <p>
            La selección de un sistema de contención no puede
            limitarse únicamente al nivel de contención. También deben
            considerarse la severidad, la deflexión, la anchura de
            trabajo, la intrusión y el comportamiento posterior al
            impacto.
          </p>
        </div>
      </div>

      <div className="criteriaGrid">
        <article className="criteriaNotes">
          <h4>NOTAS TÉCNICAS CLAVE</h4>

          {[
            [
              'ASI (Accident Severity Index)',
              'Permite evaluar la severidad del impacto para los ocupantes y es uno de los parámetros relevantes para comparar el comportamiento de distintos sistemas.',
            ],
            [
              'Intrusión',
              'Permite analizar el espacio adicional que puede ocupar el vehículo o el sistema durante el impacto.',
            ],
            [
              'Anchura de trabajo y deflexión dinámica',
              'Son especialmente relevantes en tramos estrechos o donde existen obstáculos próximos a la vía.',
            ],
            [
              'Redireccionamiento',
              'Evalúa el comportamiento de la trayectoria del vehículo después de interactuar con el sistema.',
            ],
          ].map(([t, d]) => (
            <div className="note" key={t}>
              <span>●</span>

              <div>
                <b>{t}</b>
                <p>{d}</p>
              </div>
            </div>
          ))}
        </article>

        <article className="comparison">
          <h4>COMPARATIVA TÉCNICA</h4>

          <div className="tableWrap">
            <table>
              <thead>
                <tr>
                  <th>Parámetro</th>
                  <th>Barrera con Rodillos</th>
                  <th>Defensas Convencionales</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Nivel de contención</td>
                  <td>
                    H1, H2, H3 / TL-3
                    <br />
                    hasta 13 toneladas
                  </td>
                  <td>N2, H1 / TL-2 o TL-3</td>
                </tr>

                <tr>
                  <td>ASI</td>
                  <td>≤ 1.3</td>
                  <td>1.4 – 1.9</td>
                </tr>

                <tr>
                  <td>Deflexión dinámica</td>
                  <td>0.27 – 0.38 m</td>
                  <td>0.60 – 1.20 m</td>
                </tr>

                <tr>
                  <td>Anchura de trabajo</td>
                  <td>0.54 – 0.68 m</td>
                  <td>0.8 – 1.5 m</td>
                </tr>

                <tr>
                  <td>Intrusión</td>
                  <td>0.77 – 0.81 m</td>
                  <td>1.0 – 1.4 m</td>
                </tr>

                <tr>
                  <td>Redireccionamiento</td>
                  <td>Alta</td>
                  <td>Media</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>

        <article className="radarCard">
          <h4>COMPARACIÓN GRÁFICA DE DESEMPEÑO</h4>

          <Radar />

          <p>
            El nivel de contención por sí solo no describe completamente
            el comportamiento de un sistema. La decisión debe considerar
            el conjunto de parámetros relevantes para las condiciones del
            proyecto.
          </p>
        </article>

        <article className="summaryCard">
          <h4>EN RESUMEN</h4>

          <h3>
            No es solo
            <br />
            el nivel de
            <br />
            contención.
            <br />
            <em>
              Es el conjunto
              <br />
              de factores.
            </em>
          </h3>

          <p>
            Sistemas con una clasificación de contención comparable
            pueden presentar comportamientos distintos en severidad,
            deformación, espacio requerido y redireccionamiento.
          </p>
        </article>
      </div>
    </section>
  );
}

function Colombia() {
  return (
    <section
      id="colombia"
      style={{
        padding: '82px 24px',
        background: '#192C3D',
        color: '#FFFFFF',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
          gap: '64px',
          alignItems: 'center',
        }}
      >
        <div>
          <div
            style={{
              margin: 0,
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#ECB537',
            }}
          >
            Colombia
          </div>

          <h2
            style={{
              margin: '18px 0 0',
              maxWidth: '760px',
              fontSize: 'clamp(38px, 4vw, 58px)',
              lineHeight: 1.04,
              letterSpacing: '-0.035em',
              color: '#FFFFFF',
            }}
          >
            Un marco técnico que también ha evolucionado
          </h2>
        </div>

        <div>
          <p
            style={{
              margin: 0,
              maxWidth: '680px',
              fontSize: '17px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.76)',
            }}
          >
            Las barreras metálicas con rodillos fueron reguladas
            inicialmente mediante el Artículo 732-22. En 2026, su
            contenido técnico fue integrado en el Artículo 730-22,
            correspondiente a la categoría de barreras semirrígidas y
            flexibles.
          </p>

          <p
            style={{
              margin: '18px 0 0',
              maxWidth: '680px',
              fontSize: '15px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.62)',
            }}
          >
            La selección de un sistema debe analizarse dentro del marco
            actual de los sistemas de contención vehicular y de las
            condiciones específicas de cada proyecto.
          </p>

          <a
            href="/colombia"
            style={{
              display: 'inline-flex',
              marginTop: '28px',
              paddingBottom: '5px',
              color: '#ECB537',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: 700,
              borderBottom: '1px solid #ECB537',
            }}
          >
            Consultar marco técnico en Colombia →
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="contactBg">
        <img
          src="/assets/contact-road.jpg"
          alt="Barrera metálica con rodillos en entorno vial"
        />
      </div>

      <div className="contactShade" />

      <div className="contactCopy">
        <div className="sectionEyebrow dark">
          <span />
          CONTACTO
        </div>

        <h2>
          Hablemos de
          <br />
          su <em>proyecto vial</em>
        </h2>

        <p>
          Cada proyecto tiene condiciones distintas. Podemos revisar la
          información general del tramo y orientar la conversación
          técnica inicial sobre la aplicación de la tecnología.
        </p>

        <div className="heroActions">
          <a
            className="btn primary"
            href="mailto:contacto@barreraconrodillos.com?subject=Solicitud%20de%20información%20técnica"
          >
            Solicitar información técnica →
          </a>

          <a
            className="btn secondary"
            href="mailto:contacto@barreraconrodillos.com?subject=Agendar%20una%20reunión"
          >
            Agendar una reunión
          </a>
        </div>
      </div>

      <aside className="contactCard">
        <div className="person">
          <div className="personIcon">●</div>

          <div>
            <h3>Vanessa Díaz Torres</h3>
            <p>Consultas técnicas y comerciales</p>
          </div>
        </div>

        <hr />

        <p>⌖ Valencia, España</p>

        <a href="tel:+34675123282">
          ☎ +34 675 123 282
        </a>

        <a href="mailto:contacto@barreraconrodillos.com">
          ✉ contacto@barreraconrodillos.com
        </a>

        <hr />

        <p>◎ Atención para proyectos en Colombia.</p>
      </aside>

      <footer>
        <Mark />

        <nav>
          {nav.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <span>
          © 2026 Barrera Metálica con Rodillos · Todos los derechos reservados.
        </span>
      </footer>
    </section>
  );
}

export default function Page() {
  return (
    <main id="top">
      <Header />
      <Hero />
      <Technology />
      <Advantages />
      <Applications />
      <Criteria />
      <Colombia />
      <Contact />

      <a
        href="#top"
        aria-label="Volver al inicio"
        title="Volver al inicio"
        style={{
          position: 'fixed',
          right: '24px',
          bottom: '24px',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          background: '#192C3D',
          color: '#ECB537',
          border: '1px solid #ECB537',
          textDecoration: 'none',
          fontSize: '22px',
          fontWeight: 700,
          boxShadow: '0 8px 24px rgba(25,44,61,0.18)',
          zIndex: 100,
        }}
      >
        ↑
      </a>
    </main>
  );
}
