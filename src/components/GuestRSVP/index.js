import logo2 from '../Styles&Assets/logo2.png';
import logo from '../Styles&Assets/LockupV32.png';
import { useNavigate } from 'react-router-dom';
import '../Styles&Assets/style.css';

const GuestRSVP = () =>{
    const navigate = useNavigate();
    const handleClick = () => navigate('/guestregistration');

    const handleClick2 = () => navigate('/success2');

    return(
        <div  className='back' style={{display:"flex", flexDirection:"column", width:"100%", justifyContent:"center", alignItems:"center"}}>

            <div className="mainer">

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '10px'}}>
                    <img style={{width: '320px', marginTop: '50px'}} src={logo} alt="Geely Logo"/>
                </div>

                <div style={{display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center'}}> 
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxWidth: '460px', marginTop: '10px'}}>
                        <p style={{color: 'white', margin: '15px', fontSize: '14px'}}><span style={{fontWeight: '900'}}>Get ready to experience the Drive of the Future</span><br></br>with the global automobile powerhouse GEELY Auto, in partnership with AGMC – the official distributor in the UAE.</p>
                        <p style={{color: 'white', margin: '15px', fontSize: '14px'}}>We invite you to witness the dawn of a new era in SMART mobility, as we reveal the latest revolution in automotive technology.</p>
                        <p style={{color: 'white', margin: '15px', fontSize: '14px', marginBottom: '30px'}}>Join us for an exclusive evening of celebrations and discovery.<br></br><span style={{fontWeight: '900'}}>We can't wait to Drive the Future with you!</span></p>
                        
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '330px', height: '30px'}}>
                            <div style={{display: 'flex', width: '50%', textAlign: 'right', justifyContent: 'flex-end', alignItems: 'flex-end', paddingRight: '10px', borderRight: '0.5px solid white'}}>
                                <p style={{color: 'white', textAlign: 'right', letterSpacing: '2px', padding: '0', margin: '0'}}>May 17, 2023</p>
                            </div>

                            <div style={{display: 'flex', width: '50%', paddingLeft: '10px', borderLeft: '0.5px solid white'}}>
                                <p style={{color: 'white', letterSpacing: '2px', padding: '0', margin: '0'}}>6PM SHARP</p>
                            </div>
                        </div>
                        
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '330px', textAlign: 'center', marginTop: '20px'}}>
                            <p style={{color: 'white', fontSize: '22px', margin: '0', letterSpacing: '2px'}}>GEELY UAE SHOWROOM</p>
                            <p style={{color: 'white', marginTop: '0px', letterSpacing: '2px', fontSize: '14px'}}>DEIRA – DUBAI</p>
                        </div>
                    </div>

                </div>

                <div style={{display: 'flex', width: '100%'}}> 
                    <div style={{width: '100%'}}>
                        <button onClick={handleClick} style={{backgroundColor: '#002277', color: 'white', width: '150px', height: '37px' , border: '1px solid white', cursor: 'grab', marginTop: '20px', marginRight: '20px'}}>YES</button>
                        <button onClick={handleClick2} style={{backgroundColor: '#002277', color: 'white', width: '150px', height: '37px' , border: '1px solid white', cursor: 'grab', marginTop: '20px'}}>NO</button>
                    </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '35px', marginBottom: '150px'}}>
                    <img style={{width: '200px'}} src={logo2} alt="Geely Logo"/>
                </div>

            </div>

        </div>
    )
}

export default GuestRSVP