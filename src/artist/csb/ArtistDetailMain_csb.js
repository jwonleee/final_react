import { Fragment } from "react"
import styled5 from "../../css/ArtistDetailMain_csb.module.css";
import YouTube from 'react-youtube';
import { Link } from "react-router-dom";



const ArtistDetailMain_csb= () =>{




    return (
       
        <Fragment>
             <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'70px', borderBottom:'1px solid rgba(32, 34, 35, 0.204)', paddingBottom:'30px', width:'1000px'}}>
                        <div style={{ flexBasis:'22%'}}>
                            <img  style={{borderRadius:'50%'}} src="/img/chaesoobin_profile.jpg"></img>
                        </div>
                        <div style={{margin:'20px', flexBasis:'0'}}>
                            <div style={{display:'flex', flexDirection:'column', fontFamily:'Noto Sans KR, sans-serif'}}>
                                <span style={{fontSize:'20px'}}>soobin <img style={{width:'18px', height:'18px', marginLeft:'5px'}} src="/img/instargram_icon.png"/> <span className={styled5.instargram_follow} > <Link to={"/artist/csb/artistDetail_csb/about_csb"} style={{textDecoration:'none', color:'black'}} >팔로우</Link> </span></span>
                                <br/>
                                <div className={styled5.instargram_con}>
                                     <span style={{flexBasis:'20%'}}>게시물</span>    <span>팔로워 <span style={{fontWeight:'600'}}>162.8만</span></span>   <span>팔로우 <span style={{fontWeight:'600'}}>279</span></span>
                                </div>
                            </div>
                            <div style={{fontFamily:'Noto Sans KR, sans-serif', lineHeight:'27px', marginTop:'20px'}}>
                                <div style={{fontWeight:'600'}}>채수빈</div>
                                <div>하쿠마타 <Link to={"https://www.instagram.com/hakumata_ms/"} style={{textDecoration:'none', color:'rgb(44, 76, 160)'}}><span>@hakumata_ms</span></Link></div>
                                <div>유튜브 '수빈둥빈둥'</div>
                                <div> <Link to={"http://youtube.com/channel/UCKqiyxRI6ULJpjdSgIsMUzA/featured"} style={{textDecoration:'none', color:'rgb(44, 76, 160)'}}>www.youtube.com/channel/UCKqiyxRI6ULJpjdSgIsMUzA/featured</Link></div>                           
                            </div>
                        </div>
                    </div>
               <div style={{display:'flex', justifyContent:'center',alignItems:'center',marginTop:'30px'}}>

                    <div className={styled5.instargram_img}>
                        <div>
                           <img style={{width:'293px', height:'293px'}} src="/img/chaesoobin10.jpg"></img> 
                        </div>
                        <div>
                            <img style={{width:'293px', height:'293px'}} src="/img/chaesoobin11.jpg"></img>
                        </div>
                        <div>
                            <img style={{width:'293px', height:'293px'}} src="/img/chaesoobin9.jpg"></img>
                        </div>
                        <div>
                            <img style={{width:'293px', height:'293px'}} src="/img/chaesoobin6.jpg"></img>
                        </div>
                        <div>
                            <img style={{width:'293px', height:'293px'}} src="/img/chaesoobin104.jpg"></img>
                        </div>
                        <div>
                            <img style={{width:'293px', height:'293px'}} src="/img/chaesoobin8.jpg"></img>
                        </div>
                        <div>
                            <img style={{width:'293px', height:'293px'}} src="/img/chaesoobin16.jpg"></img>
                        </div>
                        <div>
                            <img style={{width:'293px', height:'293px'}} src="/img/chaesoobin13.jpg"></img>
                        </div>
                        <div>
                            <img style={{width:'293px', height:'293px'}} src="/img/chaesoobin14.jpg"></img>
                        </div>
                    </div>
               </div>
            </div>
        </Fragment>
        )
    }

export default ArtistDetailMain_csb;