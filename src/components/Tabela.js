import React, { useEffect, useState, useContext } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Modal from './Modal'
import '../styles/Tabela.css'
import '../styles/Modal.css'
import BlackBg from './BlackBg'
import { AppContext } from '../contexts/Context'


function Tabela() {
    const [clients, setClients] = useState([])
    const [currentSeller, setCurrentSeller] = useState('')
    const [currentCostumer, setCurrentCostumer] = useState('')
    const [currentDescription, setDescription] = useState('')
    const [currentValue, setCurrentValue] = useState('')

    const { isModalOpen, setIsModalOpen } = useContext(AppContext)

    const dataToShowAtModal = (client) => {
        setCurrentSeller(client.seller)
        setCurrentCostumer(client.customer)
        setDescription(client.description)
        setCurrentValue(client.value)
    }

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await fetch('https://my-json-server.typicode.com/codificar/oficina/proposals');
                const data = await response.json()
                setClients(data)
            } catch(error) {
                console.log(error.message)
            }

        }

        fetchData()
        console.log('modal', isModalOpen)
    }, [])

    return (
        
       
        <div className="cards-container">
             {clients.map((client, index) => (
               <div className="card" key={client.id}>
                   <p>Vendedor: {client.seller}</p>
                   <p>Cliente: {client.customer}</p>
                   <p>Valor do orçamento: {client.value}</p>
                   <a href="#modal"><button onClick={() => {
                       setIsModalOpen(true);
                       dataToShowAtModal(client);
                   }} className="button-open-modal">Mais detalhes <AiOutlinePlus/></button></a>
               </div>
           )) 
           }
            {isModalOpen ? (
                <Modal 
                    seller={currentSeller}
                    costumer={currentCostumer}
                    description={currentDescription}
                    value={currentValue}
                ></Modal>
            ) : null}
            {isModalOpen ? (
                <BlackBg></BlackBg>
            ) : null}
           
        </div>
    )
}

export default Tabela
