import { Fragment } from 'react';
import styled from './css/About_Y4J.module.css';
import Tab from './Tab';


const About_Y4J = () => {





    return(
        <Fragment>
          <Tab/>
            
            {/* Y4J 로고 넣기 */}
            <div className={styled.logo}>
                <img style={{width:'320px', height: '220px'}} src='https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/y4j_logo.png'></img>
            </div>

                   
            <div className={styled.imgList}>
                <ul>
                    
                <li><img style={{width:'240px', height:'180px'}} src='https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/newjeans.jpg'/></li>
                <li><img style={{width:'240px', height:'180px'}} src='https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/IVE.jpg'/></li>
                <li><img style={{width:'240px', height:'180px'}} src='https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/BlackPink.jpg'/></li>
                </ul>
            </div>

        {/* Y4J 내용 */}
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div className={styled.content}>
                <div className={styled.content1}>
                    <p>
                    Y4J엔터테인먼트가 추구해 온 가치이자 목표입니다.
                    Y4J엔터테인먼트는 이를 모토로 엔터테인먼트 산업의 변화를 선도하는 기업이 되기 위해 최선을 다 해왔습니다.
                    <br/>
                    <br/>
                    </p>
                </div>
                
                <div className={styled.content1}>
                    <p>
                    Y4J엔터테인먼트는 아시아 최고 프로듀서 김정민을 필두로 국내에서 NewJeans, IVE, BlackPink로 여자아이돌 열풍을 일으키고 이도현과 채수빈은 각각 중국과 일본에서 활발한 활동을 하여 현재 최고의 엔터테인먼트로 자리 잡았습니다.
                    <br/>
                    <br/>
                     사업 영역에서는 글로벌 거점에 설립한 Y4J USA, Y4J JAPAN, Y4J CHINA를 통해 전세계 음악 시장과 소통하며 K-POP의 영향력 확대를 선도해왔습니다. 
                    뿐만 아니라 Y4J Three Sixty를 설립해 IP 관련 사업 확장을 위한 플랫폼 비즈니스를 전개하고 있습니다.
                    <br/>
                    <br/>
                     더불어 엔터테인먼트 산업을 리드하는 창의적, 능동적 인재의 발굴과 양성에 힘쓰며 선도하는 기업(Leading Company), 존경받는 기업(Respected Company)이라는 핵심 가치체계 아래 'Leader In Entertainment'의 가치와 목표를 실현중입니다.
                    </p>
                    
                    <br/>
                    <p>
                    Y4J엔터테인먼트는 회사 경영을 투명하게 공개하며 법과 도덕, 사회적 규범을 준수합니다. 이를 통해 엔터테인먼트 산업의 리더로서 책임과 의무를 다하는데 앞장서고 회사의 신뢰를 고취시킬 수 있도록 노력하겠습니다.
                    </p>
                </div>
            </div>
            </div>
      
        

            
        </Fragment>



)

}
export default About_Y4J;