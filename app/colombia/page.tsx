export default function ColombiaPage() {
  return (
    <main
      style={{
        background: '#F5F2EA',
        color: '#192C3D',
        fontFamily: 'Arial, Helvetica, sans-serif',
      }}
    >
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
          {/* Encabezado superior */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              marginBottom: '56px',
            }}
          >
            {/* Motivo Roddy */}
            <div
              aria-hidden="true"
              style={{
                display: 'inline-flex',
                gap: '7px',
                transform: 'skew(-10deg)',
              }}
            >
              <span
                style={{
                  display: 'block',
                  width: '31px',
                  height: '28px',
                  border: '5px solid #ECB537',
                  borderRadius: '6px',
                  background: 'transparent',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: '31px',
                  height: '28px',
                  border: '5px solid #ECB537',
                  borderRadius: '6px',
                  background: 'transparent',
                }}
              />
            </div>

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

          {/* Hero principal */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(100%, 520px), 1fr))',
              gap: '64px',
              alignItems: 'center',
            }}
          >
            {/* Columna izquierda */}
            <div>
              <h1
                style={{
                  margin: 0,
                  fontSize: 'clamp(48px, 6vw, 88px)',
                  lineHeight: 0.95,
                  letterSpacing: '-0.05em',
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
                  fontWeight: 400,
                }}
              >
                Tecnología de contención vehicular con especificación
                técnica aplicable en Colombia y respaldo en
                certificaciones internacionales.
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
                exclusiva en Colombia, con respaldo y soporte técnico de
                los fabricantes para instalación y mantenimiento.
              </p>

              {/* Botones */}
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
                  href="/art_0732_inv_2022.pdf"
                  target="_blank"
                  rel="noreferrer"
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
                  Consultar Artículo 732-22 INVÍAS ↗
                </a>
              </div>
            </div>

            {/* Columna derecha: imagen */}
            <div
              style={{
                position: 'relative',
                minHeight: '610px',
              }}
            >
              <img
                src="/assets/hero-road.jpg"
                alt="Barrera Metálica con Rodillos instalada en infraestructura vial"
                style={{
                  width: '100%',
                  height: '610px',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  borderRadius: '2px',
                }}
              />

              {/* Etiqueta sobre imagen */}
              <div
                style={{
                  position: 'absolute',
                  left: '24px',
                  bottom: '24px',
                  background: '#F5F2EA',
                  padding: '14px 18px',
                  maxWidth: '290px',
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
                  Distribución en Colombia · soporte técnico del fabricante
                </p>
              </div>
            </div>
          </div>

          {/* Credenciales */}
          <div
            style={{
              marginTop: '64px',
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
                Especificación técnica en Colombia
              </p>

              <p
                style={{
                  margin: '7px 0 0',
                  fontSize: '17px',
                  color: '#192C3D',
                  fontWeight: 500,
                }}
              >
                INVÍAS · Artículo 732-22
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
    {/* Columna izquierda */}
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
          fontSize: 'clamp(38px, 4.5vw, 66px)',
          lineHeight: 1.02,
          letterSpacing: '-0.04em',
          fontWeight: 700,
          color: '#192C3D',
        }}
      >
        Infraestructura pensada para reducir la severidad de los siniestros
      </h2>
    </div>

    {/* Columna derecha */}
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
        Los sistemas de contención vehicular forman parte de esa respuesta,
        al contribuir a contener, absorber energía y gestionar la trayectoria
        posterior al impacto.
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
          El objetivo no es sustituir la prevención, sino complementar la
          seguridad vial con infraestructura capaz de responder mejor ante
          un impacto.
        </p>
      </div>
    </div>
  </div>
</section>
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
    }}
  >
    <div
      style={{
        display: 'grid',
        gridTemplateColumns:
          'repeat(auto-fit, minmax(min(100%, 520px), 1fr))',
        gap: '72px',
        alignItems: 'start',
      }}
    >
      {/* Columna izquierda */}
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
            maxWidth: '760px',
            fontSize: 'clamp(38px, 4.5vw, 64px)',
            lineHeight: 1.02,
            letterSpacing: '-0.04em',
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
          En Colombia, las Especificaciones Generales de Construcción de
          Carreteras de INVÍAS 2022 incluyen específicamente las
          “Barreras metálicas con rodillos” en el Artículo 732-22.
        </p>
      </div>

      {/* Columna derecha */}
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
          <div
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
              01
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
                Transformación de energía
              </h3>

              <p
                style={{
                  margin: '10px 0 0',
                  fontSize: '16px',
                  lineHeight: 1.65,
                  color: '#6D7B8E',
                }}
              >
                El movimiento de los rodillos permite transformar parte
                de la energía cinética del impacto en energía rotacional.
              </p>
            </div>
          </div>

          <div
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
              02
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
                Absorción y disipación
              </h3>

              <p
                style={{
                  margin: '10px 0 0',
                  fontSize: '16px',
                  lineHeight: 1.65,
                  color: '#6D7B8E',
                }}
              >
                Los elementos de EVA contribuyen a absorber y disipar
                progresivamente la energía generada durante la colisión.
              </p>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '72px 1fr',
              gap: '20px',
              padding: '28px 0 0',
            }}
          >
            <div
              style={{
                fontSize: '15px',
                fontWeight: 700,
                color: '#ECB537',
              }}
            >
              03
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
                Redirección controlada
              </h3>

              <p
                style={{
                  margin: '10px 0 0',
                  fontSize: '16px',
                  lineHeight: 1.65,
                  color: '#6D7B8E',
                }}
              >
                El sistema contribuye a conducir nuevamente el vehículo
                hacia una trayectoria controlada sobre la vía después
                del impacto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}
