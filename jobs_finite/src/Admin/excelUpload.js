import { useState, useEffect } from "react"
import axios from 'axios'
import './admin.css'


const cate = [{name: ""},{name: "govt"},{name: "private"}]

const Excel = () => {
	const [select,setSelect] = useState(cate[0].name);
	const [type, setType] = useState("");
	const [disab,setDisabled] = useState(false)

	let formData = new FormData();

	const handleFile = (e) => {
		// formData = new FormData();
		let tar = e.target.files[0].name+""
		// console.log(e.target.files[0].name)
		if(e.target && e.target.files[0]) {
			formData.append('file',e.target.files[0]);
		}

		// setType(tar)
	}
		

	const handleStateChange = (e) => {
		// console.log(e.target.value)
		// console.log(cate[e.target.value].name)
		setSelect(cate[e.target.value].name)
	}


	const uploadFile = () => {
		// // console.log(select + " file name" + type)
		// console.log(type)
			// if(type.includes(select)) {
		// 		// formData.append("file")
				formData.append("fileType",select);
				// console.log(select)
				// console.log("format data to be sent",formData,select)
				axios.post("https://jobs-finite.herokuapp.com/excelUpload",formData)
					.then((res) => {
						alert("Success");
						document.getElementById("btn-up").style.background = "green"
						document.getElementById("btn-up").innerHTML = "Uploaded"

					})
					.catch((err) => {
						alert("failed")
						document.getElementById("btn-up").style.background = "red"
					})

					setDisabled(true)
					// document.getElementById("btn-up").style.background = "black"

			// } else {
			// 	alert("Upload proper file")
			// }
		}


	
	return (
		<div>
			<div className="header-admin"> Hello Admin, Upload the excel file</div>
			
			<div className="select-upload">
			<div style={{marginBottom: "20px"}}>Select govt or private </div>
			<select  onChange={handleStateChange}>
				{cate.map((item,itemIndex) => {
					return <option key={itemIndex} value={itemIndex}>{item.name}</option>
				})}
			</select>
			</div>

			<div className="file-upload">
				<input type="file" name="file" onChange={handleFile}/>
			</div>
			<div className="btn-upload">

			<button onClick={uploadFile} id="btn-up" disabled={disab}>Upload</button>
			</div>
		</div>
		)

}

export default Excel;