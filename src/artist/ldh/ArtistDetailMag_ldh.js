import { Link, Outlet } from "react-router-dom";


const ArtistDetailMag_ldh = () => {


    return(
        <>
             <ul>
                <li><Link to='/bp/artistDetailBp/albumBp/contentBp'>앨범</Link></li>
            </ul>

            <Outlet/>
        </>
    )
}

export default ArtistDetailMag_ldh;