import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import styled2 from "../../css/ArtistDetail_newjeans.module.css";


const ArtistDetail_newjeans = () => {

    return (
        <Fragment>
      

       
        <div style={{position:'relative', backgroundColor:"rgba(208, 239, 229, 0.674)", paddingTop: '40px', marginTop:'60px', paddingBottom:'65px'}}>
            <div style={{textAlign:'center',position:'relative', top:'30px'}}>
                <img style={{height:'80px', width:'470px'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/NewJeans_logo_white.png"/>
            </div>
            <div style={{textAlign:'center', marginBottom:'30px'}}>
                <img style={{height: '480px', width:'850px'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/newjeans_all2.jpg"/>
            </div>
        </div>

        <div className={styled2.detailMain}>
            <div className={styled2.detailTabWrap}>

                <ul className={styled2.detailTabBox} >
                    <Link to='main_nj'><li>Main</li></Link>
                    <Link to='about_nj'><li>Profile</li></Link>
                    <Link to='schedule_nj'><li>Schedule</li></Link>
                </ul>
        
                <Outlet/>
            </div>

        </div>

            
          
        
        </Fragment>
    )
}

export default ArtistDetail_newjeans;