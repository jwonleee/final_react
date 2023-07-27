import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import styled1 from './css/Tab.module.css';

const Tab = () => {

    return(
        <Fragment>
        {/* TAB */}
            <div className={styled1.logo_name}>
                {/* <p>Y4J</p> */}
            </div>
            <div className={styled1.company_tab}>
                <ul>
                    <Link to={'/tab/about'}><li>ABOUT</li></Link>
                    <Link to={'/tab/history'}><li>HISTORY</li></Link>
                    <Link to={'/tab/contact'}><li>CONTACT</li></Link>
                </ul>
                <Outlet/>
            </div>
        </Fragment>
    )
}

export default Tab;

