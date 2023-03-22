import { useEffect, useState } from "react"

const Product = () =>{
   const [data , setData] = useState();
   useEffect(
        fetch('https://630c6b3883986f74a7bfd234.mockapi.io/Products')
        .then((res)=>{return res.json()})
        .then((res)=>console.log(res))
    ,[]);
return(<>
    
</>);

}

export default Product;