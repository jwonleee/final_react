import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import styled1 from "../css/ArtistList.module.css";

const MusicianList = () => {

    // 개인 사진
    const photo_personnel = [
   
        {info1:'nj', src:'https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/minji.jpeg', name:'MinJi', info:'solo'},
        {info1:'nj', src:'https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/hanni.jpeg', name:'Hanni', info:'solo'},
        {info1:'nj', src:'https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/Hyein.jpeg', name:'HyeIn', info:'solo'},
        {info1:'nj', src:'https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/danielle.jpeg', name:'Danielle', info:'solo'},
        {info1:'nj', src:'https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/Haerin.jpeg', name:'HaeRin', info:'solo'},
        {info1:'bp', src:'https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/jisoo.jpeg', name:'JiSoo', info:'solo'},
        {info1:'bp', src:'https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/jennie.jpeg', name:'Jennie', info:'solo'},
        {info1:'bp', src:'https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/lisa.jpeg', name:'Lisa', info:'solo'},
        {info1:'bp', src:'https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/rose.jpeg', name:'Rose', info:'solo'},
        {info1:'ive1', src:'https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/AnYujin.webp', name:'An Yu-jin', info:'solo'},
        {info1:'ive1', src:'https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/Jangwonyoung.webp', name:'Jang Won-young', info:'solo'},
        {info1:'ive1', src:'https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/Liz.webp', name:'Liz', info:'solo'},
        {info1:'ive1', src:'https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/Rei.webp', name:'Rei', info:'solo'},
        {info1:'ive2', src:'https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/Leeseo.webp', name:'Leeseo', info:'solo'},
        {info1:'ive2', src:'https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/Gaeul.webp', name:'Gaeul', info:'solo'}
    ];

    const [picture, setPicture] = useState(photo_personnel);

    ///////////////////////////////////////////////////////////////////////////////////
    //개인 사진 - 뉴진스

    const newMember = picture.filter(item =>  item.info1 === 'nj'&& item.info == 'solo' ).map ((item, index) => 
        <div className={styled1.personnelImg} key={index}  >
                <div>
                    <img style={{width:'140px', height:'150px', objectFit: 'cover', boxShadow: '2px 2px 10px 0.4px rgba(128, 128, 128, 0.642)'}} src={item.src} />
                </div>
                <div className={styled1.artistNameBox2}>
                    <span className={styled1.artistName2}>
                        {item.name}
                    </span>
                </div>
            
        </div>

    );

    //개인 사진 - 아이브
    const newMember1 = picture.filter(item =>  item.info1 === 'ive1' && item.info == 'solo' ).map ((item, index) => 
    <ul className={styled1.personnelImg_ive} key={index}  >
           <div>
                    <img style={{width:'170px', height:'180px', boxShadow: '2px 2px 10px 0.4px rgba(128, 128, 128, 0.642)'}} src={item.src} />
            </div>
            
            <div className={styled1.artistNameBox_ive}>
                <span className={styled1.artistName_ive}>
                    {item.name}
                </span>
            </div>
        
    </ul>
    );
    const newMember3 = picture.filter(item =>  item.info1 === 'ive2' && item.info == 'solo' ).map ((item, index) => 
    <ul className={styled1.personnelImg_ive} key={index}  >
            <div>
                    <img style={{width:'170px', height:'180px', boxShadow: '2px 2px 10px 0.4px rgba(128, 128, 128, 0.642)'}} src={item.src} />
            </div>
            
            <div className={styled1.artistNameBox_ive}>
                <span className={styled1.artistName_ive}>
                    {item.name}
                </span>
            </div>
        
    </ul>

    );

      //개인 사진 - 블랙핑크
      const newMember2 = picture.filter(item =>  item.info1 === 'bp' && item.info == 'solo' ).map ((item, index) => 
      <div className={styled1.personnelImg} key={index}  >
            <div>
                    <img style={{width:'140px', height:'150px', boxShadow: '2px 2px 10px 0.4px rgba(128, 128, 128, 0.642)'}} src={item.src} />
            </div>
              <div className={styled1.artistNameBox2}>
                  <span className={styled1.artistName2}>
                      {item.name}
                  </span>
              </div>
          
      </div>
  
      );

    return (
        <Fragment>
            <div style={{marginTop:'59px', display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
                
                {/* 뉴진스 */}
                <div className={styled1.newPicture} /*style={{backgroundColor:'rgba(185, 224, 250, 0.216)'}}*/>
                    <div className={styled1.artistImg3} >
                        <div>
                            <div style={{padding: '0 15px', width:'820px', height:'500px'}}  >
                                <Link to='/artist/nj/artistDetail_newjeans/main_nj'>
                                    <img style={{width:'820px', height:'500px', boxShadow: '2px 2px 10px 0.4px rgba(128, 128, 128, 0.642)'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/newjeans_all.jpeg"/>
                            <div className={styled1.artistNameBox3}>
                                <span className={styled1.artistName3}>
                                    Newjeans
                                </span>
                            </div>
                                </Link>
                            </div>

                        </div>
                    </div>
                        {/* 개인사진list*/}
                        <div style={{marginTop:'30px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                            {newMember}

                        </div>

                {/* 아이브 */}
                </div>
                <div className={styled1.newPicture} /*style={{backgroundColor:'rgba(252, 216, 164, 0.216)'}}*/>
                    <div className={styled1.artistImg3} >
                        <div style={{padding: '0 15px',width:'820px', height:'500px'}}  >
                            <Link to='/artist/ive/artistDetail_ive/main_ive'>
                                <img style={{width:'820px', height:'500px', boxShadow: '2px 2px 10px 0.4px rgba(128, 128, 128, 0.642)'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/ive_all.jpeg"/>
                        <div className={styled1.artistNameBox3}>
                            <span className={styled1.artistName3}>
                                IVE
                            </span>
                        </div>
                            </Link>
                        </div>
                    </div>
                        {/* 개인사진list*/}
                        <div style={{marginTop:'30px',display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                         
                                <div >
                                    {newMember1}
                                </div>
                                <div >
                                    {newMember3}
                                
                                </div>

                       
                      
                        </div>

                </div>

                {/* 블랙핑크 */}
                <div className={styled1.newPicture} /*style={{backgroundColor:'rgba(188, 184, 206, 0.122)'}}*/>
                    <div className={styled1.artistImg3} >
                        <div style={{padding: '0 15px', width:'820px', height:'500px'}}  >
                            <Link to='/artist/bp/artistDetail_Bp/mainBp'>
                                <img style={{width:'820px', height:'500px', boxShadow: '2px 2px 10px 0.4px rgba(128, 128, 128, 0.642)'}} src="https://jafp.s3.ap-northeast-2.amazonaws.com/y4j/blackpink_all.jpeg"/>
                        <div className={styled1.artistNameBox3}>
                            <span className={styled1.artistName3}>
                                Black Pink
                            </span>
                        </div>
                            </Link>
                        </div>
                    </div>
                        {/* 개인사진list*/}
                        <div style={{marginTop:'30px', display:'flex', justifyContent:'center', alignItems:'center'}} >
                            {newMember2}
                        </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MusicianList;