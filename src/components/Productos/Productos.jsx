import { useState, useEffect } from 'react'
import LayoutPrincipal from '../../layout/LayoutPrincipal'
import Whatsapp from '../WhatsappBTN/Whastapp'
import Select from 'react-select'
import useData from '../../hooks/useData'

const Productos = () => {

    const { data } = useData()
    const listData = data.data
    const [copyData, setCopyData] = useState(listData)

    const itemsPerPage = 4
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
            </div>
            <div className="productos_productos">
                {
                    currentItems.map(item => (
                        <div className="productos_productos_producto" key={item.id}>
                            <img className="productos_productos_producto_img" src={item.imagen} alt={item.nombre} />
                            <h3>{item.tipo}</h3>
                            <h2>{item.nombre}</h2>
                            <p>{item.descripcion}</p>
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
    </div>
  )
}

export default Productos