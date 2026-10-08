'use client'

import { useState } from 'react'

const navy = '#192C3D'
const yellow = '#ECB537'
const cream = '#F5F2EA'
const text = '#334755'
const muted = '#6D7B8E'

const nav = [
  ['Tecnología', '#tecnologia'],
  ['Desempeño', '#desempeno'],
  ['Evaluación', '#evaluacion'],
  ['Colombia', '/colombia'],
  ['Contacto', '#contacto'],
]

function Mark() {
  return (
    <span
      className="mark"
      aria-label="Barrera Metálica con Rodillos"
    >
      <i />
      <i />
    </span>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header
      style={{
        position: 'sticky',
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
