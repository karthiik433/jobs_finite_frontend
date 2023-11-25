import axios from 'axios'
import Modal from "react-modal"
import React, { useEffect, useState } from 'react';


Modal.setAppElement('#root')
const Popup = (props) => {

	const [password, setPassword] = useState("");
	const [modalIsOpen, setModal] = useState(true)

	// useEffect(() => {
	// 	setModal(props.value);
	// },[])

	const handlePassword = (e) => {
		setPassword(e.target.value)
	}
	const checkPassword = () => {
        axios.post("https://jobs-finite.herokuapp.com/authenticatePassword",{email: props.email, password: password})
            .then(res => {
                if(res.status === 200) {
                	props.handleAdmin(true)
                	props.handleSignIn(false)
                	alert('Welcome admin')
                }
                // setModal(false)
            }) 
            .catch(err => {
            	console.log(err)
            	setModal(false)
            	props.handleAdmin(false)
            	props.handleSignIn(false)
            	alert("Wrong password")
            });
    }
	return (
		<div className="modal" >
			<Modal isOpen={modalIsOpen}
			style={{content: {
				      position: 'absolute',
				      // display: 'flex',
				      border: '1px solid #ccc',
				      background: '#fff',
				      overflow: 'auto',
				      WebkitOverflowScrolling: 'touch',
				      borderRadius: '4px',
				      outline: 'none',
				      // padding: '20px'
				    }}}
			>
			<div style={{ display: "flex",marginTop: "20%", alignItems: "center", flexDirection: "column", textAlign: "center"}}>
				<div style={{ textAlign: "center", marginBottom: "30px"}}>
					<span>Email: </span>
					<input type="email" value={props.email} disabled/>
				</div>
				<div style={{ textAlign: "center", marginBottom: "30px"}}>
					<span>Pass: </span>
					<input type="password" placeholder="password" onChange={handlePassword}/>
				</div>
				<div style={{ textAlign: "center"}}>
					<button onClick={checkPassword}> Login </button>
				</div>
			</div>
			</Modal>
		</div>
		)
}
export default Popup;