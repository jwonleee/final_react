import { Fragment } from "react";
import { Link } from "react-router-dom";
import styled1 from './css/Tab.module.css';

const Tab = () => {

    return(
        <Fragment>
        {/* TAB */}
            <div className={styled1.logo_name}>
                <p>Y4J</p>
            </div>
            <div className={styled1.company_tab}>
                <ul>
                    <Link to={'/about'}><li>ABOUT</li></Link>
                    <Link to={'/history'}><li>HISTORY</li></Link>
                    <Link to={'/contact'}><li>CONTACT</li></Link>
                </ul>
            </div>
        </Fragment>
    )
}

export default Tab;

