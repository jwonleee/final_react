import { Fragment, useRef, useState } from "react"
import styled4 from "../../css/ArtistDetailMain_blackpink.module.css";
import YouTube from 'react-youtube';


const ArtistDetailMainBp= () =>{
    
    return (
        <Fragment>
            {/* 블핑 셧다운 로고 태그 */}
            <div className={styled4.detailMain_content1}>
                <div style={{marginBottom:' 100px'}}>
                    <img style={{width:'800px', height:'600px'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/blackpink_shutdown_logo.png" alt="블랙핑크 셧다운 로고"></img>
                </div>
              
               {/* 블랙핑크 뮤비 영상 태그 */}
                <div style={{marginTop:'30px'}}>
                    <YouTube className={styled4.blackpinkMV}
                    //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
                    
                    videoId={"POe9SOEKotk"}
                    //opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
                    
                    opts={{
                        width: "990",
                        height: "590",
                        playerVars: {
                        rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                        modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                        },
                    }}
                    //이벤트 리스너 
                    onEnd={(e)=>{e.target.stopVideo(0);}}      
                    />
                </div>
           
            {/* 블랙핑크 앨범 내용 */}
                
                <div className={styled4.detailMain_content2}>
                  
                    <div  style={{textAlign:'center'}}>
                        <span style={{ fontWeight:'570'}}>
                        {/* 한국어 */}
                        
                                    세계 최정상 걸그룹 BLACKPINK가 두 번째 정규 앨범 [BORN PINK]를 발표했다. <br/>
                                    지난 8월 선공개곡 'Pink Venom'으로 전세계 리스너들을 중독시킨 BLACKPINK가 <br/>
                                    두 번째 정규앨범 [BORN PINK]로 또 한 번 전 세계를 매혹시킬 전망이다.
                                    <br/>
                                    <br/>
                                    [BORN PINK]는 태생부터 남다른 존재감을 지닌 BLACKPINK의  <br/>
                                    자신감을 드러내는 앨범명으로 타이틀곡 'Shut Down'을 비롯한 <br/>
                                    BLACKPINK만의 강렬한 사운드를 담은 독보적인 트랙 8곡이 수록됐다.


                        </span>
                    </div>
                   
                   
                </div>

                <div>
                    <div style={{marginTop:'100px'}}>
                        <img style={{width:'400px', height:'350px', boxShadow: '3px 2px 7px 0px rgba(128, 128, 128, 0.642)'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/blackpink_shutdown_album.jpeg"></img>
                    </div>
                </div>

                {/* 앨범 리스트 */}
                <div style={{width:'1100px', textAlign:'center', marginBottom:'100px'}}>

                    <div style={{marginTop:'100px', display:'flex',flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        {/* 1단 */}
                        <div style={{flexBasis:'40%'}}>
                            <div className={styled4.albumlist}>
                                <h3>1. Pink Venom</h3>
                                <span>작사 TEDDY, Danny Chung<br/>
                                    작곡 TEDDY, 24, R.Tee, IDO<br/>
                                    편곡 24, R_Tee, IDO
                                </span>
                            </div>
                            <div className={styled4.albumlist}>
                                <h3>2. Shut Down <p>TITLE</p></h3>
                                <span>작사 TEDDY, Danny Chung, Vince<br/>
                                    작곡 TEDDY, 24<br/>
                                    편곡 24
                                </span>
                            </div>
                            <div className={styled4.albumlist}>
                                <h3>3. Typa Girl</h3>
                                <span>작사 Bekuh BOOM<br/>
                                    작곡 Bekuh BOOM, Dominsuk<br/>
                                    편곡 Dominsuk
                                </span>
                            </div>
                            <div className={styled4.albumlist}>
                                <h3>4. Yeah Yeah Yeah</h3>
                                <span>작사 VVN, KUSH, Jisoo, Rose<br/>
                                    작곡 KUSH, R_Tee, VVN, IDO<br/>
                                    편곡 R_Tee, VVN, IDO
                                </span>
                            </div>
                        </div>
                        {/* 2단 */}
                        <div>
                            <div className={styled4.albumlist} >
                                <h3>5. Hard to Love</h3>
                                <span>작사 Freddy Wexler, Bianca "Blush" Atterberry, Max Wolfgang, TEDDY<br/>
                                    작곡 Freddy Wexler, TEDDY, Bianca "Blush" Atterberry, Max Wolfgang, 24, R.Tee<br/>
                                    편곡 24, R_Tee
                                </span>
                            </div>
                            <div className={styled4.albumlist}>
                                <h3>6. The Happiest Girl</h3>
                                <span>작사 Teddy Sinclair, Willy Sinclair, Paro<br/>
                                    작곡 Teddy Sinclair, Willy Sinclair, Paro, 24<br/>
                                    편곡 24, Nohc
                                </span>
                            </div>
                            <div className={styled4.albumlist}>
                                <h3>7. Tally</h3>
                                <span>작사 Nat Dunn, David Phelan, Alex Oriet, Brian Lee, Soraya LaPread<br/>
                                    작곡 Nat Dunn, David Phelan, Alex Oriet, Brian Lee, Soraya LaPread, 24<br/>
                                    편곡 24
                                </span>
                            </div>
                            <div className={styled4.albumlist}>
                                <h3>8. Ready For Love</h3>
                                <span>작사 TEDDY, VVN<br/>
                                    작곡  TEDDY, VVN, 24, KUSH, Bekuh BOOM<br/>
                                    편곡 24
                                </span>
                            </div>
                        </div>
                        
                    
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ArtistDetailMainBp;