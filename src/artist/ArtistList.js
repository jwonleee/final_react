import { useState } from "react";
import { Link } from "react-router-dom";
import styled1 from "../css/ArtistList.module.css";



const ArtistList = () => {

    // 개인 사진
    const photo_personnel = [
   
        {info1:'nj', src:'/img/minji.jpeg', name:'MinJi', info:'solo'},
        {info1:'nj', src:'/img/hanni.jpeg', name:'Hanni', info:'solo'},
        {info1:'nj', src:'/img/Hyein.jpeg', name:'HyeIn', info:'solo'},
        {info1:'nj', src:'/img/danielle.jpeg', name:'Danielle', info:'solo'},
        {info1:'nj', src:'/img/Haerin.jpeg', name:'HaeRin', info:'solo'},
        {info1:'bp', src:'/img/jisoo.jpeg', name:'JiSoo', info:'solo'},
        {info1:'bp', src:'/img/jennie.jpeg', name:'Jennie', info:'solo'},
        {info1:'bp', src:'/img/lisa.jpeg', name:'Lisa', info:'solo'},
        {info1:'bp', src:'/img/rose.jpeg', name:'Rose', info:'solo'},
        {info1:'ive1', src:'/img/AnYujin.webp', name:'An Yu-jin', info:'solo'},
        {info1:'ive1', src:'/img/Jangwonyoung.webp', name:'Jang Won-young', info:'solo'},
        {info1:'ive1', src:'/img/Liz.webp', name:'Liz', info:'solo'},
        {info1:'ive1', src:'/img/Rei.webp', name:'Rei', info:'solo'},
        {info1:'ive2', src:'/img/Leeseo.webp', name:'Leeseo', info:'solo'},
        {info1:'ive2', src:'/img/Gaeul.webp', name:'Gaeul', info:'solo'}


    ];

    //단체사진
    // const artist_all = [
         
    //     {src:'/img/blackpink_all.jpeg'},
    //     {src:'/img/newjeans_all.jpeg'},  
    //     {src:'/img/ive_all.jpeg'}, 
    //     {src:'/img/jangkiyong1.jpg'},
    //     {src:'/img/chaesoobin.jpg'}

    // ];

    const [picture, setPicture] = useState(photo_personnel);
    // const [picture2, setPicture2] = useState(artist_all);


    // const newPicture = picture.filter(item => item.info !== 'solo').map ((item, index)=> 

        // <li style={{padding: '0 15px'}} className={styled1.artistImg} key={index}>
        //     <Link to='/artist/artistDetail/main'>
        //         <img style={{width:'400px', height:'300px'}} src={item.src}/>
        //     <div className={styled1.artistNameBox}>
        //         <span className={styled1.artistName}>
        //             {item.name}
        //         </span>
        //     </div>
        //     </Link>
        // </li>
        
    // );

    ///////////////////////////////////////////////////////////////////////////////////
    //개인 사진 - 뉴진스

    const newMember = picture.filter(item =>  item.info1 === 'nj'&& item.info == 'solo' ).map ((item, index) => 
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
        <>
            <div style={{marginTop:'59px', display:'flex',flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
                
                {/* 뉴진스 */}
                <div className={styled1.newPicture} /*style={{backgroundColor:'rgba(185, 224, 250, 0.216)'}}*/>
                    <div className={styled1.artistImg3} >
                        <div>
                            <div style={{padding: '0 15px', width:'820px', height:'500px'}}  >
                                <Link to='/artist/nj/artistDetail_newjeans/main_nj'>
                                    <img style={{width:'820px', height:'500px', boxShadow: '2px 2px 10px 0.4px rgba(128, 128, 128, 0.642)'}} src="/img/newjeans_all.jpeg"/>
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
                                <img style={{width:'820px', height:'500px', boxShadow: '2px 2px 10px 0.4px rgba(128, 128, 128, 0.642)'}} src="/img/ive_all.jpeg"/>
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
                            <Link to='/artist/bp/artistDetailBp/mainBp'>
                                <img style={{width:'820px', height:'500px', boxShadow: '2px 2px 10px 0.4px rgba(128, 128, 128, 0.642)'}} src="/img/blackpink_all.jpeg"/>
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

                {/* 배우 */}
                </div>
                <div className={styled1.newPicture} >
                    <div className={styled1.artistImg1} >
                        <div style={{padding: '0 15px', width:'800px', height:'500px'}}  >
                            <Link to='/artist/ldh/artistDetail_ldh/main_ldh'>
                                <img style={{width:'800px', height:'500px', boxShadow: '2px 2px 10px 0.4px rgba(128, 128, 128, 0.642)'}} src="/img/leedohyan6.jpg"/>
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
                                <img style={{width:'800px', height:'500px', boxShadow: '2px 2px 10px 0.4px rgba(128, 128, 128, 0.642)'}} src="/img/chaesoobin.jpg"/>
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

         
  
        </>
    )
}

export default ArtistList;