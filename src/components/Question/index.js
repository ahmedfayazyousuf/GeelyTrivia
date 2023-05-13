import logo2 from '../Styles&Assets/logo2.png';
import frame from '../Styles&Assets/LockupFrame.png'
import React from "react";
import { useState } from "react"
// import { useNavigate } from 'react-router-dom';
// import {useLocation} from 'react-router-dom';
// import { useEffect } from "react";
// import { getAuth, onAuthStateChanged, signOut} from "firebase/auth";
const Q50Q2 = () => {
    // const location = useLocation();
    // const navigate = useNavigate();
    // eslint-disable-next-line
    const [bool, setBool] = useState(false); 

    // useEffect(()=>{
    //     // const auth = getAuth();
    //     onAuthStateChanged(auth, (user) => {
    //         if(!user) {
    //             navigate(`/`); //If User is not logged in, redirect to login page
    //           }
    //           else{
    //             console.log(user)
    //           }
    //     });
    // },[])
  
    function Handleclick(e){
        if(e === 'option1'){
            document.getElementById(e).style.background = "white";
            document.getElementById(e).style.color = "black";
            document.getElementById('option2').style.background = "transparent";
            document.getElementById('option2').style.color = "black";
            document.getElementById('option3').style.background = "transparent";
            document.getElementById('option3').style.color = "black";
            document.getElementById('option4').style.background = "transparent";
            document.getElementById('option4').style.color = "black";
            setBool(false);
        }

        if(e === 'option2'){
            document.getElementById(e).style.background = "white";
            document.getElementById(e).style.color = "black";
            document.getElementById('option1').style.background = "transparent";
            document.getElementById('option1').style.color = "black";
            document.getElementById('option3').style.color = "black";
            document.getElementById('option3').style.background = "transparent";
            document.getElementById('option4').style.background = "transparent";
            document.getElementById('option4').style.color = "black";
            setBool(false);
        }

        if(e === 'option3'){
            document.getElementById(e).style.background = "white";
            document.getElementById(e).style.color = "black";
            document.getElementById('option1').style.background = "transparent";
            document.getElementById('option1').style.color = "black";
            document.getElementById('option2').style.background = "transparent";
            document.getElementById('option2').style.color = "black";
            document.getElementById('option4').style.background = "transparent";
            document.getElementById('option4').style.color = "black";
            setBool(true);
        }

        if(e === 'option4'){
            document.getElementById(e).style.background = "white";
            document.getElementById(e).style.color = "black";
            document.getElementById('option1').style.background = "transparent";
            document.getElementById('option1').style.color = "black";
            document.getElementById('option2').style.background = "transparent";
            document.getElementById('option2').style.color = "black";
            document.getElementById('option3').style.background = "transparent";
            document.getElementById('option3').style.color = "black";
            setBool(false);
        }
    }



    function handleSubmit(){
        // if(bool === false){
        //     if(location.state.count === 2){

        //         const auth = getAuth();
        //         signOut(auth).then(() => {
        //             navigate(`/Score`,{state:{count:1,score:location.state.score,car:location.state.car,id:location.state.id,time:location.state.time}})
        //         }).catch((error) => {
        //         // An error happened.
        //         });

                
                
            
        // }

        //     else{
        //         var no = Math.floor(Math.random() * (((3- location.state.count)-0) - 0 + 1)) + 0;
        //         var qn = location.state.qns;
        //         var n = qn[no]
        //         if (no !== -1) {
        //             qn.splice(no, 1);
        //         }

        //         console.log(no)
        //         console.log(qn)

        //         navigate(`/Q50Q${n}`,{state:{count:location.state.count + 1,qns:qn,score:location.state.score,car:location.state.car,id:location.state.id,time:location.state.time}})
        //     }
        // }

        // else{
        //     if(location.state.count === 2){

        //         const auth = getAuth();
        //         signOut(auth).then(() => {
        //             navigate(`/Score`,{state:{count:1,score:location.state.score+1,car:location.state.car,id:location.state.id,time:location.state.time}})
        //         })
                
            
        // }

        //     else{
        //         var no = Math.floor(Math.random() * (((3- location.state.count)-0) - 0 + 1)) + 0;
        //         var qn = location.state.qns;
        //         var n = qn[no]
        //         if (no !== -1) {
        //             qn.splice(no, 1);
        //         }

        //         console.log(no)
        //         console.log(qn)

        //         navigate(`/Q50Q${n}`,{state:{count:location.state.count + 1,qns:qn,score:location.state.score+1,car:location.state.car,id:location.state.id,time:location.state.time}})
        //     }

        // }
    }

return(
    <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"center", alignItems:"center"}}>
        <div style={{display: 'flex', flexDirection: 'column', gap:'5px', alignItems: 'center', justifyContent:'center', height: '100vh'}}>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '-10px'}}>
                <img style={{width: '320px'}} src={frame} alt="Geely Logo"/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', marginBottom: '-30px'}}>
                <h1 className="header" >TRIVIA GAME</h1>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', padding: '0', paddingLeft: '30px', paddingRight: '30px'}} >
                <p style={{fontSize: '15px', color: 'white'}} >What is the country of origin for Geely Auto? </p>
            </div>

            <div className="slotparent"  style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '100%', marginTop: '15px'}}>
                    <div className="slotdiv" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '90%', overflowX:'hidden'}} id='slotparent'>
                        <button className="grab" id="option1" onClick={() => {Handleclick("option1")}} value="option1" style={{width:"280px", margin: '5px', border:'1px solid white', borderRadius: '20px', padding: '10px', color: 'white', backgroundColor: 'transparent', cursor: 'grab'}}>China</button>
                        <button className="grab" id="option2" onClick={() => {Handleclick("option2")}} value="option2" style={{width:"280px", margin: '5px', border:'1px solid white', borderRadius: '20px', padding: '10px', color: 'white', backgroundColor: 'transparent', cursor: 'grab'}}>Japan</button>
                        <button className="grab" id="option3" onClick={() => {Handleclick("option3")}} value="option3" style={{width:"280px", margin: '5px', border:'1px solid white', borderRadius: '20px', padding: '10px', color: 'white', backgroundColor: 'transparent', cursor: 'grab'}}>Germany</button>
                        <button className="grab" id="option4" onClick={() => {Handleclick("option4")}} value="option4" style={{width:"280px", margin: '5px', border:'1px solid white', borderRadius: '20px', padding: '10px', color: 'white', backgroundColor: 'transparent', cursor: 'grab'}}>United States</button>
                    </div>

                <button className="grab" style={{backgroundColor: '#002277', color: 'white', width: '150px', height: '37px' , border: '1px solid white', cursor: 'grab', marginTop: '20px'}} onClick={handleSubmit}>NEXT</button>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '35px'}}>
                    <img style={{width: '200px'}} src={logo2} alt="Geely Logo"/>
                </div>
            </div>
        </div>
    </div>
)
}

export default Q50Q2