import { Link, Outlet } from "react-router-dom";


const ArtistDetailAlbum_ive = () => {


    return(
        <>
             <ul>
                <li><Link to='/bp/artistDetailBp/albumBp/contentBp'>앨범</Link></li>
            </ul>

            <Outlet/>
        </>
    )
}

export default ArtistDetailAlbum_ive;