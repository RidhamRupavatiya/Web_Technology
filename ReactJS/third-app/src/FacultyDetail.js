import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FacultyDetail = ()=>{
    const params = useParams();
    const navigate = useNavigate();
    const apiUrl="https://630c6b3883986f74a7bfd234.mockapi.io/Faculties";

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
            <img src={data.Avatar}/>
            <hr/>
            <div class="card-body">
                <div class="col">Faculty Name : {data.Facultyname}</div>
                <div class="col">City : {data.City}</div>
                <div class="col">Faculty Number : {data.Facultynumber}</div>
                <div class="col">Faculty Email : {data.Facultyemail}</div>
            </div>
        <div class="col-12">
            <button type="delete" class="btn btn-primary" onClick={()=>{
                fetch(apiUrl+"/"+params.id,{method:"DELETE"})
                .then(res=>{
                    navigate('/faculties');
                })
            }}>Delete</button>{"  "}
            <button type="edit" class="btn btn-primary" onClick={()=>{
                navigate('../faculties/edit/'+params.id);
            }}>Edit</button>
        </div>
        </div>
    </>
    )
}
  
export default FacultyDetail