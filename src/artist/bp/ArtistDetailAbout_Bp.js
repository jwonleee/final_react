import styled3 from "../../css/ArtistDetailAbout_blackpink.module.css"



const ArtistDetailAboutBp = () => {

    return(
        <>
            
            <div className={styled3.artisAboutBox}>
                <ul className={styled3.artistAbout}>    
                    <div className={styled3.artistProfile1}>
                        <div>
                            <li><img style={{width:'220px', height:'220px'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/jisoo.jpeg" alt="블랙핑크 지수"></img></li>
                            <li className={styled3.artistProfile1_content}>
                                <h4>JISOO</h4>
                                <span>배우 겸 뮤지션</span>
                            </li>
                        </div>
                    </div>
                    <div className={styled3.artistProfile1}>
                        <div>
                            <li><img style={{width:'220px', height:'220px'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/jennie.jpeg" alt="블랙핑크 제니"></img></li>
                            <li className={styled3.artistProfile1_content}>
                                <h4>JENNIE</h4>
                                <span>뮤지션</span>
                            </li>
                        </div>
                    </div>
                    <div className={styled3.artistProfile1}>
                        <div>
                            <li><img style={{width:'220px', height:'220px'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/lisa.jpeg" alt="블랙핑크 리사"></img></li>
                            <li className={styled3.artistProfile1_content}>
                                <h4>LISA</h4>
                                <span>뮤지션</span>
                            </li>
                        </div>
                    </div>
                    <div className={styled3.artistProfile1}>
                        <div>
                            <li><img style={{width:'220px', height:'220px'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/rose.jpeg" alt="블랙핑크 로제"></img></li>
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

export default ArtistDetailAboutBp;