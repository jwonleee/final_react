import { Fragment } from "react";
import { Link, Outlet, Route } from "react-router-dom";
import styled2 from "../../css/ArtistDetail_csb.module.css";


const ArtistDetail_csb = () => {

    return (
        <Fragment>
      

       
       
        <div className={styled2.detailMain}>
            <div className={styled2.detailTabWrap}>

                <ul className={styled2.detailTabBox} >
                    <Link to='main_csb'><li>Main</li></Link>
                    <Link to='about_csb'><li>Profile</li></Link>
                    <Link to='schedule_csb'><li>Schedule</li></Link>
                </ul>
        
                <Outlet/>
            </div>

        </div>

            
          
        
        </Fragment>
    )
}

export default ArtistDetail_csb;