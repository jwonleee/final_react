import { Fragment } from "react";
import { Link, Outlet, Route } from "react-router-dom";
import styled2 from "../../css/ArtistDetail_ldh.module.css";


const ArtistDetail_ldh = () => {
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Song+Myung&display=swap'); /* 궁서체 */
    </style>

    return (
        <Fragment>
      

       
       
        <div className={styled2.detailMain}>
            <div className={styled2.detailTabWrap}>

                <ul className={styled2.detailTabBox} >
                    <Link to='main_ldh'> <li style={{fontFamily:'Song Myung, serif', fontSize:'23px', color:'black'}}>메인</li></Link>
                    <Link to='about_ldh'> <li style={{fontFamily:'Song Myung, serif', fontSize:'23px', color:'black'}}>소개</li></Link>
                    <Link to='album_ldh'><li style={{fontFamily:'Song Myung, serif' , fontSize:'23px',  color:'black'}}>앨범</li></Link>
                    <Link to='schedule_ldh'><li style={{fontFamily:'Song Myung, serif', fontSize:'23px',  color:'black'}}>스케줄</li></Link>
                </ul>
        
                <Outlet/>
            </div>

        </div>

            
          
        
        </Fragment>
    )
}

export default ArtistDetail_ldh;