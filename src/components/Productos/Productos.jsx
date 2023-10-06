import { useState, useEffect } from 'react'
import LayoutPrincipal from '../../layout/LayoutPrincipal'
import Whatsapp from '../WhatsappBTN/Whastapp'
import Select from 'react-select'
import useData from '../../hooks/useData'
import CardImagen from '../CardImagen/CardImagen'

import Modal from 'react-modal'

const Productos = () => {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        arrows: false
      }

    const { data } = useData()
    const listData = data.data
    const [copyData, setCopyData] = useState(listData)

    const itemsPerPage = 3
    const totalPages = Math.ceil(copyData.length / itemsPerPage)

    const [currentPage, setCurrentPage] = useState(1)

    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentItems = copyData.slice(startIndex, endIndex)

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
    }

    const productoTipoMap = {}

    listData.forEach((item) => {
    const { producto, tipo } = item
        if (productoTipoMap[producto]) {
        if (!productoTipoMap[producto].includes(tipo)) {
            productoTipoMap[producto].push(tipo)
        }
    } else {
        productoTipoMap[producto] = [tipo]
    }
    })

    const resultado = {}

    for (const producto in productoTipoMap) {
        resultado[producto] = productoTipoMap[producto]
    }

    const listaTipoPersianas = resultado.Persianas
    const listaTipoCortinas = resultado.Cortinas
    const listaTipoToldos = resultado.Toldos

    let productosUnicos = [...new Set(listData.map(item => item.producto))]

    const [producto, setProducto] = useState('')
    const [TipoProducto, setTipoProducto] = useState('')
    const handleSelectProducto = (e) => {
        setProducto(e.value)
        handleFilterProducto(e.value)
        setTipoProducto('')
    }

    const handleSelecTipo = (e) => {
        setTipoProducto(e.value)
        handleFilterTipo(e.value)
    }

    const handleFilterProducto = (producto) => {
        // eslint-disable-next-line
        const resultFilter = listData.filter((productos) => {
            if(productos.producto.toString().toLowerCase().includes(producto.toLowerCase())) {
                return productos
            }
        }) 
        setCopyData(resultFilter)
    }

    const handleFilterTipo = (tipo) => {
        // eslint-disable-next-line
        const resultFilter = listData.filter((tipos) => {
            if(tipos.tipo.toString().toLowerCase().includes(tipo.toLowerCase())) {
                return tipos
            }
        }) 
        setCopyData(resultFilter)
    }

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [itemInfo, setItemInfo] = useState({
        "nombre": "",
        "tipo": "",
        "imagenes": [],
        "descripcion": "",
        "descripcion2": "",
        "imagen": "",
        "caracteristicas": ""
    })

    const openModal = () => {
        setModalIsOpen(true)
        document.body.classList.add("modal-open")
    }

    const closeModal = () => {
        setModalIsOpen(false)
        setItemInfo({
            "nombre": "",
            "tipo": "",
            "imagenes": [],
            "descripcion": "",
            "descripcion2": "",
            "imagen": "",
            "caracteristicas": ""
        })
        document.body.classList.remove("modal-open")
        document.querySelector("#productos")
    }

    const hanldleProducto = (item) => {
        console.log('Click en Producto', item)
        setItemInfo(item)
        openModal()
    }

    const customStyles = {
        content: {
          maxWidth: "95%",
          margin: "0 auto",
          background: "white",
          borderRadius: "5px",
          padding: "20px"
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        },
      }

  return (
    <div className="productos" id="productos">
        <LayoutPrincipal>
            <h3>PRODUCTOS</h3>
            <h2>Nuestro portafolio</h2>
            <div className="productos_filtros">
                <div className="productos_filtros_producto">
                    <h4>Filtro por Producto</h4>
                    <Select
                        options={ productosUnicos.map(item => ({ label: item, value: item  })) }
                        onChange={ handleSelectProducto }
                    />
                </div>
                {
                    producto === 'Persianas' && (
                        <div className="productos_filtros_producto">
                            <h4>Filtro por Tipo de Persianas</h4>
                            <Select
                                options={ listaTipoPersianas.map(item => ({ label: item, value: item  })) }
                                onChange={ handleSelecTipo }
                            />
                        </div>
                    )
                }
                {
                    producto === 'Cortinas' && (
                        <div className="productos_filtros_producto">
                            <h4>Filtro por Tipo de Cortinas</h4>
                            <Select
                                options={ listaTipoCortinas.map(item => ({ label: item, value: item  })) }
                                onChange={ handleSelecTipo }
                            />
                        </div>
                    )
                }
                {
                    producto === 'Toldos' && (
                        <div className="productos_filtros_producto">
                            <h4>Filtro por Tipo de Toldos</h4>
                            <Select
                                options={ listaTipoToldos.map(item => ({ label: item, value: item  })) }
                                onChange={ handleSelecTipo }
                            />
                        </div>
                    )
                }
            </div>
            <div className="productos_productos">
                {
                    currentItems.map(item => (
                        <div className="productos_productos_producto" key={item.id} onClick={ () => hanldleProducto(item) }>
                            <CardImagen 
                                className="productos_productos_producto_img"
                                imagenes={item.imagenes}
                            />
                            <h3>{item.tipo}</h3>
                            <h2>{item.nombre}</h2>
                            <p>{item.minidescripcion}</p>
                            <Whatsapp 
                                color={"blue"}
                                nombre={item.nombre}
                                tipo={item.tipo}
                                imagen={item.imagen}
                            />
                        </div>
                    ))
                }
            </div>
            <div className="productos_totalpaginas">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </LayoutPrincipal>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Detalles del Producto"
            ariaHideApp={false}
            style={customStyles}
        >

            {
                itemInfo.length !== 0 && (
                    <div className="productos_modal">
                        <div className="productos_modal_head">
                            <h3>{itemInfo.tipo}</h3>
                            <h2>{itemInfo.nombre}</h2>
                        </div>
                        <div className="productos_modal_imgs">
                            {
                                itemInfo.imagenes.map(item => (
                                    <img src={item} alt={item} key={item} />
                                ))
                            }
                        </div>
                        <div className="productos_modal_info">
                            <h4>Descripción</h4>
                            <p>{itemInfo.descripcion}</p>
                            <p>{itemInfo.descripcion2}</p>
                            <h5>Características</h5>
                            <p>{itemInfo.caracteristicas}</p>
                        </div>
                        <div className="productos_modal_botones">
                            <Whatsapp 
                                nombre={itemInfo.nombre}
                                tipo={itemInfo.tipo}
                                imagen={itemInfo.imagen}
                                texto="Cotizar por Whatsapp"
                            />
                            <button onClick={closeModal}>Cerrar</button>
                        </div>
                    </div>
                )
            }
        </Modal>
    </div>
  )
}

export default Productos