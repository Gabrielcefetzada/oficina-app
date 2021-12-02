import React, { useContext } from 'react'
import '../styles/Modal.css'
import { AppContext } from '../contexts/Context'

function Modal( { seller, costumer, description, value } ) {

    const { setIsModalOpen } = useContext(AppContext)

    return (
        <div className="container">
            <div className="modal" id="modal">
                <h1> {description} </h1>
                <p> Vendedor: {seller} </p>
                <p> Cliente: {costumer} </p>
                <p> Valor: {value} </p>
                <button className="close-btn" 
                    onClick={() => setIsModalOpen(false)}>Fechar</button>
            </div>
        </div>
        
    )
}

export default Modal
