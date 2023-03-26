import styled6 from "../../css/ArtistDetailAbout_csb.module.css";
import YouTube from 'react-youtube';


const ArtistDetailAbout_csb= () => {

    return(
        <>
            <div style={{overflow:'hidden', marginTop:'100px'}}>
                <div style={{float:'left', marginLeft:'50px'}}>
                    <img style={{width:'455px', height:'455px', boxShadow:'2px 6px 9px 0px rgb(0 0 0 / 25%)'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/chaesoobin_profile2.jpeg"></img>
                    <div style={{fontFamily:'Noto Sans KR, sans-serif', fontSize:'18px', marginTop:'20px', lineHeight:'30px'}}>
                        <div style={{fontFamily:'Noto Serif KR, sans-serif',fontSize:'19px', fontWeight:'900'}}>채수빈</div>
                        <div>1994. 7. 10</div>
                    </div>
                </div>
                <div style={{float:'left', marginLeft:'80px', marginTop:'180px'}}> 
                    <div style={{fontFamily:'Noto Serif KR, sans-serif', fontSize:'19px', fontWeight:'600', marginBottom:'10px'}}>
                        ACTOR
                    </div>
                    <div style={{fontFamily:'Noto Serif KR, sans-serif', fontSize:'30px', fontWeight:'900', marginBottom:'40px'}}>
                        CHAE SOO BIN
                    </div>
                    <div style={{fontFamily:'Noto Sans KR, sans-serif', fontSize:'15px', lineHeight:'30px'}}>
                        2013년 11월 29일에 <br/>
                        연극 '그와 그녀의 목요일'을 통해 배우로서 데뷔했다. <br/><br/>

                        데뷔 초기에는 많은 CF를 통해 얼굴을 알렸고<br/>
                         2014년 광고계의 블루칩으로 급부상하면서 <br/>
                         2015년까지 2년만에 무려 13편의 광고에 등장했다. <br/><br/>

                        이후 MBC 단막극 '원녀일기'와 KBS2 미니시리즈 '스파이'를  <br/>
                        통해 연기력을 인정받았으며, 떠오르는 신인 배우로 주목받았다.<br/><br/>

                        2015년 KBS2 드라마 '파랑새의 집'에서 <br/>
                        한은수 역을 통해 주연급 배우로 발돋움하게 된다. <br/>
                        연기 활동을 시작한지 1년이 채 되지 않은 신인 배우가  <br/>
                        주말 드라마 주연으로 발탁된 파격적인 캐스팅이었다. <br/>
                        이후 탄탄한 연기력을 인정 받아 에이판 스타 어워즈, <br/>
                        KBS 연기대상 여자 신인 연기상을 수상했다.
                    </div>
                </div>
                <div className={styled6.side}>
                    <div className={styled6.sidebar}>
                        02
                        <span> CHAE SOO BIN</span>
                    </div>
                </div>
            </div>
            <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', margin:'100px 0'}}>
            <div style={{fontFamily:'Noto Serif KR, sans-serif', display:'flex', fontSize:'20px',fontWeight:'900',overflow:'hidden', width:'900px', marginBottom:'30px'}}>
                    <div style={{float:'left'}}>VIDEO</div>
                </div>
                <div style={{ width:'900px', height:'500px'}}>
                    <YouTube 
                    //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
                                
                    videoId={"zoADCaf9G58"}
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
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:'70px', marginBottom:'70px'}}>
                <div style={{fontFamily:'Noto Serif KR, sans-serif', display:'flex', fontSize:'20px',fontWeight:'900',overflow:'hidden', width:'900px'}}>
                    <div style={{float:'left'}}>DRAMA</div>
                </div>
                <div className={styled6.chaesoobin_img} style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <div>
                        <img style={{width:'284px', height:'244px', boxShadow:'2px 6px 9px 0px rgb(0 0 0 / 25%)'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/chaesoobin_bluebird.jpg"></img>
                    </div>
                    <div>
                        <img style={{width:'284px', height:'244px', boxShadow:'2px 6px 9px 0px rgb(0 0 0 / 25%)'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/chaesoobin_fox.jpg"></img>
                    </div>
                    <div>
                        <img style={{width:'284px', height:'244px', boxShadow:'2px 6px 9px 0px rgb(0 0 0 / 25%)'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/chaesoobin_history.jpg"></img>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ArtistDetailAbout_csb;