import { Fragment, useEffect } from "react";
import styled1 from './css/Y4J_contact.module.css';
import Tab from "./Tab";

// 스크립트로 카카오 api 심어서 가져오면 window 전역 객체에 들어가게 되는데 함수형 컴포넌트는 바로 인지 못 함
const {kakao} = window;

const Y4J_contact = () => {
   
    // 카카오 맵 api div에 넣는 함수
    useEffect(()=>{
		const container = document.getElementById("map");
		const options = {
			center: new kakao.maps.LatLng(37.4996, 127.0305),
			level: 4
		};

		const map = new kakao.maps.Map(container, options);

        //마커가 표시될 위치
        const markerPosition = new kakao.maps.LatLng(37.4996, 127.0305);

        //마커 생성
        const marker = new kakao.maps.Marker({
            position:markerPosition
        });

        //마커가 지도 위에 표시되도록 설정
        marker.setMap(map);
    },[])
	


    return(
        <Fragment>
            <Tab/>
            <div className={styled1.addressBox}>
                <div className={styled1.addressWrap} style={{marginTop:'70px', marginBottom:'50px'}}>

                    <div >
                    <p className={styled1.company}>
                        Y4J CENTER
                    </p>
                    </div>

                    <div>
                    <p className={styled1.companyContent1} >
                        <p>
                            <img style={{width:'14px', height:'16px', marginRight:'10px'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/map.png"/>
                        </p>
                    
                            서울시 강남구 테헤란로 7길 7 (역삼동 에스코빌딩 6층) <br/>
                            7 Teheran-ro 7-gil, Gangnam-gu, Seoul, Republic of Korea
                     
                     </p>
                    
                    
                    </div>

                    <div style={{display:'flex', flexDirection:'row'}}>
                        <p>
                            <img style={{width:'13px', height:'14px', marginRight:'10px', paddingTop:'1px'}} src="/https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/telephone.png"/>
                        </p>
                        <p className={styled1.companyContent} >
                            02-561-1911
                        </p>
                    </div>
                
                </div>
            </div>

        
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div style={{padding:'20px', border:'1px solid  #646b76a1', boxShadow: '0.5px 0.5px 0px 1px #646b76a1'}}>
                    <div id="map" style={{width:'950px', height:'500px'}}>
                        {/* 여기 안에 카카오 맵 API 삽입 */}
                    </div>
                </div>
            </div>


            {/* 글로벌 지사 주소 및 연락처 */}
            <div style={{marginTop:'50px'}}>
                   
                <p style={{display:'flex', justifyContent:'center'}} className={styled1.company}>
                    GLOBAL Y4J
                </p>
           
            </div>

            <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
        
            <div className={styled1.addressBox1} >
                <div className={styled1.global} style={{paddingLeft: '25px', paddingBottom:'20px'}}>
                    <div style={{display:'flex',padding:'7px 0'}}>
                        <p>
                            <img style={{width:'12px', height:'14px', marginRight:'10px', paddingTop:'1px'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/map.png"/>
                        </p>
                        <p style={{fontFamily:'Noto Sans KR, sans-serif'}}>
                            <p style={{fontWeight:'630', color:'black', fontSize:'17px'}}>
                               JAPAN (TOKYO)
                             </p>
                                 Japan Seven Minami-aoyama Building 5F, <br/>
                                 4-1-6 Minami-aoyama, Minato-ku. Tokyo 107-0062 Japan 
                        </p>
                    </div>
                    {/* 일본 전화번호 */}
                     <p style={{marginTop:'10px',fontFamily:'Noto Sans KR, sans-serif'}}>
                      <p>
                        </p><img style={{width:'12px', height:'14px', marginRight:'10px', paddingTop:'1px'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/telephone.png"/>
                        +81-03-9697-9395
                    </p>
                    
                </div>
                <div  className={styled1.global} style={{padding:'5px 0', paddingLeft:'15px'}}>
                    <div style={{display:'flex'}}>
                        <p>
                          <img style={{width:'12px', height:'14px', marginRight:'10px', paddingTop:'1px'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/map.png"/>
                         </p>
                         <p style={{fontFamily:'Noto Sans KR, sans-serif'}}>
                             <p style={{fontWeight:'630', color:'black', fontSize:'17px'}}>CHINA (BEIJING)</p>
                         
                                 China C11-106, Zhengdong Group Corp. Yard,<br/>
                                 No.4 Jiu Xianqiao Street, Chaoyang District, Beijing 100102, China
                         
                        </p>
                    </div>
                    
                    <div>
                    {/* 중국 전화번호 */}
                        <p style={{marginTop:'10px', display:'flex'}}>
                            <p><img style={{width:'13px', height:'14px', marginRight:'10px', paddingTop:'1px'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/telephone.png"/></p>
                            <p style={{fontFamily:'Noto Sans KR, sans-serif'}}>
                             +86-10-8459-9463<br/>
                             +86-10-8459-9289<br/>
                             +86-10-8459-9290  
                            </p>
                         </p>   
                    </div>
              </div>
            </div>
                   
            </div>

          
            
       


            
          
        
        </Fragment>



)

}
export default Y4J_contact;