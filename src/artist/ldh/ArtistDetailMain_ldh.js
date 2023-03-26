import { Fragment } from "react"
import styled5 from "../../css/ArtistDetailMain_ldh.module.css";
import YouTube from 'react-youtube';



const ArtistDetailMain_ldh= () =>{




    return (
       
            <Fragment>
                <div  style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <div style={{marginTop:'50px', backgroundColor:'rgba(9, 63, 35, 0.262)', width:'900px'}}>     
                        <div>
                            <img src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/theGlory.jpeg" style={{width:'900px', height:'380px'}}></img>
                        </div>
                    {/* 이도현 더 글로리 메인 예고편 영상 태그 */}
                        <div style={{ width:'900px', height:'500px'}}>
                            <YouTube 
                            //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
                            
                            videoId={"dOp0oWFHUWw"}
                            //opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
                            
                            opts={{
                                width: "900",
                                height: "500",
                                playerVars: {
                                rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
                                modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                                },
                            }}
                            //이벤트 리스너 
                            onEnd={(e)=>{e.target.stopVideo(0);}}      
                            />
                        </div>
                    
                        {/* 이도현 더글로리 포스터 및 내용 */}
                    <div className={styled5.ldhMain}>
                            <div style={{position:'relative'}}>
                                <div style={{textAlign:'center'}}>
                                    <img style={{height: '580px', width:'400px'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/leedohyunPoster.jpg"/>
                                </div>
                            </div>
                        
            
                        <div className={styled5.ldhMain_content}>
            
                            <div style={{textAlign:'center' , boxShadow:'15px 15px 20px 0 #bdbcbc96', backgroundColor:'rgba(255, 255, 255, 0.878)',padding:'25px', marginBottom:'70px', width:'650px'}}>
                                <span style={{ fontWeight:'800', fontFamily:'Noto Serif KR, serif', color:'rgba(0, 0, 0, 0.633'}}>
                                    우리 같이 천천히 말라 죽어보자<br/>
                                    유년 시절 폭력으로 영혼까지 부서진 한 여자가 온 생을 걸어<br/>
                                    치밀하게 준비한 처절한 복수와 그 소용돌이에 빠져드는 이들의 이야기
                                </span>
                            </div>
                            <div  style={{textAlign:'center'}}>
                                <div>
                                    <span>
                                        김은숙 작가의 넷플릭스 오리지널 시리즈
                                    </span>
                                </div>
                                <span>
                            
                                    <br/>
                                    공개 직후 한국을 비롯 다수의 아시아권 국가에서 1위를 차지했으며, <br/>
                                    전세계 순위에서 주간 3위를 찍은 2023년 2월 현재 넷플릭스 최대 흥행작이며, <br/>
                                    2018년부터 이어지는 메가히트 복수극 계보를 6년째 잇고 있다는 평가를 받는다.
                                </span>
                            </div>
                    
                        </div>
                    </div>
                    {/* 더글로리 이도현 역할 설명 */}
                    <div>
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
                            <img src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/leedohyun_theglory.gif" style={{width:'600px', height:'350px'}}></img>
                            <span style={{marginTop:'20px ', fontWeight:'700', fontFamily:'Noto Serif KR, serif'}}>더 글로리 장면 中 </span>
                        </div>
                        <div>
                            <div style={{ fontFamily:'Noto Serif KR, serif', fontWeight:'700',lineHeight:'35px', textAlign:'center', color:'rgba(0, 0, 0, 0.833', fontSize:'17px', margin: '50px 0'}}>
                                넷플릭스 오리지널 시리즈 김은숙 작가의 <br/>
                                첫 장르물 '더 글로리'에서 서울주병원의 병원장 아들로 <br/>
                                소탈하며 밝고 다정한 성품을 지닌 인간미 넘치는 <br/>
                                성형외과의사 ‘주여정’ 역을 맡았다. <br/><br/>

                                어느날 아버지가 메스로 살린 환자에게 되려 메스로 죽임을 당하게 되면서, <br/>
                                선의가 악으로 돌아온 모순적인 상황을 겪은 후 의사의 윤리와 인간으로서의 <br/>
                                감정충돌로 자기안의 싸움을 하며 깊은 아픔과 분노를 참고 견디며 살아가는 인물이다. <br/>
                                극중 문동은을 사랑하게 되면서 그녀의 감춰진 상처를 본 뒤 망나니를 자처하고 숨겨뒀던 <br/>
                                복수심을 다짐하며, 어두운 내면을 드러내는 이중적인 캐릭터를 섬세하게 소화했다.
                            </div>
                        </div>
                    </div>
              
               </div>
             </div>
         </Fragment>
        )
    }

export default ArtistDetailMain_ldh;