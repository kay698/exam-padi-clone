import React from "react";
import { Modal, Button } from "antd";

const ModalResult = () => {
	const [visible, setVisible] = React.useState(false);
	const [confirmLoading, setConfirmLoading] = React.useState(false);
	const [modalText, setModalText] = React.useState("Total Results Score: English: 50, Math: 10, Physics: 2, Chemistry: 60");

	const showModal = () => {
		setVisible(true);
	};

	const handleOk = () => {
		setModalText("The modal will be closed after two seconds");
		setConfirmLoading(true);
		setTimeout(() => {
			setVisible(false);
			setConfirmLoading(false);
		}, 2000);
	};

	const handleCancel = () => {
		console.log("Clicked cancel button");
		setVisible(false);
	};

	return (
		<>
			<Button style={{borderRadius:"7px", backgroundColor:'#27AE60', color:'#fff'}} onClick={showModal}>
				Submit
			</Button>
			<Modal style={{height:'100vh'}}
				title="Total Scores"
				visible={visible}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}>
				<p>{modalText}</p>
			</Modal>
		</>
	);
};

export default ModalResult;




// const ModalResult = ({isOpen,score,scores,setIsClose}) => {

    
//     function toggleModal(){

//         setIsClose()
        
//     }

//     Modal.setAppElement("#root");

//     return (  
//         <Modal isOpen={isOpen} className='modal'
//         onRequestClose={toggleModal}
//         contentLabel="My dialog">
//       <div className="modals">
//         <span onClick={toggleModal}>X</span>
//        {score}
//        {scores}
//       </div>
//         </Modal>
//     );
// }
 
// export default ModalResult;