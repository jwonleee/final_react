import { Link, Outlet } from "react-router-dom";
import styled from "../css/ArtistHome.module.css";
const ArtistHome = () => {



    return(
        <>
        <section style={{marginTop:'75px'}}>
            <div className={styled.artistTab} >
                <h3 className={styled.artistTitle}>Artist</h3>
                <ul className={styled.artistCotent}   >
                    <Link to='/artist/artistList'><li style={{color:'black'}}>ALL</li></Link>
                    <Link to='/artist/artistList'><li style={{color:'black'}}>MUSICIAN</li></Link>
                    <Link to='/artist/artistList'><li style={{color:'black'}}>ACTOR</li></Link>
                </ul>
            <Outlet/>
            </div>
        </section>
        </>
    )

}

export default ArtistHome;