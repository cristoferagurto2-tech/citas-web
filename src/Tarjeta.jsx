import { useState, useRef } from 'react'

function Tarjeta() {
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null)
  const [foto, setFoto] = useState(null)
  const [fotoPreview, setFotoPreview] = useState(null)
  const [procesandoFoto, setProcesandoFoto] = useState(false)
  const [plantillaSeleccionada, setPlantillaSeleccionada] = useState(null)
  const [descripcionImagen, setDescripcionImagen] = useState('')
  const fileInputRef = useRef(null)

  const datosCosturera = {
    nombre: "Sabina Saraic",
    eslogan: "Arte en cada costura",
    telefono: "913 664 993",
    ubicacion: "La Pradera, Mz.A Lt. 24",
    imagen: "/costura.png",
    servicios: [
      { icon: "👗", nombre: "Arreglos de ropa", id: "arreglos" },
      { icon: "🧵", nombre: "Confecciones a medida", id: "confecciones" },
      { icon: "✂️", nombre: "Costuras básicas", id: "costuras" },
      { icon: "🧥", nombre: "Reparación de prendas", id: "reparacion" },
      { icon: "👗", nombre: "Ajustes de vestidos", id: "ajustes" },
      { icon: "🎨", nombre: "Bordados", id: "bordados" },
      { icon: "📏", nombre: "Modificaciones", id: "modificaciones" },
      { icon: "✏️", nombre: "Diseño de patrones", id: "patrones" }
    ]
  }

  const plantillasMensaje = {
    arreglos: [
      {
        id: 1,
        titulo: "Arreglo general",
        texto: "Hola, ¿qué tal? 👋\nTengo un vestido/pantalón que necesito arreglar (basta/entalle/cierre)\n¿Podría indicarme si está disponible y cuánto sería el costo aproximado?\nMuchas gracias."
      },
      {
        id: 2,
        titulo: "Arreglo urgente",
        texto: "Hola Sabina, buenas 👋\nNecesito arreglar urgentemente una prenda.\nEs para un evento importante este fin de semana.\n¿Podrías atenderme pronto?\nGracias."
      }
    ],
    confecciones: [
      {
        id: 1,
        titulo: "Confección nueva",
        texto: "Hola, ¿cómo estás? 😊\nMe gustaría hacerte una prenda a medida.\nTengo una idea de diseño y necesito saber precios y tiempo de entrega.\n¿Podemos conversar?"
      },
      {
        id: 2,
        titulo: "Confección con diseño",
        texto: "Hola Sabina 👋\nQuiero confeccionar un vestido/pantalón y tengo el patrón/lista de medidas.\n¿Cuánto me cobrarías y en cuánto tiempo lo tendrías listo?\nSaludos."
      }
    ],
    costuras: [
      {
        id: 1,
        titulo: "Costura básica",
        texto: "Hola Sabina 🧵\nTengo una prenda que necesita unas costuras simples.\nNada muy complicado, solo unos retoques.\n¿Me podrías dar una cotización?\nGracias."
      },
      {
        id: 2,
        titulo: "Costura de refuerzo",
        texto: "Buenas 👋\nNecesito hacer refuerzos en algunas costuras de mi ropa.\nSe está deshilachando y quiero que dure más.\n¿Cuánto me costaría?"
      }
    ],
    reparacion: [
      {
        id: 1,
        titulo: "Reparación de rasgón",
        texto: "Hola 👋\nSe me rasgó una prenda y necesito repararla.\nEs un corte en la tela que necesita un buen arreglo.\n¿Podrías ayudarme y decirme el precio?\nGracias."
      },
      {
        id: 2,
        titulo: "Reparación de cremallera",
        texto: "Hola Sabina 😊\nLa cremallera/cierre de mi chaqueta/pantalón se dañó.\n¿La puedes reparar o necesito cambiarla toda?\n¿Cuál sería el costo?"
      }
    ],
    ajustes: [
      {
        id: 1,
        titulo: "Ajuste de talla",
        texto: "Hola, ¿qué tal? 👗\nCompré un vestido/pantalón que me queda grande.\nNecesito ajustarlo a mi talla.\n¿Podrías decirme el costo y tiempo de entrega?\nGracias."
      },
      {
        id: 2,
        titulo: "Ajuste de largo",
        texto: "Hola Sabina 👋\nTengo un pantalón/falda que está muy largo.\nNecesito ajustar el largo a mi estatura.\n¿Cuánto me cobrarías por hacer la basta?"
      }
    ],
    bordados: [
      {
        id: 1,
        titulo: "Bordado simple",
        texto: "Hola 🎨\nMe gustaría hacer un bordado en una prenda.\nEs un diseño sencillo que quiero personalizar.\n¿Podrías darme precios y opciones?\nGracias."
      },
      {
        id: 2,
        titulo: "Bordado personalizado",
        texto: "Hola Sabina ✨\nQuiero hacer un bordado personalizado con un nombre/diseño específico.\n¿Trabajas con pedidos personalizados?\n¿Cuál sería el costo aproximado?"
      }
    ],
    modificaciones: [
      {
        id: 1,
        titulo: "Transformación de prenda",
        texto: "Hola 👋\nTengo una prenda que me gustaría transformar/modificar.\nQuiero cambiar el estilo o añadir/quitar algo.\n¿Podrías asesorarme y darme un presupuesto?"
      },
      {
        id: 2,
        titulo: "Modificación creativa",
        texto: "Hola Sabina 💡\nTengo una idea para modificar una prenda que ya no uso.\nQuiero darle una segunda vida con unos cambios.\n¿Podrías ayudarme con esto? ¿Cuánto costaría?"
      }
    ],
    patrones: [
      {
        id: 1,
        titulo: "Diseño de patrón",
        texto: "Hola 👋\nNecesito que me diseñes un patrón para una prenda.\nTengo una idea clara de lo que quiero pero necesito el patrón para hacerlo.\n¿Podrías ayudarme? ¿Cuál es tu tarifa?"
      },
      {
        id: 2,
        titulo: "Patrón a medida",
        texto: "Hola Sabina 📏\nQuiero hacer una prenda a medida y necesito el patrón personalizado según mis medidas exactas.\n¿Trabajas patrones a medida? ¿Cuánto cuesta?"
      }
    ]
  }

  const numeroWhatsApp = datosCosturera.telefono.replace(/\D/g, '')
  const enlaceMaps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(datosCosturera.ubicacion)}`

  const handleServicioClick = (servicio) => {
    setServicioSeleccionado(servicio)
    setFoto(null)
    setFotoPreview(null)
    setPlantillaSeleccionada(null)
    setDescripcionImagen('')
  }

  const handlePlantillaClick = (plantilla) => {
    setPlantillaSeleccionada(plantilla)
  }

  const procesarImagenParaWhatsApp = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      
      reader.onload = (event) => {
        const img = new Image()
        img.onload = () => {
          const canvas = document.createElement('canvas')
          // Tamaño muy pequeño para asegurar que quepa en WhatsApp
          const MAX_WIDTH = 300
          const MAX_HEIGHT = 200
          
          let width = img.width
          let height = img.height
          
          if (width > MAX_WIDTH || height > MAX_HEIGHT) {
            const ratio = Math.min(MAX_WIDTH / width, MAX_HEIGHT / height)
            width *= ratio
            height *= ratio
          }
          
          canvas.width = width
          canvas.height = height
          
          const ctx = canvas.getContext('2d')
          ctx.fillStyle = '#FFFFFF'
          ctx.fillRect(0, 0, width, height)
          ctx.drawImage(img, 0, 0, width, height)
          
          // Calidad muy baja para reducir tamaño Base64
          const base64 = canvas.toDataURL('image/jpeg', 0.4)
          
          console.log('Tamaño Base64:', base64.length, 'caracteres')
          
          // WhatsApp tiene límite de ~1024 caracteres por mensaje
          // Base64 usa ~4/3 más espacio, así que limitamos a 700 caracteres para dejar espacio al mensaje
          if (base64.length > 700) {
            // Si es muy grande, devolvemos null pero no rechazamos para permitir enviar sin imagen
            console.warn('Imagen demasiado grande para WhatsApp, se enviará sin imagen')
            resolve(null)
          } else {
            resolve(base64)
          }
        }
        
        img.onerror = () => reject(new Error('Error al cargar imagen'))
        img.src = event.target.result
      }
      
      reader.onerror = () => reject(new Error('Error al leer archivo'))
      reader.readAsDataURL(file)
    })
  }

  const handleFotoChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFoto(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setFotoPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const enviarWhatsApp = async () => {
    if (!servicioSeleccionado) return
    
    // Usar mensaje de plantilla si está seleccionada, sino mensaje por defecto
    let mensaje = plantillaSeleccionada 
      ? plantillaSeleccionada.texto 
      : `Hola Sabina, me interesa el servicio de ${servicioSeleccionado.nombre}`
    
    if (foto) {
      setProcesandoFoto(true)
      try {
        const base64Image = await procesarImagenParaWhatsApp(foto)
        if (base64Image) {
          mensaje += `\n\n[FOTO]\n${base64Image}`
        } else {
          // La imagen era muy grande, enviamos mensaje sin imagen pero advertimos
          mensaje += `\n\n📎 (La foto era muy grande para enviar por WhatsApp, por favor adjuntar manualmente)`
        }
        // Agregar descripción de la imagen si existe
        if (descripcionImagen.trim()) {
          mensaje += `\n\n📝 Descripción de la imagen:\n${descripcionImagen}`
        }
      } catch (error) {
        console.error('Error procesando imagen:', error)
        alert('Error al procesar la imagen. Se enviará el mensaje sin foto.')
      } finally {
        setProcesandoFoto(false)
      }
    }
    
    const mensajeEncoded = encodeURIComponent(mensaje)
    const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeEncoded}`
    
    window.open(enlaceWhatsApp, '_blank')
  }

  const cerrarFormulario = () => {
    setServicioSeleccionado(null)
    setFoto(null)
    setFotoPreview(null)
    setPlantillaSeleccionada(null)
    setDescripcionImagen('')
    setProcesandoFoto(false)
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-[20px] shadow-2xl overflow-hidden card">
      {/* Header con imagen */}
      <div className="relative w-full h-[280px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${datosCosturera.imagen})` }}
        >
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(233,30,99,0.95)] to-transparent px-8 py-8 rounded-b-[20px]">
            <h1 className="m-0 text-white text-[32px] font-serif font-bold leading-tight drop-shadow-lg">
              {datosCosturera.nombre}
            </h1>
            <p className="m-0 text-white text-[16px] italic opacity-95 font-serif">
              {datosCosturera.eslogan}
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Servicios como botones seleccionables */}
        <h3 className="text-[20px] mb-6 text-center font-serif font-bold text-[#e91e63]">
          ✂️ Selecciona un servicio ✂️
d        </h3>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {datosCosturera.servicios.map((servicio, index) => (
            <button
              key={index}
              onClick={() => handleServicioClick(servicio)}
              className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all duration-300 hover:scale-[1.02] ${
                servicioSeleccionado?.id === servicio.id
                  ? 'bg-[#e91e63] text-white border-[#e91e63] shadow-lg'
                  : 'bg-[#f8f9fa] text-[#333] border-[#e9ecef] hover:border-[#e91e63]'
              }`}
            >
              <span className="text-[28px]">{servicio.icon}</span>
              <span className="text-[13px] font-medium text-center leading-tight">
                {servicio.nombre}
              </span>
            </button>
          ))}
        </div>

        {/* Formulario que aparece al seleccionar servicio */}
        {servicioSeleccionado && (
          <div className="bg-[#f8f9fa] p-5 rounded-xl border-2 border-[#e91e63] mb-6 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-[18px] font-bold text-[#e91e63]">
                {servicioSeleccionado.icon} {servicioSeleccionado.nombre}
              </h4>
              <button
                onClick={cerrarFormulario}
                className="text-[#999] hover:text-[#e91e63] text-[20px] font-bold"
              >
                ✕
              </button>
            </div>

            {/* Plantillas de mensajes específicas del servicio */}
            {plantillasMensaje[servicioSeleccionado.id] && (
              <div className="mb-4">
                <label className="block text-[14px] font-semibold text-[#333] mb-2">
                  Selecciona un mensaje para {servicioSeleccionado.nombre}:
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {plantillasMensaje[servicioSeleccionado.id].map((plantilla) => (
                    <button
                      key={plantilla.id}
                      onClick={() => handlePlantillaClick(plantilla)}
                      className={`p-3 rounded-lg border-2 text-left text-[13px] transition-all ${
                        plantillaSeleccionada?.id === plantilla.id
                          ? 'bg-[#e91e63] text-white border-[#e91e63]'
                          : 'bg-white border-[#e9ecef] hover:border-[#e91e63] text-[#333]'
                      }`}
                    >
                      <span className="font-bold block mb-1">{plantilla.titulo}</span>
                      <span className="opacity-90 text-[12px] line-clamp-2">{plantilla.texto.substring(0, 60)}...</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-4">
              <label className="block text-[14px] font-semibold text-[#333] mb-2">
                Sube una foto de la prenda (opcional):
              </label>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFotoChange}
                accept="image/*"
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full p-3 border-2 border-dashed border-[#e91e63] rounded-lg text-[#e91e63] font-medium hover:bg-[#fce4ec] transition-colors flex items-center justify-center gap-2"
              >
                <span className="text-[20px]">📷</span>
                {foto ? 'Cambiar foto' : 'Seleccionar foto'}
              </button>
              
              {fotoPreview && (
                <div className="mt-3 relative">
                  <img
                    src={fotoPreview}
                    alt="Preview"
                    className="w-full h-[150px] object-cover rounded-lg"
                  />
                  <button
                    onClick={() => {
                      setFoto(null)
                      setFotoPreview(null)
                      setDescripcionImagen('')
                    }}
                    className="absolute top-2 right-2 bg-[#e91e63] text-white rounded-full w-6 h-6 flex items-center justify-center text-[14px] hover:bg-[#c2185b]"
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>

            {/* Campo para describir la imagen/documento */}
            <div className="mb-4">
              <label className="block text-[14px] font-semibold text-[#333] mb-2">
                Describe el documento o imagen (opcional):
              </label>
              <textarea
                value={descripcionImagen}
                onChange={(e) => setDescripcionImagen(e.target.value)}
                placeholder="Ej: Es un pantalón azul que necesita ajustar la cintura..."
                className="w-full p-3 border-2 border-[#e9ecef] rounded-lg text-[14px] resize-none focus:border-[#e91e63] focus:outline-none"
                rows="2"
              />
            </div>

            <button
              onClick={enviarWhatsApp}
              disabled={procesandoFoto}
              className={`w-full py-3 bg-[#25D366] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                procesandoFoto ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              <span className="text-[20px]">{procesandoFoto ? '⏳' : '💬'}</span>
              {procesandoFoto ? 'Procesando imagen...' : 'Enviar solicitud por WhatsApp'}
            </button>
          </div>
        )}

        {/* Contacto */}
        <h3 className="text-[18px] mb-4 text-center font-serif font-bold text-[#e91e63]">
          📞 Contacto 📍
        </h3>

        <div className="flex gap-3 mb-4">
          <a
            href={enlaceMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center gap-2 p-3 bg-[#fff3e0] rounded-xl border-2 border-[#ffe9c4] hover:scale-[1.02] transition-all no-underline"
          >
            <span className="text-[24px]">🗺️</span>
            <div className="text-center">
              <div className="text-[11px] text-[#6c757d] font-semibold uppercase">Ubicación</div>
              <div className="text-[13px] text-[#212529] font-bold">{datosCosturera.ubicacion}</div>
            </div>
          </a>

          <a
            href={`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent("Hola Sabina, me interesa una cotización")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center gap-2 p-3 bg-[#25D366] rounded-xl border-2 border-[#1ca337] hover:scale-[1.02] transition-all no-underline shadow-lg"
          >
            <span className="text-[24px]">💬</span>
            <div className="text-center">
              <div className="text-[11px] text-white font-semibold uppercase opacity-90">WhatsApp</div>
              <div className="text-[13px] text-white font-bold">{datosCosturera.telefono}</div>
            </div>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#e91e63] px-6 py-4 text-center">
        <p className="m-0 text-white text-[14px] font-bold">
          ✂️ Costuras • Arreglos • Confecciones • Bordados ✂️
        </p>
        <p className="mt-1 mb-0 text-white text-[12px] opacity-90">
          ¡Contáctanos hoy mismo!
        </p>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}

export default Tarjeta
