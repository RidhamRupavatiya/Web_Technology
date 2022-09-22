import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

const TeamAdd = () =>{
    const params = useParams();
    const navigate = useNavigate();
    const [data , setData] = useState([]);
    const apiUrl = "https://630c6b3883986f74a7bfd234.mockapi.io/SuperCars";

    useEffect(()=>{
        if(params.id > 0){
        fetch(apiUrl+"/"+params.id,{method:"GET"})
        .then((res)=>{return res.json();})
        .then((res)=>{setData(res);})
        }
    },[]);
    return(<>
    <div class="mb-3">
        <label class="form-label">SuperCar Name :</label>
        <input type="text" class="form-control" placeholder="Enter SuperCar Name" value={data.SuperCarName}
        onChange={(e)=>{
            setData({...data , SuperCarName : e.target.value})
        }}/>
    </div>
    <div class="mb-3">
        <label class="form-label">SuperCar Image :</label>
        <input type="text" class="form-control" placeholder="Enter SuperCar Image Url" value={data.SuperCarImage}
        onChange={(e)=>{
            setData({...data , SuperCarImage : e.target.value})
        }}/>
    </div>
    <div class="mb-3">
        <label class="form-label">SuperCar Price :</label>
        <input type="text" class="form-control" placeholder="Enter SuperCar Price" value={data.SuperCarPrice}
        onChange={(e)=>{
            setData({...data , SuperCarPrice : e.target.value})
        }}/>
    </div>
    <div class="mb-3">
        <label class="form-label">SuperCar Manufacturer :</label>
        <input type="check-box" class="form-control" placeholder="Enter SuperCar Manufacturer" value={data.SuperCarManufacturer}
        onChange={(e)=>{
            setData({...data , SuperCarManufacturer : e.target.value})
        }}/>
    </div>
    <div class="mb-3">
        <label class="form-label">SuperCar Description :</label>
        <input type="text" class="form-control" placeholder="Enter SuperCar Description" value={data.SuperCarDescription}
        onChange={(e)=>{
            setData({...data , SuperCarDescription : e.target.value})
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
                navigate('/SuperCar/'+params.id);
            })
        } else{
            fetch(apiUrl,{
                method:"POST",
                body: JSON.stringify(data),
                headers : {"Content-Type":"application/json"}
            })
            .then((res)=>{
                navigate("/SuperCars");
            })
        }
    }}> 
    {params.id > 0 && "Edit  "}
    {!(params.id > 0) && "Add  "}
    SuperCar
    </button>
</>
)
}

export default TeamAdd