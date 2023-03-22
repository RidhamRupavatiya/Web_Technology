import { useEffect , useState } from "react";

 export default function Faculty() {
        let [data , setData] = useState([]);
        useEffect(()=>{
                fetch("https://630c6b3883986f74a7bfd234.mockapi.io/Faculties")
                .then((res)=>{
                        return res.json();
                }).then((res)=>{
                       setData(res);
                });
        },[]);
        const formatedFaculty = data.map((fac)=>{
                return(
                 <div class="card col-md-3">
                        <img src={fac.Avatar}/>
                        Name : {fac.Facultyname}
                        <div class="col">City : {fac.City}</div>
                </div>
                )
        })
        return (
                <div class="row">
                        {formatedFaculty}
                </div>
        );
}