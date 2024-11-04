import { useState } from "react"

const ImagemPerfilModal = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    return(
        <>

            <button 
                className="btn-modal"
                onClick={toggleModal}>
                    Open
            </button>
            <div className="modal">
                <div className="overlay" onClick={toggleModal}></div>
                <div className="modal-content">
                    <h2>Hello Modal</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi odio aliquid, ullam cupiditate illo nesciunt ea possimus praesentium obcaecati similique adipisci, expedita, autem fugit odit. Alias nihil ducimus atque id?</p>
                    <button 
                        className="close-modal"
                        onClick={toggleModal}>
                            Close  
                    </button>
                </div>
            </div>
        </>
    )
}

export default ImagemPerfilModal