import { Fragment } from "react"
import styled5 from "../../css/ArtistDetailMain_ive.module.css";
import YouTube from 'react-youtube';

const ArtistDetailMain_ive= () =>{


    return (
        <Fragment>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>     
                
                <div className={styled5.iveMain}>
                    <div style={{position:'relative'}}>
                        <div style={{textAlign:'center'}}>
                            <img style={{height: '720px', width:'1100px'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/ive_all2.jpg"/>
                        
                        </div>
                    </div>
                
               {/* 아이브 뮤비 영상 태그 */}
                <div>
                    <YouTube 
                    //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
                    
                    videoId={"F0B7HDiY-10"}
                    //opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
                    
                    opts={{
                        width: "1100",
                        height: "640",
                        playerVars: {
                        rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                        modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                        },
                    }}
                    //이벤트 리스너 
                    onEnd={(e)=>{e.target.stopVideo(0);}}      
                    />
                </div>
           
            {/* 아이브 앨범 내용 */}
                <div className={styled5.iveMain_content}>
                    <div style={{textAlign:'center'}}>
                        <span style={{ fontWeight:'570', color:'rgba(255, 255, 255, 0.704)'}}>
                        ‘After LIKE’는 딥하우스 기반의 세련된 리듬에 클래식하고 <br/>
                        개성 강한 훅과 레이, 가을의 파워 있는 랩이 어우러진 곡이다. <br/>
                        사랑 앞에 그 누구보다 솔직하고 당찬 소녀들을 그린 가사로 <br/>
                        내가 느끼는 감정들의 주체가 자기 자신임을 잊지 말고 나의 <br/>
                        감정에 당당하자는 메시지를 담았다.
                        <br/>
                        <br/>
                        ‘My Satisfaction’은 락 감성이 녹아있는 중독성 있는 멜로디가 특징인 <br/>
                        팝 펑크 넘버로 다양한 비트 위에 강력한 메탈 사운드와 아이브 멤버들의 <br/>
                        인상적인 보컬이 어우러져 압도적인 분위기를 자아내고 있다.

                        </span>
                    </div>
                </div>

                <div>
                    <div style={{marginTop:'100px'}}>
                        <img style={{width:'350px', height:'400px'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/afterlike.jpeg"></img>
                    </div>
                </div>

                <div style={{width:'1100px', textAlign:'center', marginBottom:'100px'}}>

                    <div style={{marginTop:'100px', display:'flex',flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        {/* 1단 */}
                        <div style={{flexBasis:'40%'}}>
                            <div className={styled5.albumlist_ive}>
                                <h3>1. After LIKE <p>TITLE</p></h3>
                                <span>작사 서지음, 마미손<br/>
                                     작곡 RYAN JHUN, Anders Nilsen, Andrè Jensen, 
                                        Iselin Solheim, FEKARIS DINO, CAPERREN FREDERICK J<br/>
                                    편곡 RYAN JHUN, Anders Nilsen, AVIN (아빈), SLAY
                                </span>
                            </div>
                            <div className={styled5.albumlist_ive}>
                                <h3>2. My Satisfication</h3>
                                <span>작사 이스란<br/>
                                    작곡 RYAN JHUN, Josh Cumbee, Afshin Salmani, Nat Dunn, Ilan Kidron, Anna Timgre, Justin Reinstein<br/>
                                    편곡 RYAN JHUN, Josh Cumbee, Afshin Salmani, 
                                    <br/>AVIN (아빈), SLAY
                                </span>
                            </div>
                       
                        </div>
                        
                    
                    </div>
                </div>
                {/* 아이브 1위 내역 - 표로 작성 */}
                <div style={{marginBottom:'100px'}}>
            
                        <ul style={{border:'3px solid  rgb(70, 248, 35)', display:'flex', flexDirection:'column', paddingLeft:'0', width:'700px'}}>
                            <li style={{padding:'20px', backgroundColor:' rgb(70, 248, 35)', color:"black"}}> 
                               After Like 주요 음원 차트 최고 순위
                            </li>
                            
                            {/* 멜론 */}
                            <li style={{padding:'10px 20px 20px 30px', marginBottom:'20px', display:'flex', flexDirection:'row'}}>
                                <div style={{color:"white", flexBasis:'33.3%'}}>
                                        <div>
                                            <img style={{width:'100px', height:'75px', paddingBottom:'7px'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/melon_logo.png"></img>
                                        </div>
                                        <div style={{ display:'flex', flexDirection:'column', lineHeight:'30px'}}>

                                            <span style={{color:"white", fontFamily:'Noto Serif KR, serif', fontSize:'18px'}}>TOP 100</span>
                                            <span style={{color:"white", fontFamily:'Noto Serif KR, serif', fontSize:'18px'}}>실시간 차트</span>
                                            <span style={{color:"white", fontFamily:'Noto Serif KR, serif', fontSize:'18px'}}>일간 차트</span>
                                            <span style={{color:"white", fontFamily:'Noto Serif KR, serif', fontSize:'18px'}}>주간 차트</span>
                                            <span style={{color:"white", fontFamily:'Noto Serif KR, serif', fontSize:'18px'}}>월간 차트</span>
                                        </div>
                                        <div style={{marginTop:'10px'}}>
                                            <span style={{color:"red"}}>1위</span>
                                        </div>
                           
                                </div>
                                 {/* 지니 */}
                                <div  style={{color:"white", flexBasis:'33%', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                                   
                                        <div>
                                            <img style={{width:'100px', height:'33.3px', marginBottom:'22px'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/genie_logo.png"></img>
                                        </div>
                                        <div style={{ display:'flex', flexDirection:'column', lineHeight:'30px'}}>
                                            <span style={{color:"white", fontFamily:'Noto Serif KR, serif', fontSize:'18px'}}>실시간 차트</span>
                                            <span style={{color:"white", fontFamily:'Noto Serif KR, serif', fontSize:'18px'}}>일간 차트</span>
                                            <span style={{color:"white", fontFamily:'Noto Serif KR, serif', fontSize:'18px'}}>주간 차트</span>
                                            <span style={{color:"white", fontFamily:'Noto Serif KR, serif', fontSize:'18px'}}>월간 차트</span>
                                        </div>
                                        <div style={{marginTop:'10px'}}>
                                            <span style={{color:"red"}}>1위</span>
                                        </div>

                                    
                                </div>    
                                {/* 벅스 */}
                                <div style={{color:"white", flexBasis:'33.3%', display:'flex', flexDirection:'column', paddingTop:'12px', marginRight:'15px'}}>
                             
                                        <div><img style={{width:'93px', height:'65px', marginBottom:'3px'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/bugs_logo.png"></img></div>
                                        <div style={{ display:'flex', flexDirection:'column', lineHeight:'30px'}}>
                                            <span style={{color:"white", fontFamily:'Noto Serif KR, serif', fontSize:'18px'}}>실시간 차트</span>
                                            <span style={{color:"white", fontFamily:'Noto Serif KR, serif', fontSize:'18px'}}>일간 차트</span>
                                            <span style={{color:"white", fontFamily:'Noto Serif KR, serif', fontSize:'18px'}}>주간 차트</span>
                                        </div>
                                        <div style={{marginTop:'10px'}}>
                                            <span style={{color:"red"}}>1위</span>
                                        </div>
                               
                                </div>
                            </li>

                        </ul>
                   
                    </div>
                </div>
          
           
         </div>
     </Fragment>
    )
}

export default ArtistDetailMain_ive;