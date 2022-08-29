function Faculty(){
    const faculties = 
            [
                {photo:"https://darshan.ac.in/U01/Faculty-Photo/09CEAVB_19042019_063947AM.jpg",name:"Prof.Arjun Bala",city:"Rajkot",post:"Assistance Professor"},
                {photo:"https://darshan.ac.in/U01/Faculty-Photo/CEMDT01_25042019_022618PM.jpg",name:"Prof.Maulik Trivedi",city:"Rajkot",post:"Assistance Professor"},
                {photo:"https://darshan.ac.in/U01/Faculty-Photo/01CENMG%20(2)_19042019_063552AM_21052019_044853AM.jpg",name:"Dr.Nimesh Gambhava",city:"Rajkot",post:"Professor"},
                {photo:"https://darshan.ac.in/U01/Faculty-Photo/5---21-06-2021-10-50-15.jpg",name:"Dr.Gopi Sanghani",city:"Rajkot",post:"Dean-school of Computer Science"},
            ];
    return(	
      <>
      <table border="1px">
        <tr align="center">
        {faculties.map((fac)=>{
             return <td >
                <img src={fac.photo} />
                </td>
        })}
        </tr>
    
        <tr align="center">
        {faculties.map((fac)=>{
             return <td>
                Name : {fac.name}
                </td>
        })}
        </tr>
    
        <tr align="center">
        {faculties.map((fac)=>{
             return <td>
                City : {fac.city}
                </td>
        })}
        </tr>
    
        <tr align="center">
        {faculties.map((fac)=>{
             return <td>
                Post : {fac.post}
                </td>
        })}
        </tr>
        </table>
      </>
    );
}

export default Faculty;



// export default function Faculty() {
//  return(<>
// <div class="card-group">
//   <div class="card">
//     <img src="https://darshan.ac.in/U01/Faculty-Photo/09CEAVB_19042019_063947AM.jpg" class="card-img-top" alt="..."style={{height:"150px"}}/>
//     <div class="card-body">
//       <p class="card-text">Prof. Arjun Bala</p>
//       <p class="card-text">Assistance Professor</p>
//     </div>
//   </div>
//   <div class="card">
//     <img src="https://darshan.ac.in/U01/Faculty-Photo/CEMDT01_25042019_022618PM.jpg" class="card-img-top" alt="..."style={{height:"150px"}}/>
//     <div class="card-body">
//       <p class="card-text">Prof. Maulik Bhatt</p>
//       <p class="card-text">Assistance Professor</p>
//     </div>
//   </div>
//   <div class="card">
//     <img src="https://darshan.ac.in/U01/Faculty-Photo/01CENMG%20(2)_19042019_063552AM_21052019_044853AM.jpg" class="card-img-top" alt="..." style={{height:"150px"}}/>
//     <div class="card-body">
//       <p class="card-text">Prof. Nilesh Gambhava</p>
//       <p class="card-text">Professor</p>
//     </div>
//   </div>
// </div>
// </>)
// }