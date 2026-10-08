export default function ColombiaPage() {
  return (
    <main
      style={{
        background: '#F5F2EA',
        color: '#192C3D',
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: '92vh',
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
          <div
            style={{
              marginBottom: '52px',
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#192C3D',
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
            {/* Texto */}
            <div>
              <h1
                style={{
                  margin: 0,
                  fontSize: 'clamp(48px, 6vw, 88px)',
                  lineHeight: 0.97,
                  letterSpacing: '-0.045em',
                  fontWeight: 700,
                  color: '#192C3D',
                }}
              >
                Barrera Metálica
                <br />
                con Rodillos
                <br />
                <span
                  style={{
                    fontWeight: 400,
                    color: '#6D7B8E',
                  }}
                >
                  en Colombia.
                </span>
              </h1>

              <p
                style={{
                  maxWidth: '650px',
                  marginTop: '38px',
                  marginBottom: 0,
                  fontSize: 'clamp(19px, 1.7vw, 24px)',
                  lineHeight: 1.45,
                  color: '#334755',
                }}
              >
                Tecnología de contención vehicular integrada al marco
                técnico colombiano y respaldada por certificaciones
                internacionales de desempeño.
              </p>

              <p
                style={{
                  maxWidth: '650px',
                  marginTop: '22px',
                  marginBottom: 0,
                  fontSize: '16px',
                  lineHeight: 1.65,
                  color: '#6D7B8E',
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
                  marginTop: '34px',
                }}
              >
                <a
                  href="#contacto-colombia"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '54px',
                    padding: '0 25px',
                    background: '#ECB537',
                    color: '#192C3D',
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
                    minHeight: '54px',
                    color: '#192C3D',
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

            {/* Imagen */}
            <div
              style={{
                position: 'relative',
                minHeight: '590px',
              }}
            >
              <img
                src="/assets/hero-road.jpg"
                alt="Barrera Metálica con Rodillos instalada en infraestructura vial"
                style={{
                  width: '100%',
                  height: '590px',
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
                  background: '#F5F2EA',
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
                    color: '#ECB537',
                  }}
                >
                  Colombia
                </p>

                <p
                  style={{
                    margin: '6px 0 0',
                    fontSize: '14px',
                    lineHeight: 1.45,
                    color: '#192C3D',
                    fontWeight: 500,
                  }}
                >
                  Distribución con respaldo técnico del fabricante
                </p>
              </div>
            </div>
          </div>

          {/* Credenciales */}
          <div
            style={{
              marginTop: '60px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(25,44,61,0.18)',
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '28px',
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
                  color: '#ECB537',
                }}
              >
                Marco técnico en Colombia
              </p>

              <p
                style={{
                  margin: '7px 0 0',
                  fontSize: '17px',
                  color: '#192C3D',
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
                  color: '#ECB537',
                }}
              >
                Certificaciones internacionales
              </p>

              <p
                style={{
                  margin: '7px 0 0',
                  fontSize: '17px',
                  color: '#192C3D',
                  fontWeight: 500,
                }}
              >
                EN 1317 · MASH · CE · FHWA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXTO DE SEGURIDAD VIAL */}
      <section
        style={{
          padding: '120px 24px',
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
              'repeat(auto-fit, minmax(min(100%, 520px), 1fr))',
            gap: '72px',
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
                color: '#ECB537',
              }}
            >
              Seguridad vial e infraestructura
            </p>

            <h2
              style={{
                margin: '22px 0 0',
                maxWidth: '760px',
                fontSize: 'clamp(38px, 4.3vw, 62px)',
                lineHeight: 1.03,
                letterSpacing: '-0.035em',
                fontWeight: 700,
                color: '#192C3D',
              }}
            >
              Infraestructura pensada para reducir la severidad de los
              siniestros
            </h2>
          </div>

          <div
            style={{
              maxWidth: '660px',
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 'clamp(18px, 1.6vw, 22px)',
                lineHeight: 1.6,
                color: '#334755',
              }}
            >
              La seguridad vial no depende únicamente de prevenir que ocurra
              un siniestro. También depende de cómo responde la infraestructura
              cuando un vehículo pierde el control.
            </p>

            <p
              style={{
                marginTop: '28px',
                marginBottom: 0,
                fontSize: '17px',
                lineHeight: 1.7,
                color: '#6D7B8E',
              }}
            >
              Los sistemas de contención vehicular forman parte de esa
              respuesta, al contribuir a contener, absorber energía y gestionar
              la trayectoria posterior al impacto.
            </p>

            <div
              style={{
                marginTop: '42px',
                paddingTop: '22px',
                borderTop: '1px solid rgba(25,44,61,0.16)',
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: '#192C3D',
                  fontWeight: 600,
                }}
              >
                El objetivo no es sustituir la prevención, sino complementarla
                con infraestructura capaz de reducir las consecuencias de una
                salida de vía o impacto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ ES */}
      <section
        style={{
          padding: '120px 24px',
          background: '#F5F2EA',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(min(100%, 520px), 1fr))',
            gap: '72px',
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
                color: '#ECB537',
              }}
            >
              La tecnología
            </p>

            <h2
              style={{
                margin: '22px 0 0',
                fontSize: 'clamp(38px, 4.3vw, 62px)',
                lineHeight: 1.03,
                letterSpacing: '-0.035em',
                fontWeight: 700,
                color: '#192C3D',
              }}
            >
              ¿Qué es una Barrera Metálica con Rodillos?
            </h2>

            <p
              style={{
                marginTop: '32px',
                marginBottom: 0,
                maxWidth: '680px',
                fontSize: '18px',
                lineHeight: 1.7,
                color: '#334755',
              }}
            >
              Es un sistema de contención vehicular que incorpora elementos
              tipo rodillo dentro de una estructura metálica para gestionar
              la energía generada durante un impacto y contribuir al
              redireccionamiento del vehículo.
            </p>

            <p
              style={{
                marginTop: '24px',
                marginBottom: 0,
                maxWidth: '680px',
                fontSize: '16px',
                lineHeight: 1.7,
                color: '#6D7B8E',
              }}
            >
              En Colombia, esta tecnología fue regulada inicialmente mediante
              el Artículo 732-22. Desde 2026, su contenido técnico se integra
              dentro del marco correspondiente a las barreras semirrígidas y
              flexibles.
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
                color: '#ECB537',
              }}
            >
              Cómo funciona
            </p>

            <div
              style={{
                marginTop: '22px',
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
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '72px 1fr',
                    gap: '20px',
                    padding: '28px 0',
                    borderBottom: '1px solid rgba(25,44,61,0.16)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '15px',
                      fontWeight: 700,
                      color: '#ECB537',
                    }}
                  >
                    {number}
                  </div>

                  <div>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: '22px',
                        lineHeight: 1.2,
                        color: '#192C3D',
                      }}
                    >
                      {title}
                    </h3>

                    <p
                      style={{
                        margin: '10px 0 0',
                        fontSize: '16px',
                        lineHeight: 1.65,
                        color: '#6D7B8E',
                      }}
                    >
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARCO NORMATIVO */}
      <section
        id="marco-colombia"
        style={{
          padding: '120px 24px',
          background: '#192C3D',
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
              color: '#ECB537',
            }}
          >
            Marco técnico en Colombia
          </p>

          <h2
            style={{
              margin: '22px 0 0',
              maxWidth: '980px',
              fontSize: 'clamp(38px, 4.5vw, 64px)',
              lineHeight: 1.03,
              letterSpacing: '-0.035em',
              fontWeight: 700,
            }}
          >
            La regulación de las barreras con rodillos ha evolucionado
          </h2>

          <p
            style={{
              maxWidth: '860px',
              marginTop: '32px',
              fontSize: '18px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.76)',
            }}
          >
            La tecnología fue incorporada inicialmente a la regulación
            técnica de INVÍAS como una nueva tecnología específica. En 2026,
            ese tratamiento fue reorganizado para integrarla dentro del marco
            general de las barreras semirrígidas y flexibles.
          </p>

          <div
            style={{
              marginTop: '64px',
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1px',
              background: 'rgba(255,255,255,0.14)',
            }}
          >
            <div
              style={{
                background: '#192C3D',
                padding: '36px 30px',
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: '#ECB537',
                  fontWeight: 700,
                  fontSize: '13px',
                }}
              >
                2022
              </p>

              <h3
                style={{
                  margin: '12px 0 0',
                  fontSize: '24px',
                }}
              >
                Resolución 2451
              </h3>

              <p
                style={{
                  margin: '16px 0 0',
                  lineHeight: 1.65,
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                Adoptó el Artículo 732-22 denominado “Barreras metálicas
                con rodillos” como especificación para nuevas tecnologías.
              </p>
            </div>

            <div
              style={{
                background: '#192C3D',
                padding: '36px 30px',
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: '#ECB537',
                  fontWeight: 700,
                  fontSize: '13px',
                }}
              >
                2026
              </p>

              <h3
                style={{
                  margin: '12px 0 0',
                  fontSize: '24px',
                }}
              >
                Resolución 1738
              </h3>

              <p
                style={{
                  margin: '16px 0 0',
                  lineHeight: 1.65,
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                Integra el contenido técnico del antiguo Artículo 732-22
                dentro del Artículo 730-22, correspondiente a barreras
                semirrígidas y flexibles.
              </p>
            </div>

            <div
              style={{
                background: '#192C3D',
                padding: '36px 30px',
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: '#ECB537',
                  fontWeight: 700,
                  fontSize: '13px',
                }}
              >
                Marco actual
              </p>

              <h3
                style={{
                  margin: '12px 0 0',
                  fontSize: '24px',
                }}
              >
                Selección por desempeño
              </h3>

              <p
                style={{
                  margin: '16px 0 0',
                  lineHeight: 1.65,
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                La selección debe responder a las condiciones del proyecto,
                al comportamiento dinámico acreditado y a ensayos de choque
                bajo estándares internacionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CRITERIOS DE SELECCIÓN */}
      <section
        style={{
          padding: '120px 24px',
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
          <p
            style={{
              margin: 0,
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#ECB537',
            }}
          >
            Selección técnica
          </p>

          <h2
            style={{
              margin: '22px 0 0',
              maxWidth: '900px',
              fontSize: 'clamp(38px, 4.5vw, 64px)',
              lineHeight: 1.03,
              letterSpacing: '-0.035em',
              fontWeight: 700,
              color: '#192C3D',
            }}
          >
            El nivel de contención es solo una parte de la decisión
          </h2>

          <p
            style={{
              maxWidth: '820px',
              marginTop: '30px',
              fontSize: '18px',
              lineHeight: 1.7,
              color: '#6D7B8E',
            }}
          >
            La metodología colombiana parte de las condiciones reales del
            proyecto y posteriormente selecciona el sistema que satisface los
            parámetros requeridos y cuenta con desempeño acreditado.
          </p>

          <div
            style={{
              marginTop: '56px',
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '0',
              borderTop: '1px solid rgba(25,44,61,0.16)',
            }}
          >
            {[
              [
                'NC',
                'Nivel de contención',
                'Se determina considerando la gravedad del peligro, velocidad de la vía, TPD y composición de vehículos pesados.',
              ],
              [
                'ASI / THIV',
                'Severidad del impacto',
                'Permite evaluar el riesgo para los ocupantes. La metodología prioriza, cuando es posible, sistemas de severidad Clase A.',
              ],
              [
                'W',
                'Anchura de trabajo',
                'Representa el espacio transversal ocupado por el sistema durante el impacto.',
              ],
              [
                'D',
                'Deflexión dinámica',
                'Mide el desplazamiento lateral máximo de la barrera y ayuda a definir su ubicación frente al obstáculo.',
              ],
            ].map(([code, title, text]) => (
              <div
                key={code}
                style={{
                  padding: '32px 26px 32px 0',
                  borderBottom: '1px solid rgba(25,44,61,0.16)',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#ECB537',
                  }}
                >
                  {code}
                </p>

                <h3
                  style={{
                    margin: '10px 0 0',
                    fontSize: '20px',
                    color: '#192C3D',
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    margin: '12px 0 0',
                    fontSize: '15px',
                    lineHeight: 1.65,
                    color: '#6D7B8E',
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO PROVISIONAL */}
      <section
        id="contacto-colombia"
        style={{
          padding: '100px 24px',
          background: '#F5F2EA',
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
              color: '#ECB537',
            }}
          >
            Proyectos en Colombia
          </p>

          <h2
            style={{
              margin: '22px 0 0',
              maxWidth: '820px',
              fontSize: 'clamp(38px, 4.5vw, 62px)',
              lineHeight: 1.03,
              letterSpacing: '-0.035em',
              fontWeight: 700,
              color: '#192C3D',
            }}
          >
            Evaluemos las condiciones técnicas de su proyecto
          </h2>

          <p
            style={{
              maxWidth: '700px',
              marginTop: '28px',
              fontSize: '17px',
              lineHeight: 1.7,
              color: '#6D7B8E',
            }}
          >
            Global Fund Group S.A.S. atiende proyectos en Colombia con
            respaldo técnico de los fabricantes para instalación,
            mantenimiento y soporte especializado.
          </p>

          <a
            href="mailto:contacto@barreraconrodillos.com"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '54px',
              marginTop: '28px',
              padding: '0 25px',
              background: '#ECB537',
              color: '#192C3D',
              textDecoration: 'none',
              fontWeight: 700,
              borderRadius: '3px',
            }}
          >
            Solicitar información técnica
          </a>
        </div>
      </section>
    </main>
  );
}
