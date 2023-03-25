import { Fragment } from "react"
import { Outlet } from "react-router-dom";
import styled from "./css/y4j_layout.module.css";

const Header = () => {
        
     {/* popper.js  */}
     <script src="https://unpkg.com/@popperjs/core@2"></script>
     {/* bootstrap  */}
     {/* css링크  */}
     <link to="/css/bootstrapcss/bootstrap.min.css"></link>
     {/* 부트스트랩 테마가 필요하면 이쯤 추가 */}
     {/* js링크  */}
     <script src="/js/bootstrapjs/bootstrap.min.js"></script>

    return (
        <Fragment>
            {/* 헤더 만드는 중 */}
            <div className={styled.header1_user_bar_box}>
                <div className={styled.header1_user_bar}>
                    <ul className={`${styled.main_header_inner} ${styled.main_header_inner2}`}>
                        <li className={styled.header_middle_user}>
                        <a href="/user/user_login">
                            <img data-bs-toggle="tooltip" data-bs-placement="" title="LOGIN" src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/loginPassword.png"/>
                            {/* <span>LOGIN</span> */}
                        </a>
                        </li>
                        <li className={styled.header_middle_user}>
                        <a href="/admin/admin_join">
                            <img data-bs-toggle="tooltip" data-bs-placement="" title="JOIN" src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/loginJoin.png"/>
                            {/* <span>JOIN</span> */}
                        </a>
                        </li>
                        <li className={styled.header_middle_user}>
                        <a href="/message">
                            <img data-bs-toggle="tooltip" data-bs-placement="" title="MY PAGE" src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/loginMember.png"/>
                            {/* <span>MY PAGE</span> */}
                        </a>
                        </li>
                        <li>{/* 여기 로그인 했을 때 구입 가능하기에 회원인지 여부 확인 하기 위한...! */}
                        <div>회원 아이디</div>
                        </li>
                        </ul>
                </div>
            </div>
                <div className={styled.header1}>
                    <div className={styled.header1_bottom}>
                        <div className={styled.header_main}>{/* 헤더 상단 메뉴바 */}
                        <div className={styled.header_main_menu}>
                            <ul className={styled.header_main_menu_bar}>
                                    <li>
                                        <span className={styled.menu_bar_name}><a href="#">COMPANY</a></span>
                                        <ul className={styled.menu_bar1}>
                                        <li><span><a href="#">ABOUT Y4J</a></span></li>
                                        <li><span><a href="#">HISTORY</a></span></li>
                                        <li><span><a href="#">CONTACT</a></span></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className={styled.menu_bar_name}><a href="#">ENTERTAINER</a></span>
                                        <ul className={styled.menu_bar1}>
                                            <li><span><a href="#">NEWJEANS</a></span></li>
                                            <li><span><a href="#">BLACKPINK</a></span></li>
                                            <li><span><a href="#">IVE</a></span></li>
                                            <li><span><a href="#">LEE DOHYUN</a></span></li>
                                            <li><span><a href="#">CHAE SOOBIN</a></span></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className={styled.menu_bar_name}><a href="/product/productList">PRODUCTION</a></span>
                                        <ul className={styled.menu_bar1}>
                                        <li><span><a href="/product/NEWJEANS">NEWJEANS</a></span></li>
                                        <li><span><a href="/product/BLACKPINK">BLACKPINK</a></span></li>
                                        <li><span><a href="/product/IVE">IVE</a></span></li>
                                        <li><span><a href="/product/LEEDOHYUN">LEE DOHYUN</a></span></li>
                                        <li><span><a href="/product/CHAESOOBIN">CHAE SOOBIN</a></span></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className={styled.menu_bar_name}><a href="#">AUDITION</a></span>
                                        <ul className={styled.menu_bar1}>
                                            <li className={styled.menu_bar_content}>AUDITION</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* 메뉴 상단바 y4j 로고 */}
                        <div className={styled.header_main_menu_logo}>
                            <div className={styled.logo}>
                                <a href="">
                                <img src=""/>
                            </a>
                            </div>
                        </div>
                        </div>{/* 헤더 상단 메뉴바 끝 */}
            </div>

            <section className={styled.fakeScreen}>
                <Outlet/>
            </section>


            <footer>
            <div className={styled.footer_outer}>
                    <div className={styled.footer_inner}>
                        <div className={styled.footer_left}>
                            <img src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/y4j_logo_black.png"/>
                        </div>
                        <div>
                            <div>개인정보 취급 방침 ⎮ 이용약관 ⎮ 고객센터/문의하기</div>
                            <div>서울시 강남구 테헤란로 7길 7 ⎮ TEL. 02-123-4567 ⎮ FAX. 02-345-6789</div>
                            <div className={styled.footer_left2_div3}>COPYRIGHT ⓒ Y4J ENTTERTAINMENT All RIGHTS RESERVED</div>
                        </div>
                        <div className={styled.footer_right}>
                            <span>개인정보처리방침</span>
                            <span>▼ 관련 사이트</span>
                        </div>
                    </div>
            </div>
            </footer>
        </Fragment>
    )
}

export default Header;