import { Fragment } from "react";
import { Link, Outlet, Route } from "react-router-dom";
import styled2 from "../../css/ArtistDetail_ive.module.css";


const ArtistDetail_ive = () => {

    return (
        <Fragment>
      
        <div className={styled2.detailMain}>
            <div className={styled2.detailTabWrap}>
                {/* 아이브 로고 태그 */}
                <div style={{textAlign:'center', margin:'70px 0'}}>
                    <img style={{height:'400px', width:'300px'}} src="/img/ive_logo_(Black).png"/>
                </div>

                <ul className={styled2.detailTabBox} >
                    <Link to='main_ive'><li>Main</li></Link>
                    <Link to='about_ive'><li>Profile</li></Link>
                    <Link to='schedule'><li>Schedule</li></Link>
                </ul>
        
                <Outlet/>
            </div>

        </div>

            
          
        
        </Fragment>
    )
}

export default ArtistDetail_ive;