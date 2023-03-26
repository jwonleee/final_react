import styled3 from "../../css/ArtistDetailAbout_ive.module.css";



const ArtistDetailAbout_ive = () => {

    return(
        <>
            
            <div className={styled3.artisAboutBox}>
                <ul className={styled3.artistAbout}>    
                    <div className={styled3.artistProfile1}>
                        <div>
                            <li><img style={{width:'220px', height:'220px'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/AnYujin.webp" alt="아이브 안유진"></img></li>
                            <li className={styled3.artistProfile1_content}>
                                <h4>AN YUJIN</h4>
                                <span>뮤지션</span>
                            </li>
                        </div>
                    </div>
                    <div className={styled3.artistProfile1}>
                        <div>
                            <li><img style={{width:'220px', height:'220px'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/Jangwonyoung.webp" alt="아이브 장원영"></img></li>
                            <li className={styled3.artistProfile1_content}>
                                <h4>JANG WONYOUNG</h4>
                                <span>뮤지션</span>
                            </li>
                        </div>
                    </div>
                    <div className={styled3.artistProfile1}>
                        <div>
                            <li><img style={{width:'220px', height:'220px'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/Liz.webp" alt="아이브 리즈"></img></li>
                            <li className={styled3.artistProfile1_content}>
                                <h4>LIZ</h4>
                                <span>뮤지션</span>
                            </li>
                        </div>
                    </div>
                    <div className={styled3.artistProfile1}>
                        <div>
                            <li><img style={{width:'220px', height:'220px'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/Rei.webp" alt="아이브 레이"></img></li>
                            <li className={styled3.artistProfile1_content}>
                                <h4>REI</h4>
                                <span>뮤지션</span>
                            </li>
                        </div>
                    </div>
                    <div className={styled3.artistProfile1}>
                        <div>
                            <li><img style={{width:'220px', height:'220px'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/Leeseo.webp" alt="아이브 이서"></img></li>
                            <li className={styled3.artistProfile1_content}>
                                <h4>LEESEO</h4>
                                <span>뮤지션</span>
                            </li>
                        </div>
                    </div>
                    <div className={styled3.artistProfile1}>
                        <div>
                            <li><img style={{width:'220px', height:'220px'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/Gaeul.webp" alt="아이브 가을"></img></li>
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