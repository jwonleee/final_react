import styled3 from "../../css/ArtistDetailAbout_ive.module.css";



const ArtistDetailAbout_ive = () => {

    return(
        <>
            
            <div className={styled3.artisAboutBox}>
                <ul className={styled3.artistAbout}>    
                    <div className={styled3.artistProfile1}>
                        <div>
                            <li><img style={{width:'220px', height:'220px'}} src="/img/Anyujin.webp" alt="아이브 안유진"></img></li>
                            <li className={styled3.artistProfile1_content}>
                                <h4>AN YUJIN</h4>
                                <span>뮤지션</span>
                            </li>
                        </div>
                    </div>
                    <div className={styled3.artistProfile1}>
                        <div>
                            <li><img style={{width:'220px', height:'220px'}} src="/img/Jangwonyoung.webp" alt="아이브 장원영"></img></li>
                            <li className={styled3.artistProfile1_content}>
                                <h4>JANG WONYOUNG</h4>
                                <span>뮤지션</span>
                            </li>
                        </div>
                    </div>
                    <div className={styled3.artistProfile1}>
                        <div>
                            <li><img style={{width:'220px', height:'220px'}} src="/img/Liz.webp" alt="아이브 리즈"></img></li>
                            <li className={styled3.artistProfile1_content}>
                                <h4>LIZ</h4>
                                <span>뮤지션</span>
                            </li>
                        </div>
                    </div>
                    <div className={styled3.artistProfile1}>
                        <div>
                            <li><img style={{width:'220px', height:'220px'}} src="/img/Rei.webp" alt="아이브 레이"></img></li>
                            <li className={styled3.artistProfile1_content}>
                                <h4>REI</h4>
                                <span>뮤지션</span>
                            </li>
                        </div>
                    </div>
                    <div className={styled3.artistProfile1}>
                        <div>
                            <li><img style={{width:'220px', height:'220px'}} src="/img/Leeseo.webp" alt="아이브 이서"></img></li>
                            <li className={styled3.artistProfile1_content}>
                                <h4>LEESEO</h4>
                                <span>뮤지션</span>
                            </li>
                        </div>
                    </div>
                    <div className={styled3.artistProfile1}>
                        <div>
                            <li><img style={{width:'220px', height:'220px'}} src="/img/Gaeul.webp" alt="아이브 가을"></img></li>
                            <li className={styled3.artistProfile1_content}>
                                <h4>GAEUL</h4>
                                <span>뮤지션</span>
                            </li>
                        </div>
                    </div>
                </ul>
            </div>

        </>
    )
}

export default ArtistDetailAbout_ive;