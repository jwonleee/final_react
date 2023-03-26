import { Fragment } from "react";
import { Link } from "react-router-dom";
import styled1 from "../css/ArtistList.module.css";

const ActorList = () => {

    return (
        <Fragment>
            <div style={{marginTop:'59px', display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
                <div className={styled1.newPicture} >
                    <div className={styled1.artistImg1} >
                        <div style={{padding: '0 15px', width:'800px', height:'500px'}}  >
                            <Link to='/artist/ldh/artistDetail_ldh/main_ldh'>
                                <img style={{width:'800px', height:'500px', boxShadow: '2px 2px 10px 0.4px rgba(128, 128, 128, 0.642)'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/leedohyun.jpg"/>
                        <div className={styled1.artistNameBox1}>
                            <span className={styled1.artistName1}>
                                Lee Do-hyan
                            </span>
                        </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styled1.newPicture} >
                    <div className={styled1.artistImg1} >
                        <div style={{padding: '0 15px', width:'800px', height:'500px'}}  >
                            <Link to='/artist/csb/artistDetail_csb/main_csb'>
                                <img style={{width:'800px', height:'500px', boxShadow: '2px 2px 10px 0.4px rgba(128, 128, 128, 0.642)'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/chaesoobin.jpg"/>
                        <div className={styled1.artistNameBox1}>
                            <span className={styled1.artistName1}>
                                Chae Soo-bin
                            </span>
                        </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ActorList;