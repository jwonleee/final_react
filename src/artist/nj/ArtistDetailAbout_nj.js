import styled3 from "../../css/ArtistDetailAbout_blackpink.module.css"



const ArtistDetailAbout_nj = () => {

    return(
        <>
            
            <div className={styled3.artisAboutBox}>
                <ul className={styled3.artistAbout}>    
                    <div className={styled3.artistProfile1}>
                        <div>
                            <li><img style={{width:'200px', height:'220px'}} src="/img/jisoo.jpeg" alt="블랙핑크 지수"></img></li>
                            <li className={styled3.artistProfile1_content}>
                                <h4>JISOO</h4>
                                <span>배우 겸 뮤지션</span>
                            </li>
                        </div>
                    </div>
                    <div className={styled3.artistProfile1}>
                        <div>
                            <li><img style={{width:'200px', height:'220px'}} src="/img/jennie.jpeg" alt="블랙핑크 제니"></img></li>
                            <li className={styled3.artistProfile1_content}>
                                <h4>JENNIE</h4>
                                <span>뮤지션</span>
                            </li>
                        </div>
                    </div>
                    <div className={styled3.artistProfile1}>
                        <div>
                            <li><img style={{width:'200px', height:'220px'}} src="/img/lisa.jpeg" alt="블랙핑크 리사"></img></li>
                            <li className={styled3.artistProfile1_content}>
                                <h4>LISA</h4>
                                <span>뮤지션</span>
                            </li>
                        </div>
                    </div>
                    <div className={styled3.artistProfile1}>
                        <div>
                            <li><img style={{width:'200px', height:'220px'}} src="/img/rose.jpeg" alt="블랙핑크 로제"></img></li>
                            <li className={styled3.artistProfile1_content}>
                                <h4>ROSE</h4>
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