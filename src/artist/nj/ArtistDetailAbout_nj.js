import styled3 from "../../css/ArtistDetailAbout_newjeans.module.css"



const ArtistDetailAbout_nj = () => {

    return(
        <>
            
            <div className={styled3.artisAboutBox}>
                <ul className={styled3.artistAbout}>    
                    <div className={styled3.artistProfile1}>
                        <div>
                            <li><img style={{width:'200px', height:'200px', objectFit: 'cover', objectPosition: '0px -1px'}} src="/img/minji.jpeg" alt="뉴진스 민지"></img></li>
                            <li className={styled3.artistProfile1_content}>
                                <h4>MINJI</h4>
                                <span>뮤지션</span>
                            </li>
                        </div>
                    </div>
                    <div className={styled3.artistProfile1}>
                        <div>
                            <li><img style={{width:'200px', height:'200px', objectFit: 'cover', objectPosition: '0px -20px'}} src="/img/hanni.jpeg" alt="뉴진스 하니"></img></li>
                            <li className={styled3.artistProfile1_content}>
                                <h4>HANNI</h4>
                                <span>뮤지션</span>
                            </li>
                        </div>
                    </div>
                    <div className={styled3.artistProfile1}>
                        <div>
                            <li><img style={{width:'200px', height:'200px', objectFit: 'cover', objectPosition: '0px -20px'}} src="/img/Hyein.jpeg" alt="뉴진스 혜인"></img></li>
                            <li className={styled3.artistProfile1_content}>
                                <h4>HYEIN</h4>
                                <span>뮤지션</span>
                            </li>
                        </div>
                    </div>
                    <div className={styled3.artistProfile1}>
                        <div>
                            <li><img style={{width:'200px', height:'200px', objectFit: 'cover'}} src="/img/danielle.jpeg" alt="뉴진스 다니엘"></img></li>
                            <li className={styled3.artistProfile1_content}>
                                <h4>DANIELLE</h4>
                                <span>뮤지션</span>
                            </li>
                        </div>
                    </div>
                    <div className={styled3.artistProfile1}>
                        <div>
                            <li><img style={{width:'200px', height:'200px', objectFit: 'cover', objectPosition: '0px -50px'}} src="/img/Haerin.jpeg" alt="뉴진스 해린"></img></li>
                            <li className={styled3.artistProfile1_content}>
                                <h4>HAERIN</h4>
                                <span>뮤지션</span>
                            </li>
                        </div>
                    </div>
                </ul>
            </div>

        </>
    )
}

export default ArtistDetailAbout_nj;