import { Fragment } from "react"
import { Outlet } from "react-router-dom";
import styled from "./css/y4j_layout.module.css";

const Header = () => {
    return (
        <Fragment>
            <div className={styled.header_outer}>
            <header>
            <div className={styled.header_top}>
                <div className={styled.menu_outer}>
                <div className={styled.main_header}>
                    <div className={styled.main_header_contents}>
                    <div className={`${styled.main_header_inner} ${styled.main_header_inner1}`}>
                        <a href="/admin/admin_home"><image src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/y4j_logo_black.png"/></a>
                    </div>
                    <ul className={`${styled.main_header_inner} ${styled.main_header_inner2}`}>
                        <li className={styled.header_middle_user}>
                        <a href="/admin/admin_login">
                            <image data-bs-toggle="tooltip" data-bs-placement="bottom" title="LOGIN" src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/loginPassword.png"/>
                        </a>
                        </li>
                        <li className={styled.header_middle_user}>
                        <a href="/admin/admin_join">
                            <image data-bs-toggle="tooltip" data-bs-placement="bottom" title="JOIN" src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/loginJoin.png"/>
                        </a>
                        </li>
                        <li className={styled.header_middle_user}>
                        <a href="/message">
                            <image data-bs-toggle="tooltip" data-bs-placement="bottom" title="MY PAGE" src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/loginMember.png"/>
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className={styled.header_bottom_outer}>
                    <div className={styled.header_bottom}>
                    <div className={styled.header_bottom_inner}>
                        <div className={styled.menuTable_header}>
                        <div className={styled.menuTable_outer}>
                            <div className={styled.menu_bar}> 
                            <ul>
                                <li>
                                <span><a href="#">COMPANY</a></span>
                                <ul className={styled.snb}>
                                    <li className={styled.snbLi1}><span><a href="#">ABOUT Y4J</a></span></li>
                                    <li><span><a href="#">HISTORY</a></span></li>
                                    <li><span><a href="#">CONTACT</a></span></li>
                                </ul>
                                </li>
                                <li>
                                <span><a href="#">ENTERTAINER</a></span>
                                <ul className={styled.snb}>
                                    <li className={styled.snbLi1}><span><a href="#">NEWJEANS</a></span></li>
                                    <li><span><a href="#">BLACKPINK</a></span></li>
                                    <li><span><a href="#">IVE</a></span></li>
                                    <li><span><a href="#">LEE DOHYUN</a></span></li>
                                    <li><span><a href="#">CHAE SOOBIN</a></span></li>
                                </ul>
                                </li>
                                <li>
                                <span><a href="/product/productList">PRODUCTION</a></span>
                                <ul className={styled.snb}>
                                    <li className={styled.snbLi1}><span><a href="#">ALBUM</a></span></li>
                                    <li><span><a href="#">GOODS</a></span></li>
                                    <li><span><a href="#">MAGAZINE</a></span></li>
                                    <li><span><a href="#">PICTURE CARD</a></span></li>
                                </ul>
                                </li>
                                <li>
                                <span><a href="#">AUDITION</a></span>
                                <ul className={styled.snb}>
                                    <li className={styled.snbLi1}><span><a href="/audition/audition_notice">AUDITION</a></span></li>
                                </ul>
                                </li>
                            </ul>
                            <img className={styled.sticky_logo}
                                src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/y4j_logo_white.png" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </header>
        </div>

        <section>
            <Outlet/>
        </section>
        
        </Fragment>
    )
}

export default Header;