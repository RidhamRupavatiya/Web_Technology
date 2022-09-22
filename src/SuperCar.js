import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const Teams = () =>{
   
    const [data,setData] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        fetch("https://630c6b3883986f74a7bfd234.mockapi.io/SuperCars")
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setData(res);
        })  
    },[]);

    const formatedData = data.map((car)=>{
        return(
            <div class="card col-md-2">
                <img src={car.SuperCarImage} /><br/>
                <div class="card-body" align="center">
                    {car.SuperCarName}<br/>
                    <button type ="button" class="btn btn-primary" onClick={()=>{
                    navigate('/SuperCar'+'/'+car.id)
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
export default Teams