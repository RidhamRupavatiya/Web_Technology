import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

const Facultyadd = () =>{
    const params = useParams();
    const navigate = useNavigate();
    const [data , setData] = useState([]);
    const apiUrl = "https://630c6b3883986f74a7bfd234.mockapi.io/Faculties";

    useEffect(()=>{
        if(params.id > 0){
        fetch(apiUrl+"/"+params.id,{method:"GET"})
        .then((res)=>{return res.json();})
        .then((res)=>{setData(res);})
        }
    },[]);
    return(<>
    <div class="mb-3">
        <label class="form-label">Facultyname :</label>
        <input type="text" class="form-control" placeholder="Enter Facultyname" value={data.Facultyname}
        onChange={(e)=>{
            setData({...data , Facultyname : e.target.value})
        }}/>
    </div>
    <div class="mb-3">
        <label class="form-label">Faculty Image :</label>
        <input type="text" class="form-control" placeholder="Enter Faculty Image Url" value={data.Avatar}
        onChange={(e)=>{
            setData({...data , Avatar : e.target.value})
        }}/>
    </div>
    <div class="mb-3">
        <label class="form-label">Faculty City :</label>
        <input type="text" class="form-control" placeholder="Enter Faculty City" value={data.City}
        onChange={(e)=>{
            setData({...data , City : e.target.value})
        }}/>
    </div>
    <div class="mb-3">
        <label class="form-label">Faculty Number :</label>
        <input type="text" class="form-control" placeholder="Enter Faculty number" value={data.Facultynumber}
        onChange={(e)=>{
            setData({...data , Facultynumber : e.target.value})
        }}/>
    </div>
    <div class="mb-3">
        <label class="form-label">Faculty Email :</label>
        <input type="check-box" class="form-control" placeholder="Enter Faculty Email" value={data.Facultyemail}
        onChange={(e)=>{
            setData({...data , Facultyemail : e.target.value})
        }}/>
    </div>

    <button class="btn btn-primary" type="button" onClick={()=>{
        if(params.id >0 ){
            fetch(apiUrl+"/"+params.id,{
                method:"PUT",
                body: JSON.stringify(data),
                headers : {"Content-Type":"application/json"}
            })
            .then((res)=>{
                navigate('/faculties/'+params.id);
            })
        } else{
            fetch(apiUrl,{
                method:"POST",
                body: JSON.stringify(data),
                headers : {"Content-Type":"application/json"}
            })
            .then((res)=>{
                navigate("/faculties");
            })
        }
    }}> 
    {params.id > 0 && "Edit  "}
    {!(params.id > 0) && "Add  "}
    Faculty
    </button>
</>
)
}

export default Facultyadd