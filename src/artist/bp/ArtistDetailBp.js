import { Fragment } from "react";
import { Link, Outlet, Route } from "react-router-dom";
import styled2 from "../../css/ArtistDetail_blackpink.module.css";


const ArtistDetailBp = () => {
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Song+Myung&display=swap'); /* 궁서체 */
    </style>

    return (
        <Fragment>
      

       
        <div style={{position:'relative', backgroundColor:"black", padding: '50px 0', marginTop:'60px'}}>
            <div style={{textAlign:'center',position:'relative', top:'30px'}}>
                <img style={{height:'100px'}} src="/img/Black_Pink_logo_(2).png"/>
            </div>
            <div style={{textAlign:'center', marginBottom:'30px'}}>
                <img style={{height: '460px', width:'850px'}} src="/img/blackpink_hanbok.avif"/>
            </div>
        </div>

        <div className={styled2.detailMain}>
            <div className={styled2.detailTabWrap}>

                <ul className={styled2.detailTabBox} >
                    <Link to='mainBp'> <li style={{fontFamily:'Song Myung, serif', fontSize:'25px', color:'black'}}>메인</li></Link>
                    <Link to='aboutBp'> <li style={{fontFamily:'Song Myung, serif', fontSize:'25px', color:'black'}}>소개</li></Link>
                    <Link to='albumBp'><li style={{fontFamily:'Song Myung, serif' , fontSize:'25px',  color:'black'}}>앨범</li></Link>
                    <Link to='scheduleBp'><li style={{fontFamily:'Song Myung, serif', fontSize:'25px',  color:'black'}}>스케줄</li></Link>
                </ul>
        
                <Outlet/>
            </div>

        </div>

            
          
        
        </Fragment>
    )
}

export default ArtistDetailBp;