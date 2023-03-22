import React from 'react';
import { useEffect , useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Student = ()=>{
	const [data , setData] = useState([]);
	useEffect(()=>{
		fetch('http://localhost:3003/products')
		.then((res)=>{return res.json()})
		.then((res)=>{
			setData(res);
		});
	},[]);
	const FormatedStudent = data.map((stu)=>{
		return(
			<td> 
				{stu.PId} {<br/>}
				{stu.PName}{<br/>}
				{stu.Price}{<br/>}
			</td>
		)
		})
		return FormatedStudent;
}

root.render(
	<table border={1}><tr><Student/></tr></table>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals