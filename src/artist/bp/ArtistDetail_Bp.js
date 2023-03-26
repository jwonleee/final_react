import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import styled2 from "../../css/ArtistDetail_blackpink.module.css";


const ArtistDetailBp = () => {

    return (
        <Fragment>
      

       
        <div style={{position:'relative', backgroundColor:"black", padding: '50px 0', marginTop:'60px'}}>
            <div style={{textAlign:'center',position:'relative', top:'30px'}}>
                <img style={{height:'100px'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/Black_Pink_logo_(2).png"/>
            </div>
            <div style={{textAlign:'center', marginBottom:'30px'}}>
                <img style={{height: '460px', width:'850px',  objectFit: 'cover'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/blackpink_main.jpg"/>
            </div>
        </div>

        <div className={styled2.detailMain}>
            <div className={styled2.detailTabWrap}>

                <ul className={styled2.detailTabBox} >
                <Link to='mainBp'><li>Main</li></Link>
                    <Link to='aboutBp'><li>Profile</li></Link>
                    <Link to='scheduleBp'><li>Schedule</li></Link>
                </ul>
        
                <Outlet/>
            </div>

        </div>

            
          
        
        </Fragment>
    )
}

export default ArtistDetailBp;