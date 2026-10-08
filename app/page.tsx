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
}        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(245,242,234,0.96)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(25,44,61,0.10)',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          minHeight: '72px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '28px',
        }}
      >
        <a
          href="#inicio"
          aria-label="Inicio"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <Mark />
        </a>

        <nav
          className={open ? 'nav open' : 'nav'}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
          }}
        >
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                color: navy,
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600,
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <a
            href="#contacto"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '42px',
              padding: '0 18px',
              background: yellow,
              color: navy,
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: 700,
              borderRadius: '3px',
            }}
          >
            Información técnica
          </a>

          <button
            className="menuBtn"
            aria-label="Abrir menú"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section
      id="inicio"
      style={{
        padding: '54px 24px 32px',
        background: cream,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(100%, 520px), 1fr))',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: yellow,
              }}
            >
              Sistema de contención vehicular
            </p>

            <h1
              style={{
                margin: '20px 0 0',
                maxWidth: '760px',
                fontSize: 'clamp(50px, 6vw, 88px)',
                lineHeight: 0.98,
                letterSpacing: '-0.045em',
                fontWeight: 700,
                color: navy,
              }}
            >
              Barrera Metálica
              <br />
              con Rodillos
            </h1>

            <p
              style={{
                margin: '32px 0 0',
                maxWidth: '680px',
                fontSize: 'clamp(19px, 1.6vw, 23px)',
                lineHeight: 1.5,
                color: text,
              }}
            >
              Un sistema diseñado para gestionar la energía del impacto y
              contribuir al redireccionamiento controlado del vehículo.
            </p>

            <p
              style={{
                margin: '20px 0 0',
                maxWidth: '640px',
                fontSize: '16px',
                lineHeight: 1.7,
                color: muted,
              }}
            >
              Tecnología respaldada por ensayos internacionales y
              acompañamiento técnico para proyectos de infraestructura vial
              en Colombia.
            </p>

            <div
              style={{
                marginTop: '30px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                alignItems: 'center',
              }}
            >
              <a
                href="#tecnologia"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '52px',
                  padding: '0 24px',
                  background: yellow,
                  color: navy,
                  textDecoration: 'none',
                  fontWeight: 700,
                  borderRadius: '3px',
                }}
              >
                Conocer la tecnología ↓
              </a>

              <a
                href="/colombia"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  minHeight: '52px',
                  color: navy,
                  textDecoration: 'none',
                  fontWeight: 700,
                  borderBottom: '1px solid rgba(25,44,61,0.35)',
                }}
              >
                Información para Colombia →
              </a>
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              minHeight: '560px',
            }}
          >
            <img
              src="/assets/hero-road.jpg"
              alt="Barrera Metálica con Rodillos instalada en una vía"
              style={{
                width: '100%',
                height: '560px',
                display: 'block',
                objectFit: 'cover',
              }}
            />

            <div
              style={{
                position: 'absolute',
                left: '24px',
                bottom: '24px',
                background: cream,
                padding: '14px 18px',
                maxWidth: '340px',
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: yellow,
                }}
              >
                Marco técnico en Colombia
              </p>

              <p
                style={{
                  margin: '6px 0 0',
                  fontSize: '14px',
                  lineHeight: 1.45,
                  color: navy,
                  fontWeight: 600,
                }}
              >
                INVÍAS · Artículo 730-22 · Barreras semirrígidas y flexibles
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: '42px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(25,44,61,0.16)',
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '26px',
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: yellow,
              }}
            >
              Ensayos y documentación
            </p>

            <p
              style={{
                margin: '7px 0 0',
                fontSize: '17px',
                color: navy,
                fontWeight: 500,
              }}
            >
              EN 1317 · MASH · CE · FHWA
            </p>
          </div>

          <div>
            <p
              style={{
                margin: 0,
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: yellow,
              }}
            >
              Atención
            </p>

            <p
              style={{
                margin: '7px 0 0',
                fontSize: '17px',
                color: navy,
                fontWeight: 500,
              }}
            >
              Proyectos en Colombia
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Technology() {
  return (
    <section
      id="tecnologia"
      style={{
        padding: '78px 24px',
        background: '#FFFFFF',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: yellow,
              }}
            >
              Cómo funciona
            </p>

            <h2
              style={{
                margin: '18px 0 0',
                maxWidth: '720px',
                fontSize: 'clamp(38px, 4vw, 58px)',
                lineHeight: 1.04,
                letterSpacing: '-0.035em',
                color: navy,
              }}
            >
              El impacto no termina en la contención
            </h2>

            <p
              style={{
                margin: '26px 0 0',
                maxWidth: '680px',
                fontSize: '17px',
                lineHeight: 1.7,
                color: text,
              }}
            >
              Los rodillos forman parte de un sistema que busca gestionar la
              energía producida durante el impacto y orientar posteriormente
              el vehículo hacia una trayectoria más controlada.
            </p>

            <div
              style={{
                marginTop: '30px',
                borderTop: '1px solid rgba(25,44,61,0.16)',
              }}
            >
              {[
                [
                  '01',
                  'Transformación de energía',
                  'El movimiento de los rodillos permite transformar parte de la energía cinética del impacto en energía rotacional.',
                ],
                [
                  '02',
                  'Absorción y disipación',
                  'Los componentes del sistema contribuyen a gestionar progresivamente la energía generada durante la colisión.',
                ],
                [
                  '03',
                  'Redireccionamiento',
                  'La configuración busca contribuir a orientar nuevamente el vehículo después del impacto.',
                ],
              ].map(([n, title, description]) => (
                <div
                  key={n}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '58px 1fr',
                    gap: '18px',
                    padding: '21px 0',
                    borderBottom:
                      '1px solid rgba(25,44,61,0.16)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: yellow,
                    }}
                  >
                    {n}
                  </span>

                  <div>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: '20px',
                        color: navy,
                      }}
                    >
                      {title}
                    </h3>

                    <p
                      style={{
                        margin: '8px 0 0',
                        fontSize: '15px',
                        lineHeight: 1.65,
                        color: muted,
                      }}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src="/assets/function-road.jpg"
              alt="Detalle de la Barrera Metálica con Rodillos"
              style={{
                width: '100%',
                height: '560px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyItMatters() {
  return (
    <section
      style={{
        padding: '78px 24px',
        background: cream,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: '64px',
            alignItems: 'end',
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: yellow,
              }}
            >
              Desempeño
            </p>

            <h2
              style={{
                margin: '18px 0 0',
                maxWidth: '740px',
                fontSize: 'clamp(38px, 4vw, 58px)',
                lineHeight: 1.04,
                letterSpacing: '-0.035em',
                color: navy,
              }}
            >
              No se trata solo de contener un vehículo
            </h2>
          </div>

          <p
            style={{
              margin: 0,
              maxWidth: '630px',
              fontSize: '17px',
              lineHeight: 1.7,
              color: muted,
            }}
          >
            El comportamiento de una barrera también depende de cómo gestiona
            la energía, cuánto se desplaza durante el impacto, qué espacio
            necesita y cómo se comporta el vehículo posteriormente.
          </p>
        </div>

        <div
          style={{
            marginTop: '46px',
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(240px, 1fr))',
            borderTop: '1px solid rgba(25,44,61,0.16)',
            borderBottom: '1px solid rgba(25,44,61,0.16)',
          }}
        >
          {[
            [
              '01',
              'Contención',
              'Capacidad del sistema para responder al nivel de energía previsto en el proyecto.',
            ],
            [
              '02',
              'Severidad',
              'Evaluación del efecto del impacto sobre los ocupantes del vehículo.',
            ],
            [
              '03',
              'Deformación',
              'Espacio que necesita el sistema para desplazarse durante un impacto.',
            ],
            [
              '04',
              'Redireccionamiento',
              'Comportamiento de la trayectoria del vehículo después de la interacción con la barrera.',
            ],
          ].map(([number, title, description]) => (
            <div
              key={number}
              style={{
                padding: '28px 28px 30px 0',
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: '13px',
                  fontWeight: 700,
                  color: yellow,
                }}
              >
                {number}
              </p>

              <h3
                style={{
                  margin: '10px 0 0',
                  fontSize: '21px',
                  color: navy,
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  margin: '12px 0 0',
                  fontSize: '15px',
                  lineHeight: 1.65,
                  color: muted,
                }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Performance() {
  return (
    <section
      id="desempeno"
      style={{
        padding: '78px 24px',
        background: '#FFFFFF',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          <div>
            <img
              src="/assets/criteria-road.jpg"
              alt="Sistema de Barrera Metálica con Rodillos"
              style={{
                width: '100%',
                height: '500px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          <div>
            <p
              style={{
                margin: 0,
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: yellow,
              }}
            >
              Desempeño documentado
            </p>

            <h2
              style={{
                margin: '18px 0 0',
                maxWidth: '700px',
                fontSize: 'clamp(38px, 4vw, 56px)',
                lineHeight: 1.04,
                letterSpacing: '-0.035em',
                color: navy,
              }}
            >
              Ensayos a escala real
            </h2>

            <p
              style={{
                margin: '24px 0 0',
                maxWidth: '650px',
                fontSize: '17px',
                lineHeight: 1.7,
                color: text,
              }}
            >
              El desempeño de un sistema de contención debe demostrarse
              mediante ensayos de impacto y documentación técnica que permita
              verificar su comportamiento en condiciones controladas.
            </p>

            <div
              style={{
                marginTop: '28px',
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '0',
                borderTop: '1px solid rgba(25,44,61,0.16)',
              }}
            >
              {[
                ['EN 1317', 'Estándar europeo de ensayo'],
                ['MASH', 'Protocolo estadounidense'],
                ['CE', 'Conformidad europea'],
                ['FHWA', 'Elegibilidad documentada'],
              ].map(([code, description]) => (
                <div
                  key={code}
                  style={{
                    padding: '22px 22px 22px 0',
                    borderBottom:
                      '1px solid rgba(25,44,61,0.16)',
                  }}
                >
                  <strong
                    style={{
                      display: 'block',
                      fontSize: '18px',
                      color: navy,
                    }}
                  >
                    {code}
                  </strong>

                  <span
                    style={{
                      display: 'block',
                      marginTop: '6px',
                      fontSize: '13px',
                      lineHeight: 1.5,
                      color: muted,
                    }}
                  >
                    {description}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="/colombia"
              style={{
                display: 'inline-flex',
                marginTop: '28px',
                color: navy,
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 700,
                borderBottom: '1px solid rgba(25,44,61,0.35)',
              }}
            >
              Ver criterios técnicos para Colombia →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Evaluation() {
  return (
    <section
      id="evaluacion"
      style={{
        padding: '78px 24px',
        background: cream,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: yellow,
              }}
            >
              Evaluación de aplicación
            </p>

            <h2
              style={{
                margin: '18px 0 0',
                maxWidth: '720px',
                fontSize: 'clamp(38px, 4vw, 56px)',
                lineHeight: 1.04,
                letterSpacing: '-0.035em',
                color: navy,
              }}
            >
              Cada tramo exige una decisión distinta
            </h2>

            <p
              style={{
                margin: '24px 0 0',
                maxWidth: '660px',
                fontSize: '17px',
                lineHeight: 1.7,
                color: text,
              }}
            >
              Una barrera no debe seleccionarse simplemente por su forma o por
              una categoría comercial. Primero se analiza el riesgo, las
              condiciones de la vía y el desempeño requerido.
            </p>

            <div
              style={{
                marginTop: '28px',
                borderTop: '1px solid rgba(25,44,61,0.16)',
              }}
            >
              {[
                'Obstáculos o estructuras próximas a la vía',
                'Separadores centrales y medianas',
                'Taludes, desniveles y zonas laterales de riesgo',
                'Tramos con espacio lateral restringido',
              ].map((item, index) => (
                <div
                  key={item}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '42px 1fr',
                    gap: '16px',
                    padding: '17px 0',
                    borderBottom:
                      '1px solid rgba(25,44,61,0.16)',
                  }}
                >
                  <span
                    style={{
                      color: yellow,
                      fontSize: '12px',
                      fontWeight: 700,
                    }}
                  >
                    0{index + 1}
                  </span>

                  <span
                    style={{
                      fontSize: '16px',
                      color: navy,
                      fontWeight: 600,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p
              style={{
                margin: '20px 0 0',
                maxWidth: '660px',
                fontSize: '14px',
                lineHeight: 1.65,
                color: muted,
              }}
            >
              Estos escenarios no determinan por sí solos la instalación de
              una barrera. Cada proyecto requiere una evaluación específica.
            </p>
          </div>

          <div>
            <img
              src="/assets/applications-road.jpg"
              alt="Entorno vial para evaluación de sistemas de contención"
              style={{
                width: '100%',
                height: '520px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Colombia() {
  return (
    <section
      style={{
        padding: '78px 24px',
        background: navy,
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
          <p
            style={{
              margin: 0,
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: yellow,
            }}
          >
            Colombia
          </p>

          <h2
            style={{
              margin: '18px 0 0',
              maxWidth: '760px',
              fontSize: 'clamp(38px, 4vw, 58px)',
              lineHeight: 1.04,
              letterSpacing: '-0.035em',
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
              color: 'rgba(255,255,255,0.75)',
            }}
          >
            Las barreras metálicas con rodillos fueron reguladas inicialmente
            mediante el Artículo 732-22. Desde 2026, su contenido técnico se
            integra en el Artículo 730-22, correspondiente a las barreras
            semirrígidas y flexibles.
          </p>

          <a
            href="/colombia"
            style={{
              display: 'inline-flex',
              marginTop: '26px',
              paddingBottom: '4px',
              color: yellow,
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: 700,
              borderBottom: `1px solid ${yellow}`,
            }}
          >
            Consultar marco técnico en Colombia →
          </a>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section
      id="contacto"
      style={{
        position: 'relative',
        minHeight: '650px',
        overflow: 'hidden',
        background: navy,
      }}
    >
      <img
        src="/assets/contact-road.jpg"
        alt="Barrera Metálica con Rodillos en infraestructura vial"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(25,44,61,.96) 0%, rgba(25,44,61,.88) 48%, rgba(25,44,61,.30) 100%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '90px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '690px',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: yellow,
            }}
          >
            Contacto
          </p>

          <h2
            style={{
              margin: '18px 0 0',
              fontSize: 'clamp(42px, 4.5vw, 64px)',
              lineHeight: 1.02,
              letterSpacing: '-0.035em',
              color: '#FFFFFF',
            }}
          >
            Hablemos de las condiciones de su proyecto
          </h2>

          <p
            style={{
              margin: '26px 0 0',
              maxWidth: '620px',
              fontSize: '17px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,.76)',
            }}
          >
            Podemos revisar las condiciones generales del tramo y la
            información técnica necesaria para evaluar la tecnología dentro
            de un proyecto vial en Colombia.
          </p>

          <div
            style={{
              marginTop: '30px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(255,255,255,.22)',
            }}
          >
            <p
              style={{
                margin: 0,
                color: '#FFFFFF',
                fontSize: '16px',
                lineHeight: 1.7,
              }}
            >
              <strong>Vanessa Díaz Torres</strong>
              <br />
              Consultas técnicas y comerciales
            </p>

            <p
              style={{
                margin: '18px 0 0',
                color: 'rgba(255,255,255,.76)',
                fontSize: '15px',
                lineHeight: 1.8,
              }}
            >
              +34 675 123 282
              <br />
              contacto@barreraconrodillos.com
              <br />
              Atención para proyectos en Colombia
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '18px',
              marginTop: '28px',
            }}
          >
            <a
              href="mailto:contacto@barreraconrodillos.com?subject=Solicitud%20de%20información%20técnica"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '52px',
                padding: '0 24px',
                background: yellow,
                color: navy,
                textDecoration: 'none',
                fontWeight: 700,
                borderRadius: '3px',
              }}
            >
              Solicitar información técnica →
            </a>

            <a
              href="/colombia"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: '52px',
                color: '#FFFFFF',
                textDecoration: 'none',
                fontWeight: 700,
                borderBottom:
                  '1px solid rgba(255,255,255,.45)',
              }}
            >
              Ver información para Colombia
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer
      style={{
        padding: '26px 24px',
        background: navy,
        color: 'rgba(255,255,255,.66)',
        borderTop: '1px solid rgba(255,255,255,.12)',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '18px',
          alignItems: 'center',
          fontSize: '13px',
          lineHeight: 1.5,
        }}
      >
        <span>
          © 2026 Barrera Metálica con Rodillos · Todos los derechos reservados.
        </span>

        <span>
          Marco técnico Colombia · INVÍAS · Artículo 730-22
        </span>
      </div>
    </footer>
  )
}

export default function Page() {
  return (
    <main id="top">
      <Header />
      <Hero />
      <Technology />
      <WhyItMatters />
      <Performance />
      <Evaluation />
      <Colombia />
      <Contact />
      <Footer />

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
          background: navy,
          color: yellow,
          border: `1px solid ${yellow}`,
          textDecoration: 'none',
          fontSize: '22px',
          fontWeight: 700,
          boxShadow: '0 8px 24px rgba(25,44,61,0.20)',
          zIndex: 50,
        }}
      >
        ↑
      </a>
    </main>
  )
}
