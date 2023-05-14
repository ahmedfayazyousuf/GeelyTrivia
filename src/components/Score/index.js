import logo2 from '../Styles&Assets/logo2.png';
import frame from '../Styles&Assets/LockupFrame.png'
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {useLocation} from 'react-router-dom';
// import firebase from '../../firbase';

const Score = () => {
    // const location = useLocation();
    // const navigate = useNavigate();
    //     function Handleclick(e){
            
    //     }

    // async function updateUser(){
    //     var time2 = new Date();
    //     var time = location.state.time;
    //     var timetaken = (time2 - time) / 1000;
    //     console.log((time2 - time) / 1000," seconds")
    //     const CarUser = firebase.firestore().collection("CarUsers").doc(location.state.id);
    //     await CarUser.update({
    //         Score: location.state.score,
    //         TimeTaken: timetaken

    //     });
    // }

    // useEffect(()=>{
        
    //     updateUser(); 

    // },[])
    
    return(
        <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"center", alignItems:"center"}}>
            <div style={{display: 'flex', flexDirection: 'column', gap:'5px', alignItems: 'center', justifyContent:'center', height: '100vh'}}>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '-10px'}}>
                    <img style={{width: '320px'}} src={frame} alt="Geely Logo"/>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', marginBottom: '-30px'}}>
                    <h1 className="header" >TRIVIA GAME</h1>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '100%', marginTop: '15px'}}>
                    
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '300px',paddingLeft: '0px', paddingTop: '40px', paddingBottom: '40px', border: '1px solid white', borderRadius: '15px', backgroundColor: '#002277'}}>

                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}} id='slotparent'>
                            <p style={{color: 'white'}}>CORRECT</p>
                            <p style={{color: 'white', marginLeft: '15px'}}>4</p>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}} id='slotparent'>
                            <p style={{color: 'white'}}>INCORRECT</p>
                            <p style={{color: 'white', marginLeft: '15px'}}>1</p>
                        </div>
                    </div>

                    <button className="grab" style={{backgroundColor: '#002277', color: 'white', width: '150px', height: '37px' , border: '1px solid white', cursor: 'grab', marginTop: '20px'}}>SUBMIT</button>
                    

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '35px'}}>
                        <img style={{width: '200px'}} src={logo2} alt="Geely Logo"/>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Score