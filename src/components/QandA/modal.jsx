import Modal from 'react-modal';


const OpenModal = ({isOpen,score,scores,setIsClose}) => {

    
    function toggleModal(){

        setIsClose()
        
    }

    Modal.setAppElement("#root");

    return (  
        <Modal isOpen={isOpen} className='modal'
        onRequestClose={toggleModal}
        contentLabel="My dialog">
      <div className="modals">
        <span onClick={toggleModal}>X</span>
       {score}
       {scores}
      </div>
        </Modal>
    );
}
 
export default OpenModal;