import { Fragment } from "react";
import { Link, Outlet, Route } from "react-router-dom";
import styled2 from "../../css/ArtistDetail_ldh.module.css";


const ArtistDetail_ldh = () => {
    
    return (
        <Fragment>
      
        {/* <div className={styled2.detainTitle}>
            LEE DOHYUN
        </div> */}
       
       
        <div className={styled2.detailMain}>
            <div className={styled2.detailTabWrap}>

                <ul className={styled2.detailTabBox} >
                    <Link to='main_ldh'><li>Main</li></Link>
                    <Link to='about_ldh'><li>Profile</li></Link>
                    <Link to='schedule'><li>Schedule</li></Link>
                </ul>
        
                <Outlet/>
            </div>

        </div>

            
          
        
        </Fragment>
    )
}

export default ArtistDetail_ldh;