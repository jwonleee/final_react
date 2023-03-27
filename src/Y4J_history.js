import { Fragment } from "react";
import Tab from "./Tab";
import styled2 from "./css/Y4J_history.module.css";


const Y4J_history = () => {



    return(
        <Fragment>
            <Tab/>

            <div className={styled2.historyTitle}>
                <p>history</p>
            </div>

        <div className={styled2.historyWrap}>
           <div className={styled2.historyBox}>
           <div className={styled2.historyList}>
                 <div>
                      <img style={{width:'220px', height:'280px', boxShadow:'0.5px 0.5px 0px 0.7px  rgba(73, 71, 71, 0.599)'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/leedohyun2.jpg"></img>
                
                    </div>

                     <div className={styled2.combackDate1}>
                        <span>2020.SEP.28</span>
                      </div>

                     <div>
                         <span className={styled2.singer1}>Lee Do Hyun</span>
                     </div>

                     <div className={styled2.content1}>
                        <span>더블유 코리아 10월호 표지 모델</span>
                     </div>

                </div>




                <div className={styled2.historyList}>
                    <div>
                      <img style={{width:'220px', height:'280px', boxShadow:'0.5px 0.5px 3px 0.7px  rgba(73, 71, 71, 0.599)'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/blackpink_pinkvenom1.jpeg"></img>
                
                    </div>

                     <div className={styled2.combackDate1}>
                        <span>2022.Aug.18</span>
                      </div>

                     <div>
                         <span className={styled2.singer1}>Black Pink</span>
                     </div>

                     <div className={styled2.content1}>
                        <span>Pink Venom 음원 공개 D-1</span>
                     </div>

                </div>

                <div className={styled2.historyList}>
                    <div>
                      <img style={{width:'220px', height:'280px', boxShadow:'0.5px 0.5px 0px 0.7px  rgba(73, 71, 71, 0.599)'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/blackpink_pinkvenom2.jpeg"></img>
                
                    </div>

                     <div className={styled2.combackDate1}>
                        <span>2022.Aug.19</span>
                      </div>

                     <div>
                         <span className={styled2.singer1}>Black Pink</span>
                     </div>

                     <div className={styled2.content1}>
                        <span>Pink Venom 음원 공개 D-day</span>
                     </div>

                </div>


            </div>

            
         </div>
         
        {/*2단 시작  */}
         <div className={styled2.historyWrap}>
            {/* 아이브 afterlike 2022년 8월*/}
           <div className={styled2.historyBox1}>
                <div className={styled2.historyList}>
                    <div>
                      <img style={{width:'220px', height:'280px', boxShadow:'0.5px 0.5px 2px 0.7px  rgba(73, 71, 71, 0.599)'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/afterlike4.svg"></img>
                
                    </div>

                     <div className={styled2.combackDate1}>
                        <span>2022.Aug.22</span>
                      </div>

                     <div>
                         <span className={styled2.singer1}>IVE</span>
                     </div>

                     <div className={styled2.content1}>
                        <span>After Like 음원 발매</span>
                     </div>

                </div>


                <div className={styled2.historyList}>
                    <div>
                      <img style={{width:'220px', height:'280px', boxShadow:'0.5px 0.5px 2px 0.7px  rgba(73, 71, 71, 0.599)'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/blackpink_shutdown.jpeg"></img>
                
                    </div>

                     <div className={styled2.combackDate1}>
                        <span>2022.SEP.16</span>
                      </div>

                     <div>
                         <span className={styled2.singer1}>Black Pink</span>
                     </div>

                     <div className={styled2.content1}>
                        <span>Shut Down 음원 발매</span>
                     </div>

                </div>

                <div className={styled2.historyList}>
                    <div>
                      <img style={{width:'220px', height:'280px', boxShadow:'0.5px 0.5px 3px 0.7px  rgba(73, 71, 71, 0.599)'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/ditto.jpeg"></img>
                
                    </div>

                     <div className={styled2.combackDate1}>
                        <span>2022.DEC.19</span>
                      </div>

                     <div>
                         <span className={styled2.singer1}>Newjeans</span>
                     </div>

                     <div className={styled2.content1}>
                        <span>Ditto 선공개</span>
                     </div>

                </div>


            </div>

            
         </div>

        {/* 3단 시작  */}
         <div className={styled2.historyWrap}>
           <div className={styled2.historyBox2}>

                <div className={styled2.historyList}>
                    <div>
                      <img style={{width:'220px', height:'280px', boxShadow:'0.5px 0.5px 2px 0.7px  rgba(73, 71, 71, 0.599)'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/soobin_drama.jpg"></img>
                
                    </div>

                     <div className={styled2.combackDate1}>
                        <span>2022.DEC.23</span>
                      </div>

                     <div>
                         <span className={styled2.singer1}>Chae Soo-bin</span>
                     </div>

                     <div className={styled2.content1}>
                        <span>더 패뷸러스 넷플릭스 공개</span>
                     </div>

                </div>

                <div className={styled2.historyList}>
                    <div>
                      <img style={{width:'220px', height:'280px', boxShadow:'0.5px 0.5px 0px 0.7px  rgba(73, 71, 71, 0.599)'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/omg.jpeg"></img>
                
                    </div>

                     <div className={styled2.combackDate1}>
                        <span>2023.JAN.2</span>
                      </div>

                     <div>
                         <span className={styled2.singer1}>Newjeans</span>
                     </div>

                     <div className={styled2.content1}>
                        <span>OMG 음원 발매</span>
                     </div>

                </div>


                <div className={styled2.historyList}>
                    <div>
                      <img style={{width:'220px', height:'280px', boxShadow:'0.5px 0.5px 3px 0.7px  rgba(73, 71, 71, 0.599)'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/soobin.jpeg"></img>
                
                    </div>

                     <div className={styled2.combackDate1}>
                        <span>2023.JAN.28</span>
                      </div>

                     <div>
                         <span className={styled2.singer1}>Chae Soo-bin</span>
                     </div>

                     <div className={styled2.content1}>
                        <span>세익스피어 인 러브 공연 시작</span>
                     </div>

                </div>

             

            </div>

            
         </div>


            
        </Fragment>



)

}
export default Y4J_history;