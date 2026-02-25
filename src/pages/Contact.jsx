import { useState } from 'react'

/**
 * Página de Contacto.
 * Formulario estático con validación básica usando estado de React.
 * No tiene backend - usa preventDefault para simular el envío.
 */
function Contact() {
  // Estado del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  // Estado para mostrar mensaje de éxito
  const [submitted, setSubmitted] = useState(false)

  // Estado para errores de validación
  const [errors, setErrors] = useState({})

  // Manejar cambios en los campos
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Limpiar error del campo al escribir
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  // Validar formulario
  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido.'
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido.'
    }
    if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido.'
    return newErrors
  }

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault() // Sin backend - solo prevenir el envío real

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // Simular envío exitoso
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setErrors({})

    // Ocultar mensaje de éxito después de 5 segundos
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="page-wrapper">
      {/* ── Encabezado de página ── */}
      <div className="page-header">
        <div className="container">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(233,69,96,0.15)',
              color: '#e94560',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              padding: '6px 18px',
              borderRadius: '50px',
              border: '1px solid rgba(233,69,96,0.3)',
              marginBottom: '1rem',
            }}
          >
            <i className="bi bi-envelope-fill"></i>
            Escríbenos
          </div>
          <h1 className="page-header-title">
            <span>Contacto</span>
          </h1>
          <p className="page-header-subtitle">
            ¿Tienes preguntas o sugerencias? ¡Nos encantaría escucharte!
          </p>
        </div>
      </div>

      {/* ── Contenido principal ── */}
      <section className="contact-section">
        <div className="container">
          <div className="row g-4 align-items-start">

            {/* ── Columna izquierda: Formulario ── */}
            <div className="col-lg-7">
              <div className="contact-card">
                <h3
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    color: '#fff',
                    fontSize: '1.5rem',
                    letterSpacing: '1.5px',
                    marginBottom: '0.3rem',
                  }}
                >
                  Envíanos un <span style={{ color: '#f5a623' }}>Mensaje</span>
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', marginBottom: '2rem' }}>
                  Completa el formulario y te responderemos a la brevedad.
                </p>

                {/* Mensaje de éxito */}
                {submitted && (
                  <div className="alert-success-custom mb-4">
                    <i className="bi bi-check-circle-fill" style={{ fontSize: '1.2rem' }}></i>
                    <div>
                      <strong>¡Mensaje enviado!</strong>
                      <br />
                      <span style={{ fontSize: '0.88rem' }}>
                        Gracias por contactarnos. Te responderemos pronto.
                      </span>
                    </div>
                  </div>
                )}

                {/* Formulario */}
                <form onSubmit={handleSubmit} noValidate>
                  <div className="row g-3">

                    {/* Campo: Nombre */}
                    <div className="col-md-6">
                      <label className="form-label-custom" htmlFor="name">
                        <i className="bi bi-person-fill me-1"></i>
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control-custom"
                        placeholder="Tu nombre completo"
                        value={formData.name}
                        onChange={handleChange}
                        style={{
                          borderColor: errors.name ? '#e94560' : undefined,
                        }}
                      />
                      {errors.name && (
                        <span style={{ color: '#e94560', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>
                          <i className="bi bi-exclamation-circle me-1"></i>
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Campo: Email */}
                    <div className="col-md-6">
                      <label className="form-label-custom" htmlFor="email">
                        <i className="bi bi-envelope-fill me-1"></i>
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control-custom"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                          borderColor: errors.email ? '#e94560' : undefined,
                        }}
                      />
                      {errors.email && (
                        <span style={{ color: '#e94560', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>
                          <i className="bi bi-exclamation-circle me-1"></i>
                          {errors.email}
                        </span>
                      )}
                    </div>

                    {/* Campo: Asunto */}
                    <div className="col-12">
                      <label className="form-label-custom" htmlFor="subject">
                        <i className="bi bi-chat-fill me-1"></i>
                        Asunto
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control-custom"
                        placeholder="¿Sobre qué quieres escribirnos?"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Campo: Mensaje */}
                    <div className="col-12">
                      <label className="form-label-custom" htmlFor="message">
                        <i className="bi bi-pencil-fill me-1"></i>
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-control-custom"
                        placeholder="Escribe tu mensaje aquí..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        style={{
                          resize: 'vertical',
                          borderColor: errors.message ? '#e94560' : undefined,
                        }}
                      />
                      {errors.message && (
                        <span style={{ color: '#e94560', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>
                          <i className="bi bi-exclamation-circle me-1"></i>
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Botón enviar */}
                    <div className="col-12 mt-2">
                      <button type="submit" className="btn-submit">
                        <i className="bi bi-send-fill me-2"></i>
                        Enviar Mensaje
                      </button>
                    </div>

                    {/* Nota de privacidad */}
                    <div className="col-12">
                      <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem', textAlign: 'center', margin: 0 }}>
                        <i className="bi bi-shield-lock-fill me-1"></i>
                        Tu información es privada y no será compartida con terceros.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* ── Columna derecha: Información de contacto ── */}
            <div className="col-lg-5">
              <div className="contact-info-card">
                <h4
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    color: '#fff',
                    fontSize: '1.3rem',
                    letterSpacing: '1.5px',
                    marginBottom: '1.5rem',
                  }}
                >
                  Información de <span style={{ color: '#f5a623' }}>Contacto</span>
                </h4>

                {/* Items de contacto */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div className="contact-info-text">
                    <h6>Email</h6>
                    <p>info@worldrecordshub.com</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <div className="contact-info-text">
                    <h6>Ubicación</h6>
                    <p>Universidad — Programación para Internet</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="bi bi-clock-fill"></i>
                  </div>
                  <div className="contact-info-text">
                    <h6>Horario</h6>
                    <p>Lunes a Viernes, 9:00 - 18:00</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="bi bi-github"></i>
                  </div>
                  <div className="contact-info-text">
                    <h6>GitHub</h6>
                    <p>github.com/worldrecordshub</p>
                  </div>
                </div>
              </div>

              {/* Card: Sobre el proyecto */}
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(233,69,96,0.15), rgba(15,52,96,0.4))',
                  border: '1px solid rgba(233,69,96,0.2)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  marginTop: '1.5rem',
                }}
              >
                <h6
                  style={{
                    fontFamily: 'Oswald, sans-serif',
                    color: '#f5a623',
                    letterSpacing: '1.5px',
                    marginBottom: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <i className="bi bi-info-circle-fill"></i>
                  Sobre el Proyecto
                </h6>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>
                  WorldRecordsHub es un proyecto universitario desarrollado para la materia
                  <strong style={{ color: '#f5a623' }}> Programación para Internet</strong>.
                  Construido con React + Vite, sin backend, completamente estático y responsivo.
                </p>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {['React', 'Vite', 'Bootstrap', 'React Router'].map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        background: 'rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '0.75rem',
                        padding: '3px 10px',
                        borderRadius: '50px',
                        border: '1px solid rgba(255,255,255,0.12)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
