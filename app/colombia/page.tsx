export default function ColombiaPage() {
  const navy = '#192C3D'
  const yellow = '#ECB537'
  const cream = '#F5F2EA'
  const text = '#334755'
  const muted = '#6D7B8E'

  return (
    <main
      id="top"
      style={{
        background: cream,
        color: navy,
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: '88vh',
          padding: '32px 24px 28px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1440px',
            margin: '0 auto',
          }}
        >
          <div style={{ marginBottom: '46px' }}>
            <p
              style={{
                margin: 0,
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: navy,
              }}
            >
              Colombia · Sistemas de contención vehicular
            </p>
          </div>

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
              <h1
                style={{
                  margin: 0,
                  fontSize: 'clamp(46px, 5.7vw, 84px)',
                  lineHeight: 0.98,
                  letterSpacing: '-0.045em',
                  fontWeight: 700,
                  color: navy,
                }}
              >
                Barrera Metálica
                <br />
                con Rodillos
                <br />
                <span
                  style={{
                    fontWeight: 400,
                    color: muted,
                  }}
                >
                  en Colombia.
                </span>
              </h1>

              <p
                style={{
                  maxWidth: '650px',
                  marginTop: '34px',
                  marginBottom: 0,
                  fontSize: 'clamp(18px, 1.6vw, 22px)',
                  lineHeight: 1.5,
                  color: text,
                }}
              >
                Tecnología de contención vehicular integrada al marco
                técnico colombiano y respaldada por certificaciones
                internacionales de desempeño.
              </p>

              <p
                style={{
                  maxWidth: '660px',
                  marginTop: '20px',
                  marginBottom: 0,
                  fontSize: '16px',
                  lineHeight: 1.65,
                  color: muted,
                }}
              >
                Global Fund Group S.A.S. cuenta con la distribución
                exclusiva en Colombia, con respaldo y soporte técnico
                de los fabricantes para instalación y mantenimiento.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '22px',
                  alignItems: 'center',
                  marginTop: '32px',
                }}
              >
                <a
                  href="#contacto-colombia"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '52px',
                    padding: '0 25px',
                    background: yellow,
                    color: navy,
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: 700,
                    borderRadius: '3px',
                  }}
                >
                  Solicitar información técnica
                </a>

                <a
                  href="#marco-colombia"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    minHeight: '52px',
                    color: navy,
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: 700,
                    borderBottom: '1px solid rgba(25,44,61,0.35)',
                  }}
                >
                  Ver marco técnico en Colombia ↓
                </a>
              </div>
            </div>

            <div
              style={{
                position: 'relative',
                minHeight: '550px',
              }}
            >
              <img
                src="/assets/hero-road.jpg"
                alt="Barrera Metálica con Rodillos instalada en infraestructura vial"
                style={{
                  width: '100%',
                  height: '550px',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  borderRadius: '2px',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  left: '24px',
                  bottom: '24px',
                  background: cream,
                  padding: '14px 18px',
                  maxWidth: '300px',
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
                  Colombia
                </p>

                <p
                  style={{
                    margin: '6px 0 0',
                    fontSize: '14px',
                    lineHeight: 1.45,
                    color: navy,
                    fontWeight: 500,
                  }}
                >
                  Distribución con respaldo técnico del fabricante
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: '52px',
              paddingTop: '22px',
              borderTop: '1px solid rgba(25,44,61,0.18)',
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px',
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
                Marco técnico en Colombia
              </p>

              <p
                style={{
                  margin: '7px 0 0',
                  fontSize: '17px',
                  color: navy,
                  fontWeight: 500,
                }}
              >
                INVÍAS · Artículo 730-22 · Barreras semirrígidas y flexibles
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
                Certificaciones internacionales
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
          </div>
        </div>
      </section>

      {/* SEGURIDAD VIAL */}
      <section
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
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
            gap: '64px',
            alignItems: 'start',
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
              Seguridad vial e infraestructura
            </p>

            <h2
              style={{
                margin: '18px 0 0',
                maxWidth: '700px',
                fontSize: 'clamp(36px, 3.8vw, 56px)',
                lineHeight: 1.05,
                letterSpacing: '-0.035em',
                fontWeight: 700,
                color: navy,
              }}
            >
              Infraestructura pensada para reducir las consecuencias de un siniestro
            </h2>
          </div>

          <div
            style={{
              maxWidth: '650px',
              paddingTop: '20px',
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 'clamp(18px, 1.5vw, 21px)',
                lineHeight: 1.6,
                color: text,
              }}
            >
              La seguridad vial no depende únicamente de evitar que ocurra un
              siniestro. También depende de cómo responde la infraestructura
              cuando un vehículo pierde el control.
            </p>

            <p
              style={{
                marginTop: '22px',
                marginBottom: 0,
                fontSize: '16px',
                lineHeight: 1.7,
                color: muted,
              }}
            >
              Los sistemas de contención vehicular forman parte de esa
              respuesta, al contribuir a contener, absorber energía y orientar
              la trayectoria del vehículo después del impacto.
            </p>

            <div
              style={{
                marginTop: '30px',
                paddingTop: '18px',
                borderTop: '1px solid rgba(25,44,61,0.16)',
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: navy,
                  fontWeight: 600,
                }}
              >
                El objetivo no es sustituir la prevención, sino complementarla
                con infraestructura capaz de reducir las consecuencias de una
                salida de vía o un impacto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECNOLOGÍA */}
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
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
            gap: '64px',
            alignItems: 'start',
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
              La tecnología
            </p>

            <h2
              style={{
                margin: '18px 0 0',
                fontSize: 'clamp(36px, 3.8vw, 56px)',
                lineHeight: 1.04,
                letterSpacing: '-0.035em',
                fontWeight: 700,
                color: navy,
              }}
            >
              ¿Qué es una Barrera Metálica con Rodillos?
            </h2>

            <p
              style={{
                marginTop: '26px',
                marginBottom: 0,
                maxWidth: '660px',
                fontSize: '17px',
                lineHeight: 1.7,
                color: text,
              }}
            >
              Es un sistema de contención vehicular que incorpora elementos
              tipo rodillo dentro de una estructura metálica para ayudar a
              gestionar la energía del impacto y contribuir al
              redireccionamiento controlado del vehículo.
            </p>

            <p
              style={{
                marginTop: '20px',
                marginBottom: 0,
                maxWidth: '660px',
                fontSize: '15px',
                lineHeight: 1.7,
                color: muted,
              }}
            >
              En Colombia, esta tecnología fue regulada inicialmente mediante
              el Artículo 732-22. Desde 2026, su tratamiento técnico se integra
              dentro del Artículo 730-22, correspondiente a las barreras
              semirrígidas y flexibles.
            </p>
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
              Cómo funciona
            </p>

            <div
              style={{
                marginTop: '18px',
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
                  'Los elementos de EVA contribuyen a absorber y disipar progresivamente la energía generada durante la colisión.',
                ],
                [
                  '03',
                  'Redirección controlada',
                  'El sistema contribuye a conducir nuevamente el vehículo hacia una trayectoria controlada después del impacto.',
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '70px 1fr',
                    gap: '20px',
                    padding: '24px 0',
                    borderBottom: '1px solid rgba(25,44,61,0.16)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: 700,
                      color: yellow,
                    }}
                  >
                    {number}
                  </div>

                  <div>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: '21px',
                        lineHeight: 1.2,
                        color: navy,
                      }}
                    >
                      {title}
                    </h3>

                    <p
                      style={{
                        margin: '9px 0 0',
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
        </div>
      </section>

      {/* SKETCH DEL SISTEMA */}
      <section
        style={{
          padding: '54px 24px 64px',
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
                'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
              gap: '48px',
              alignItems: 'end',
              marginBottom: '32px',
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
                Detalle del sistema
              </p>

              <h2
                style={{
                  margin: '16px 0 0',
                  maxWidth: '680px',
                  fontSize: 'clamp(34px, 3.5vw, 52px)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.035em',
                  fontWeight: 700,
                  color: navy,
                }}
              >
                Una solución diseñada como un sistema
              </h2>
            </div>

            <p
              style={{
                margin: 0,
                maxWidth: '600px',
                fontSize: '16px',
                lineHeight: 1.7,
                color: muted,
              }}
            >
              Su comportamiento depende de la integración entre la estructura,
              los elementos rotacionales y los componentes que conforman la
              configuración ensayada.
            </p>
          </div>

          <div
            style={{
              overflow: 'hidden',
              background: cream,
            }}
          >
            <img
              src="/assets/roller-barrier-sketch.png"
              alt="Ilustración técnica de la Barrera Metálica con Rodillos"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>

          <p
            style={{
              margin: '12px 0 0',
              fontSize: '12px',
              lineHeight: 1.5,
              color: muted,
            }}
          >
            Ilustración referencial del sistema y de su configuración.
          </p>
        </div>
      </section>

      {/* MARCO NORMATIVO */}
      <section
        id="marco-colombia"
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
            Marco técnico en Colombia
          </p>

          <h2
            style={{
              margin: '18px 0 0',
              maxWidth: '930px',
              fontSize: 'clamp(38px, 4vw, 58px)',
              lineHeight: 1.04,
              letterSpacing: '-0.035em',
              fontWeight: 700,
            }}
          >
            La regulación de las barreras con rodillos ha evolucionado
          </h2>

          <p
            style={{
              maxWidth: '840px',
              marginTop: '24px',
              fontSize: '17px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.72)',
            }}
          >
            La tecnología fue incorporada inicialmente a la regulación
            técnica de INVÍAS mediante una especificación propia. En 2026,
            ese tratamiento fue reorganizado para integrarla dentro del marco
            general aplicable a las barreras semirrígidas y flexibles.
          </p>

          <div
            style={{
              marginTop: '46px',
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(280px, 1fr))',
              borderTop: '1px solid rgba(255,255,255,0.18)',
              borderBottom: '1px solid rgba(255,255,255,0.18)',
            }}
          >
            <div
              style={{
                padding: '30px 30px 32px 0',
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: yellow,
                  fontWeight: 700,
                  fontSize: '13px',
                }}
              >
                2022
              </p>

              <h3
                style={{
                  margin: '10px 0 0',
                  fontSize: '23px',
                }}
              >
                Resolución 2451
              </h3>

              <p
                style={{
                  margin: '14px 0 0',
                  lineHeight: 1.65,
                  color: 'rgba(255,255,255,0.68)',
                  fontSize: '15px',
                }}
              >
                Adoptó el Artículo 732-22 denominado “Barreras metálicas
                con rodillos” como especificación para nuevas tecnologías.
              </p>
            </div>

            <div
              style={{
                padding: '30px',
                borderLeft: '1px solid rgba(255,255,255,0.16)',
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: yellow,
                  fontWeight: 700,
                  fontSize: '13px',
                }}
              >
                2026
              </p>

              <h3
                style={{
                  margin: '10px 0 0',
                  fontSize: '23px',
                }}
              >
                Resolución 1738
              </h3>

              <p
                style={{
                  margin: '14px 0 0',
                  lineHeight: 1.65,
                  color: 'rgba(255,255,255,0.68)',
                  fontSize: '15px',
                }}
              >
                Excluye el Artículo 732-22 como especificación independiente
                e integra su contenido técnico en el Artículo 730-22.
              </p>
            </div>

            <div
              style={{
                padding: '30px',
                borderLeft: '1px solid rgba(255,255,255,0.16)',
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: yellow,
                  fontWeight: 700,
                  fontSize: '13px',
                }}
              >
                Marco vigente
              </p>

              <h3
                style={{
                  margin: '10px 0 0',
                  fontSize: '23px',
                }}
              >
                Artículo 730-22
              </h3>

              <p
                style={{
                  margin: '14px 0 0',
                  lineHeight: 1.65,
                  color: 'rgba(255,255,255,0.68)',
                  fontSize: '15px',
                }}
              >
                Las barreras metálicas con rodillos quedan integradas dentro
                de la categoría de barreras semirrígidas y flexibles.
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: '30px',
              maxWidth: '900px',
              paddingLeft: '18px',
              borderLeft: `3px solid ${yellow}`,
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: '15px',
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.8)',
              }}
            >
              La Resolución 1738 de 2026 armoniza este tratamiento con el
              marco técnico aplicable a los sistemas de contención vehicular
              y con la metodología nacional para su diseño, selección e
              instalación.
            </p>
          </div>
        </div>
      </section>

      {/* SELECCIÓN TÉCNICA */}
      <section
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
                'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '56px',
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
                Selección técnica
              </p>

              <h2
                style={{
                  margin: '18px 0 0',
                  maxWidth: '760px',
                  fontSize: 'clamp(38px, 4vw, 58px)',
                  lineHeight: 1.04,
                  letterSpacing: '-0.035em',
                  fontWeight: 700,
                  color: navy,
                }}
              >
                El nivel de contención es solo una parte de la decisión
              </h2>
            </div>

            <p
              style={{
                margin: 0,
                maxWidth: '620px',
                fontSize: '17px',
                lineHeight: 1.7,
                color: muted,
              }}
            >
              La selección de un sistema de contención no se realiza
              únicamente por su tipología o geometría. Debe responder a las
              condiciones específicas del proyecto y al comportamiento
              dinámico demostrado mediante ensayos de impacto a escala real.
            </p>
          </div>

          <div
            style={{
              marginTop: '46px',
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(280px, 1fr))',
              borderTop: '1px solid rgba(25,44,61,0.16)',
            }}
          >
            {[
              [
                'NC',
                'Nivel de contención',
                'Se determina considerando la gravedad del peligro, la velocidad de la vía, el tránsito promedio diario y la composición de vehículos pesados.',
              ],
              [
                'ASI / THIV',
                'Severidad del impacto',
                'Permite evaluar el riesgo para los ocupantes. Siempre que sea posible, la metodología prioriza sistemas con índice de severidad Clase A.',
              ],
              [
                'W',
                'Anchura de trabajo',
                'Define el espacio transversal que ocupa el sistema durante el impacto y condiciona la distancia disponible frente a un obstáculo.',
              ],
              [
                'D',
                'Deflexión dinámica',
                'Mide el desplazamiento lateral máximo de la barrera durante el impacto y ayuda a establecer su ubicación en el proyecto.',
              ],
            ].map(([code, title, description]) => (
              <div
                key={code}
                style={{
                  padding: '28px 30px 30px 0',
                  borderBottom: '1px solid rgba(25,44,61,0.16)',
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
                  {code}
                </p>

                <h3
                  style={{
                    margin: '10px 0 0',
                    fontSize: '21px',
                    lineHeight: 1.25,
                    color: navy,
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    margin: '12px 0 0',
                    maxWidth: '470px',
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

          <div
            style={{
              marginTop: '36px',
              maxWidth: '900px',
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: yellow,
              }}
            >
              Desempeño demostrado
            </p>

            <p
              style={{
                margin: '12px 0 0',
                maxWidth: '820px',
                fontSize: '16px',
                lineHeight: 1.7,
                color: text,
              }}
            >
              Una vez entendido el riesgo del tramo, se selecciona el sistema
              que responde a esas condiciones y cuyo comportamiento ha sido
              demostrado mediante ensayos de impacto y documentación técnica.
            </p>
          </div>
        </div>
      </section>

      {/* DESEMPEÑO DOCUMENTADO */}
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
              gap: '56px',
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
                Desempeño documentado
              </p>

              <h2
                style={{
                  margin: '18px 0 0',
                  maxWidth: '780px',
                  fontSize: 'clamp(38px, 4vw, 58px)',
                  lineHeight: 1.04,
                  letterSpacing: '-0.035em',
                  fontWeight: 700,
                  color: navy,
                }}
              >
                El desempeño se demuestra mediante ensayos de impacto a escala real
              </h2>
            </div>

            <p
              style={{
                margin: 0,
                maxWidth: '640px',
                fontSize: '17px',
                lineHeight: 1.7,
                color: muted,
              }}
            >
              Los sistemas de contención vehicular deben acreditar su
              comportamiento mediante documentación técnica y ensayos
              realizados bajo estándares reconocidos.
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
                'EN 1317',
                'Estándar europeo de ensayo',
                'Evalúa el comportamiento del sistema mediante ensayos de impacto a escala real.',
              ],
              [
                'MASH',
                'Protocolo estadounidense de ensayo',
                'Establece condiciones de impacto y criterios de evaluación para sistemas de contención vehicular.',
              ],
              [
                'CE',
                'Conformidad europea',
                'Documenta la conformidad del producto con los requisitos aplicables en el marco europeo.',
              ],
              [
                'FHWA',
                'Elegibilidad documentada',
                'Respalda la elegibilidad del sistema evaluado dentro del marco vial estadounidense correspondiente.',
              ],
            ].map(([code, title, description]) => (
              <div
                key={code}
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
                  {code}
                </p>

                <h3
                  style={{
                    margin: '10px 0 0',
                    fontSize: '20px',
                    lineHeight: 1.25,
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

          <div
            style={{
              marginTop: '38px',
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
              gap: '48px',
              alignItems: 'start',
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: yellow,
                }}
              >
                Qué se evalúa
              </p>

              <h3
                style={{
                  margin: '14px 0 0',
                  maxWidth: '650px',
                  fontSize: 'clamp(30px, 3vw, 44px)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.025em',
                  color: navy,
                }}
              >
                No basta con alcanzar un nivel de contención
              </h3>
            </div>

            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: '16px',
                  lineHeight: 1.7,
                  color: text,
                }}
              >
                Dos sistemas que alcanzan un nivel de contención comparable
                pueden presentar comportamientos diferentes durante el impacto.
                Por eso también se consideran la anchura de trabajo, la
                deflexión dinámica, la severidad y el comportamiento posterior
                del vehículo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EVALUACIÓN DE APLICACIÓN */}
      <section
        id="contacto-colombia"
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
                'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: '64px',
              alignItems: 'start',
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
                  fontWeight: 700,
                  color: navy,
                }}
              >
                Evaluemos si esta tecnología aplica a su proyecto
              </h2>

              <p
                style={{
                  margin: '24px 0 0',
                  maxWidth: '680px',
                  fontSize: '17px',
                  lineHeight: 1.7,
                  color: text,
                }}
              >
                No todos los proyectos viales requieren la misma solución.
                La aplicación de un sistema de contención debe evaluarse
                según las condiciones de la vía, el riesgo identificado,
                el nivel de contención requerido y el espacio disponible.
              </p>
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
                Escenarios de evaluación
              </p>

              <div
                style={{
                  marginTop: '18px',
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
                      padding: '18px 0',
                      borderBottom: '1px solid rgba(25,44,61,0.16)',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        color: yellow,
                      }}
                    >
                      0{index + 1}
                    </span>

                    <span
                      style={{
                        fontSize: '16px',
                        lineHeight: 1.5,
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
                  fontSize: '14px',
                  lineHeight: 1.65,
                  color: muted,
                }}
              >
                La presencia de uno de estos escenarios no determina por sí
                sola la instalación de una barrera. Cada tramo requiere una
                evaluación específica de sus condiciones y riesgos.
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: '50px',
              paddingTop: '30px',
              borderTop: '1px solid rgba(25,44,61,0.18)',
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
              gap: '48px',
              alignItems: 'end',
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  maxWidth: '700px',
                  fontSize: '16px',
                  lineHeight: 1.7,
                  color: muted,
                }}
              >
                Global Fund Group S.A.S. cuenta con la distribución exclusiva
                de la Barrera Metálica con Rodillos en Colombia y acompaña los
                proyectos con respaldo técnico de los fabricantes para
                selección, instalación, mantenimiento y soporte especializado.
              </p>
            </div>

            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: '14px',
                  lineHeight: 1.8,
                  color: navy,
                }}
              >
                <strong>Correo:</strong> contacto@barreraconrodillos.com
                <br />
                <strong>Atención:</strong> Colombia
              </p>

              <a
                href="mailto:contacto@barreraconrodillos.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '52px',
                  marginTop: '22px',
                  padding: '0 25px',
                  background: yellow,
                  color: navy,
                  textDecoration: 'none',
                  fontWeight: 700,
                  borderRadius: '3px',
                }}
              >
                Solicitar información técnica →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: '24px',
          background: navy,
          color: 'rgba(255,255,255,0.72)',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1440px',
            margin: '0 auto',
            fontSize: '13px',
            lineHeight: 1.5,
          }}
        >
          © 2026 Barrera Metálica con Rodillos · Todos los derechos reservados.
        </div>
      </footer>

      {/* VOLVER ARRIBA */}
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
          boxShadow: '0 8px 24px rgba(25,44,61,0.16)',
          zIndex: 50,
        }}
      >
        ↑
      </a>
    </main>
  )
}
