import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const Faculties = () =>{
   
    const [data,setData] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        fetch("https://630c6b3883986f74a7bfd234.mockapi.io/Faculties")
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setData(res);
        })  
    },[]);

    const formatedData = data.map((fac)=>{
        return(
            <div class="card col-md-2">
                <img src={fac.Avatar} /><br/>
                <div class="card-body" align="center">
                    {fac.Facultyname}<br/>
                    <button type ="button" class="btn btn-primary" onClick={()=>{
                    navigate('/faculties/'+fac.id)
                    }}>Detail</button>
                </div>
            </div>
        )
    })
    return(
        <div class="row">
            {formatedData}
        </div>
    )
}
export default Faculties