import styled6 from "../../css/ArtistDetailAbout_ldh.module.css";



const ArtistDetailAbout_ldh= () => {

    return(
        <>
        <div style={{display:'flex', flexDirection:'column'}}>
            <div className={styled6.artistAboutLee_page}>
                {/* 이도현 프로필 사진 */}
                <div className={styled6.artistAboutLee}>
                    <div className={styled6.artist_img_shadow} ></div>
                    <div className={styled6.artist_img_box} >
                        <img style={{height:'580px', width:'440px'}} src="/img/leedohyun4.jpg"/>
                    </div>
                </div>
                {/* 이도현 활동내역 */}
                <div className={styled6.artistAboutLee_activity}>
                    <div className={styled6.artistAboutLee_name_box}>
                        <p className={styled6.artistAboutLee_name_eng}>LEE<br/> DO<br/> HYUN</p>
                        <p className={styled6.artistAboutLee_name_kor}>이 도 현</p>
                    </div>
                    <div>
                        <span className={styled6.artistAboutLee_birth}>1995.4.11</span>
                        <div className={styled6.artistAboutLee_drama}>
                            <li style={{fontSize:'16px', fontFamily:'Noto Sans KR, sans-serif'}}>2017  슬기로운 감빵생활 [tvN]</li>
                            <li style={{fontSize:'16px', fontFamily:'Noto Sans KR, sans-serif'}}>2018  서른이지만 열일곱입니다 [SBS] [tvN]</li>
                            <li style={{fontSize:'16px', fontFamily:'Noto Sans KR, sans-serif'}}>2018  일단 뜨겁게 청소하라 [JTBC]</li>
                            <li style={{fontSize:'16px', fontFamily:'Noto Sans KR, sans-serif'}}>2019  호텔 델루나 [tvN]</li>
                            <li style={{fontSize:'16px', fontFamily:'Noto Sans KR, sans-serif'}}>2019  드라마 스페셜 - 스카우팅 리포트 [KBS2]</li>
                            <li style={{fontSize:'16px', fontFamily:'Noto Sans KR, sans-serif'}}>2020  18어게인</li>
                            <li style={{fontSize:'16px', fontFamily:'Noto Sans KR, sans-serif'}}>2020  스위트홈 [NETFLEX]</li>
                            <li style={{fontSize:'16px', fontFamily:'Noto Sans KR, sans-serif'}}>2021  오월의 청춘 [KBS2]</li>
                            <li style={{fontSize:'16px', fontFamily:'Noto Sans KR, sans-serif'}}>2021  멜랑꼴리아 [tvN]</li>
                            <li style={{fontSize:'16px', fontFamily:'Noto Sans KR, sans-serif'}}>2022  더 글로리 시즌 1 [NETFLEX]</li>
                            <li style={{fontSize:'16px', fontFamily:'Noto Sans KR, sans-serif'}}>2023  더 글로리 시즌 2 [NETFLEX]</li>
                        </div>
                    </div>
                    <div className={styled6.side1}>
                        <div className={styled6.sidebar1}>
                            01
                            <span> LEE DO HYUN</span>
                        </div>
                    </div>
                </div>
              
             </div>
            <div className={styled6.galleryBox} style={{ marginTop:'30px', display:'flex', justifyContent:'center'}}>
                <div className={styled6.artistAboutLee_gallery_img}>
                    <div style={{margin:'50px'}}>
                        <p className={styled6.artistAboutLee_gallery}>Gallery</p>
                    </div>
               
                    <div style={{display:'flex', flexDirection:'column'}}>
                        {/* 갤러리 1단 */}
                        <div style={{display:'flex', flexDirection:'row'}}>
                            <div>
                                <img style={{width:'250px', height:'320px'}} src="/img/leedohyun8.jpg"></img>
                                <span className={styled6.gallery_plus}>
                                </span>
                            </div>
                            <div>
                                <img  style={{width:'250px', height:'320px'}} src="/img/leedohyun7.jpg"></img>
                            </div>
                            <div>
                                <img  style={{width:'250px', height:'320px'}} src="/img/leedohyun10.jpg"></img> 
                            </div>
                        </div>
                        {/* 갤러리 2단 */}
                        <div style={{display:'flex', flexDirection:'row'}}>
                            <div>
                                <img style={{width:'250px', height:'320px'}} src="/img/leedohyun13.jpg"></img>
                            </div>
                            <div>
                                <img  style={{width:'250px', height:'320px'}} src="/img/leedohyun12.jpg"></img>
                            </div>
                            <div>
                                <img  style={{width:'250px', height:'320px'}} src="/img/leedohyun11.jpg"></img> 
                            </div>
                        </div>
                        {/* 갤러리 3단 */}
                        <div style={{display:'flex', flexDirection:'row'}}>
                            <div>
                                <img style={{width:'385px', height:'280px'}} src="/img/leedohyun15.jpg"></img>
                            </div>
                            <div>
                                <img  style={{width:'385px', height:'280px'}} src="/img/leedohyun16.jpg"></img>
                            </div>
                            
                        </div>
                    </div>
                </div>
               
            </div>
            {/* 시대의 청개구리 이도현 */}
            <div style={{display:'flex', marginTop:'30px', flexDirection:'column', marginBottom:'60px'}}>
                <div style={{display:'flex', marginTop:'60px', flexDirection:'row'}}>
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <img style={{width:'630px', height:'410px'}} src="/img/leedohyun_sexy.gif"/>
                        <span style={{textAlign:'center', width:'630px', height:'50px', lineHeight:'50px', backgroundColor:'rgba(124, 64, 10, 0.268)', fontFamily:'Noto Serif KR, serif', fontSize:'16px', fontWeight:'400' }}>오월의 청춘 - 황희태역</span>
                    </div>
                    <div>
                        <div style={{border:'1px solid black', padding:'14px', margin: '0 15px 15px 15px', boxShadow: '13px 3px 20px 0 #bdbcbc96', backgroundColor:'rgba(110, 30, 5, 0.128)'}}>
                            <span style={{fontFamily:'Noto Sans KR, serif', fontSize:'15px', lineHeight:'24px'}}>
                                ”이도현은 지금 한국에서 가장 아이코닉한 배우 중 한명이다.”<br/>
                                이도현의 매력은 단순히 ‘잘생겼다’거나 ‘연기를 잘한다’와 <br/>
                                같은 말로는 설명하기 어렵다. 카메라 앵글에 들어와 있으면 <br/>
                                계속 찍고 싶고, 드라마를 보고 있으면 계속 눈길이 간다. <br/>
                                옆에서 본 이도현은 긴 호흡을 가진 배우다. <br/>
                                게다가 순발력과 유연함까지 있다. 연출자로서 감사한 부분이다.
                                <br/>
                                <br/>
                                <p style={{fontFamily:'Noto Sans KR, serif', fontSize:'15px' }}>
                                    「창간 27주년 씨네21이 주목한 남자배우, 이도현을 만나다.」中
                                    송민엽 감독 
                                </p>
                            </span>
                        </div>
                        <div style={{border:'1px solid black', padding:'14px', margin: '0 15px 15px 15px', boxShadow: '13px 3px 20px 0 #bdbcbc96', backgroundColor:'rgba(110, 30, 5, 0.128)'}}>
                            <span style={{fontFamily:'Noto Sans KR, serif', fontSize:'15px', lineHeight:'24px'}}>
                                '이도현의 단단한 연기, 멜로부터 시대적 공기까지'<br/>
                                지금의 청춘 세대가 겪어보지 않은 당대의 감성을 <br/>
                                연기로 전한다는 건 그래서 쉬운 일은 아니다. <br/>
                                황희태역할을 연기하는 이도현은 확실히 멜로에서부터 <br/>
                                당대의 시대적 아픔까지 머금은 이 인물을 제대로 표현해내고 있다.
                                <br/>
                                <br/>
                                <p style={{fontFamily:'Noto Sans KR, serif', fontSize:'15px'}}>
                                    「80년대 감성 자극 이도현 캐스팅 신의 한 수 되나」中
                                    대중문화평론가 정덕현
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styled6.bluefrog}>
                    <p>겉은 능청, 어두운 내면가진 '시대의 청개구리'</p>
                    <span>
                      KBS 미니 시리즈 "오월의 청춘"에서 편견들을 깨부수기 위해 노력하는 선천적 청개구리 의대생 '황희태' 역에 <br/>
                      0순위 캐스팅 되어 첫 지상파 드라마 주연으로 발탁되었다. 혼외자로 태어나 온갖 멸시와 구박을 받고 자랐지만 <br/>
                     '진흙 속 피어난 꽃'처럼 역경 속에서도 삶의 의미를 찾고야 마는 소신 있으면서도 애틋한 순애보 캐릭터를 <br/>
                      섬세한 연기와 깊이 있는 분위기로 완벽하게 소화해냈다는 호평을 받았다. 해당 역으로 대체불가 ‘차세대 멜로킹’의 <br/>
                      타이틀을 얻게 된 이도현은 제57회 백상예술대상에서 ‘청춘대표’로 특별무대를 선보였으며,  <br/>
                      2021년 KBS 연기대상에서 최우수 연기상을 수상했다.
                    </span>
                </div>
            </div>
        </div>   

          
                {/* <div>
                     <img style={{height:'590px', width:'450px'}} src="/img/leedohyun7.jpg"/>
                </div> */}

        </>
    )
}

export default ArtistDetailAbout_ldh;