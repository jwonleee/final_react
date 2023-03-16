import { Link, Outlet } from "react-router-dom";


const ArtistDetailAlbumBp = () => {


    return(
        <>
             <ul>
                <li><Link to='/bp/artistDetailBp/albumBp/contentBp'>앨범</Link></li>
            </ul>

            <Outlet/>
        </>
    )
}

export default ArtistDetailAlbumBp;