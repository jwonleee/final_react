import styled5 from "../../css/ArtistDetailMain_newjeans.module.css";
import YouTube from 'react-youtube';

const ArtistDetailMain_newjeans= () =>{

    return (
        <>
            {/* 뉴진스 로고 태그 */}
            <div className={styled5.Main_nj_content}>
                <div style={{marginBottom:' 40px'}}>
                    <img style={{width:'900px', height:'500px'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/newjeans_logo.jpg" alt="뉴진스 로고"></img>
                </div>
              
               {/* 뉴진스 뮤비 영상 태그 */}
                <div >
                    <YouTube className={styled5.blackpinkMV}
                    //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
                    
                    videoId={"_ZAgIHmHLdc"}
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
           
            {/* 뉴진스 앨범 내용 */}
                <div className={styled5.Main_nj_content2}>
                    <div style={{textAlign:'center'}}>
                        {/* 디토 앨범 소개 */}
                        <span style={{ fontWeight:'570'}}>
                        선공개 곡 'Ditto'는 버니즈와 함께 맞는 첫 겨울을 위해 특별히 준비한 수록곡이다. <br/>
                        따뜻하고 포근한 Choir Pad 사운드와 Classical한 Old School Drum Break가 매력적인 곡으로,<br/>
                         Baltimore Club Dance Music 장르를 NewJeans만의 감성으로 재해석했다. <br/>
                         애틋함과 두근거림이 다양한 음악적 요소 속에 녹아있는데, 특히 곡의 시작과 함께 <br/>
                         등장하는 몽환적이면서도 독특한 허밍은 NewJeans의 겨울을 함축한다.
                        </span>
                        <br/>
                        <br/>
                        {/* omg 앨범 소개 */}
                        <span style={{ fontWeight:'570'}}>
                        타이틀 곡 'Omg'는 힙합 드럼 소스와 퍼커션을 기반으로, UK Garage 리듬과 <br/>
                        Trap 리듬을 오가며 만들어낸 통통 튀고 신나는 힙합 알앤비 곡이다. <br/>
                         NewJeans만의 트렌디한 음색을 Pop Vocal, Melodic Rap 등의 다양한 스타일 <br/>
                         속에서 표현해 내고 있어, 또 다른 개성과 매력을 확인해 볼 수 있다.
                        </span>

                    </div>
                </div>

                <div>
                    <div style={{marginTop:'100px'}}>
                        <img style={{width:'320px', height:'260px', boxShadow: '3px 2px 7px 0px rgba(128, 128, 128, 0.642)',marginRight:'50px'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/ditto.jpeg"></img>
                        <img style={{width:'320px', height:'260px', boxShadow: '3px 2px 7px 0px rgba(128, 128, 128, 0.642)'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/omg.jpeg"></img>
                    </div>
                </div>

                    {/* <div style={{marginTop:'100px', display:'flex',flexDirection:'row', justifyContent:'center', alignItems:'center'}}> */}
                   <div>

                         <div style={{display:'flex', justifyContent:'center', alignItems:'center', padding:'0 20px', marginBottom:'30px'}}>
                                
                             <div className={styled5.albumlist_nj}>
                                 <h3 className={styled5.omgName}>1. OMG <p>TITLE</p></h3>
                                 <span>작사 Gigi, Yiva, DimBERGM, 하니(HANNI)<br/>
                                       작곡 Jinsu Park, Ylva Dimberg, David Dawood<br/>
                                      편곡 Jinsu Park
                                </span>
                            </div>
                            <div className={styled5.albumlist_nj}>
                                <h3 className={styled5.dittoName}>2. DITTO</h3>
                                <span>작사 Ylva Dimberg, 조휴일, 우효, 민지<br/>
                                    작곡 250, Ylva Dimberg<br/>
                                   편곡 250
                                </span>
                            </div>
                        </div>
                           
                    </div>

            {/* 앨범 소개 사진 */}
            <div>
                <img src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/newjeans_content.png"></img>
            </div>
           
    </div>
        </>
    )
}

export default ArtistDetailMain_newjeans;