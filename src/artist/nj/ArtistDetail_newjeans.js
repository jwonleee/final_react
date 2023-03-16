import { Fragment } from "react";
import { Link, Outlet, Route } from "react-router-dom";
import styled2 from "../../css/ArtistDetail_newjeans.module.css";


const ArtistDetail_newjeans = () => {
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Song+Myung&display=swap'); /* 궁서체 */
    </style>

    return (
        <Fragment>
      

       
        <div style={{position:'relative', backgroundColor:"rgba(208, 239, 229, 0.674)", paddingTop: '40px', marginTop:'60px', paddingBottom:'65px'}}>
            <div style={{textAlign:'center',position:'relative', top:'30px'}}>
                <img style={{height:'80px', width:'470px'}} src="/img/NewJeans_logo_white.png"/>
            </div>
            <div style={{textAlign:'center', marginBottom:'30px'}}>
                <img style={{height: '480px', width:'850px'}} src="/img/newjeans_all2.jpg"/>
            </div>
        </div>

        <div className={styled2.detailMain}>
            <div className={styled2.detailTabWrap}>

                <ul className={styled2.detailTabBox} >
                    <Link to='main_nj'> <li style={{fontFamily:'Song Myung, serif', fontSize:'25px', color:'black'}}>메인</li></Link>
                    <Link to='about_nj'> <li style={{fontFamily:'Song Myung, serif', fontSize:'25px', color:'black'}}>소개</li></Link>
                    <Link to='album_nj'><li style={{fontFamily:'Song Myung, serif' , fontSize:'25px',  color:'black'}}>앨범</li></Link>
                    <Link to='schedule_nj'><li style={{fontFamily:'Song Myung, serif', fontSize:'25px',  color:'black'}}>스케줄</li></Link>
                </ul>
        
                <Outlet/>
            </div>

        </div>

            
          
        
        </Fragment>
    )
}

export default ArtistDetail_newjeans;