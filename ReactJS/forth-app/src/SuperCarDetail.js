import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TeamDetail = ()=>{
    const params = useParams();
    const navigate = useNavigate();
    const apiUrl="https://630c6b3883986f74a7bfd234.mockapi.io/SuperCars";

    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch(apiUrl+"/"+params.id,
        {
            method:"GET"
        })
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setData(res);
        })  
    },[]);
    return(<>
        <div class="card" style={{width: "18rem"}}>
            <img src={data.SuperCarImage}/>
        </div>
        <div class="row">
            <div class="card-body">
                <div class="col">SuperCar Name : {data.SuperCarName}</div>
                <div class="col">SuperCar Price : {data.SuperCarPrice}</div>
                <div class="col">SuperCar Description : {data.SuperCarDescription}</div>
                <div class="col">SuperCar Manufacturer : {data.SuperCarManufacturer}</div>
            </div>
        <div class="col-12">
            <button type="delete" class="btn btn-primary" onClick={()=>{
                fetch(apiUrl+"/"+params.id,{method:"DELETE"})
                .then(res=>{
                    navigate('/SuperCars');
                })
            }}>Delete</button>{"  "}
            <button type="edit" class="btn btn-primary" onClick={()=>{
                navigate('../SuperCar/edit/'+params.id);
            }}>Edit</button>
        </div>
        </div>
    </>
    )
}
  
export default TeamDetail