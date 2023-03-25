import { Link, Outlet } from "react-router-dom";
import styled from "../css/ArtistHome.module.css";

const ArtistHome = () => {

    return(
        <>
        <section style={{marginTop:'140px'}}>
            <div className={styled.artistTab} >
                <h3 className={styled.artistTitle}>Artist</h3>
                <ul className={styled.artistCotent}   >
                    <Link to='/artist/artistList'><li>ALL</li></Link>
                    <Link to='/artist/musicianList'><li>MUSICIAN</li></Link>
                    <Link to='/artist/actorList'><li>ACTOR</li></Link>
                </ul>
                {/* 링크에 맞는 리스트 나옴 */}
                <Outlet/>
            </div>
        
        </section>
        </>
    )

}

export default ArtistHome;