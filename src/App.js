import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import ArtistHome from './artist/ArtistHome';


import ArtistList from './artist/ArtistList';


import ArtistDetailAlbumBp from './artist/bp/ArtistDetailAlbumBp';
import ArtistDetailAboutBp from './artist/bp/ArtistDetailAboutBp';



import ArtistDetailBp from './artist/bp/ArtistDetailBp';
import ArtistDetailMainBp from './artist/bp/ArtistDetailMainBp';
import ArtistDetailAlbum_contentBp from './artist/bp/ArtistDetailAlbum_contentBp';
import ArtistDetailScheduleBp from './artist/bp/ArtistDetailScheduleBp';
import ArtistDetailAbout_nj from './artist/nj/ArtistDetailAbout_nj';
import ArtistDetailAlbum_nj from './artist/nj/ArtistDetailAlbum_nj';
import ArtistDetailAlbum_content_nj from './artist/nj/ArtistDetailAlbum_content_nj';
import ArtistDetailSchedule_nj from './artist/nj/ArtistDetailSchedule_nj';
import ArtistDetailMain_newjeans from './artist/nj/ArtistDetailMain_newjeans';
import ArtistDetail_newjeans from './artist/nj/ArtistDetail_newjeans';
import ArtistDetail_ive from './artist/ive/ArtistDetail_ive';
import ArtistDetailMain_ive from './artist/ive/ArtistDetailMain_ive';
import ArtistDetailAbout_ive from './artist/ive/ArtistDetailAbout_ive';
import ArtistDetailAlbum_ive from './artist/ive/ArtistDetailAlbum_ive';
import ArtistDetailAlbum_content_ive from './artist/ive/ArtistDetailAlbum_content_ive';
import ArtistDetailSchedule_ive from './artist/ive/ArtistDetailSchedule_ive';
import ArtistDetail_ldh from './artist/ldh/ArtistDetail_ldh';
import ArtistDetailMain_ldh from './artist/ldh/ArtistDetailMain_ldh';
import ArtistDetailAbout_ldh from './artist/ldh/ArtistDetailAbout_ldh';
import ArtistDetailMag_ldh from './artist/ldh/ArtistDetailMag_ldh';
import ArtistDetailMag_content_ldh from './artist/ldh/ArtistDetailMag_content_ldh';
import ArtistDetailSchedule_ldh from './artist/ldh/ArtistDetailSchedule_ldh';
import About_Y4J from './About_Y4J';
import Y4J_history from './Y4J_history';
import Y4J_contact from './Y4J_contact';
import Tab from './Tab';
import ArtistDetail_csb from './artist/csb/ArtistDetail_csb';
import ArtistDetailMain_csb from './artist/csb/ArtistDetailMain_csb';
import ArtistDetailAbout_csb from './artist/csb/ArtistDetailAbout_csb';
import ArtistDetailMag_csb from './artist/csb/ArtistDetailMag_csb';
import ArtistDetailMag_content_csb from './artist/csb/ArtistDetailMag_content_csb';
import ArtistDetailSchedule_csb from './artist/csb/ArtistDetailSchedule_csb';
import Home from './Home';
import Header from './Header';

function App() {

  return (
  
    <Routes>
      
      <Route element={<Header/>}> {/* 가짜 헤더 */}

       {/* 회사 소개 페이지 */}
          <Route path='/' element={<Home/>}/>
          <Route path='/tab' element={<Tab/>}/>
          <Route path='/about' element={<About_Y4J/>}/>
          <Route path='/history' element={<Y4J_history/>}/>
          <Route path='/contact' element={<Y4J_contact/>}/>

         {/* 아티스트 소개 페이지   */}
          <Route path='/artist' element={<ArtistHome/>}>
    
              <Route path='/artist/artistList' element={<ArtistList/>}></Route>
            

            {/* 블핑 게시판 */}
              <Route path='/artist/bp/artistDetailBp' element={<ArtistDetailBp/>}>
                <Route path='/artist/bp/artistDetailBp/mainBp' element={<ArtistDetailMainBp/>}>
                </Route>
              
                <Route path='/artist/bp/artistDetailBp/aboutBp' element={<ArtistDetailAboutBp/>}></Route>
              
                <Route path='/artist/bp/artistDetailBp/albumBp' element={<ArtistDetailAlbumBp/>}>
                  <Route path='/artist/bp/artistDetailBp/albumBp/contentBp' element={<ArtistDetailAlbum_contentBp/>}></Route>
                </Route>

                <Route path='/artist/bp/artistDetailBp/scheduleBp' element={<ArtistDetailScheduleBp/>}></Route> 
              </Route>

            {/* 뉴진스 게시판 */}
            <Route path='/artist/nj/artistDetail_newjeans' element={<ArtistDetail_newjeans/>}>
              <Route path='/artist/nj/artistDetail_newjeans/main_nj' element={<ArtistDetailMain_newjeans/>}></Route>
            
              <Route path='/artist/nj/artistDetail_newjeans/about_nj' element={<ArtistDetailAbout_nj/>}></Route>

              <Route path='/artist/nj/artistDetail_newjeans/album_nj' element={<ArtistDetailAlbum_nj/>}>
                <Route path='/artist/nj/artistDetail_newjeans/album_nj/content_nj' element={<ArtistDetailAlbum_content_nj/>}></Route>
              </Route>

              <Route path='/artist/nj/artistDetail_newjeans/schedule_nj' element={<ArtistDetailSchedule_nj/>}></Route>
            </Route>
          

           {/* 아이브 게시판 */}
           <Route path='/artist/ive/artistDetail_ive' element={<ArtistDetail_ive/>}>
              <Route path='/artist/ive/artistDetail_ive/main_ive' element={<ArtistDetailMain_ive/>}></Route>
            
              <Route path='/artist/ive/artistDetail_ive/about_ive' element={<ArtistDetailAbout_ive/>}></Route>

              <Route path='/artist/ive/artistDetail_ive/album_ive' element={<ArtistDetailAlbum_ive/>}>
                <Route path='/artist/ive/artistDetail_ive/album_ive/content_ive' element={<ArtistDetailAlbum_content_ive/>}></Route>
              </Route>

              <Route path='/artist/ive/artistDetail_ive/schedule_ive' element={<ArtistDetailSchedule_ive/>}></Route>
            </Route>
         
     
        {/* 이도현 게시판 */}
          <Route path='/artist/ldh/artistDetail_ldh' element={<ArtistDetail_ldh/>}>
              <Route path='/artist/ldh/artistDetail_ldh/main_ldh' element={<ArtistDetailMain_ldh/>}></Route>
            
              <Route path='/artist/ldh/artistDetail_ldh/about_ldh' element={<ArtistDetailAbout_ldh/>}></Route>

              <Route path='/artist/ldh/artistDetail_ldh/mag_ldh' element={<ArtistDetailMag_ldh/>}>
                <Route path='/artist/ldh/artistDetail_ldh/mag_ldh/content_ldh' element={<ArtistDetailMag_content_ldh/>}></Route>
              </Route>

              <Route path='/artist/ldh/artistDetail_ldh/schedule_ldh' element={<ArtistDetailSchedule_ldh/>}></Route>
          </Route>

          {/* 채수빈 게시판 */}
          <Route path='/artist/csb/artistDetail_csb' element={<ArtistDetail_csb/>}>
              <Route path='/artist/csb/artistDetail_csb/main_csb' element={<ArtistDetailMain_csb/>}></Route>
            
              <Route path='/artist/csb/artistDetail_csb/about_csb' element={<ArtistDetailAbout_csb/>}></Route>

              <Route path='/artist/csb/artistDetail_csb/mag_csb' element={<ArtistDetailMag_csb/>}>
                <Route path='/artist/csb/artistDetail_csb/mag_csb/content_csb' element={<ArtistDetailMag_content_csb/>}></Route>
              </Route>

              <Route path='/artist/csb/artistDetail_csb/schedule_csb' element={<ArtistDetailSchedule_csb/>}></Route>
          </Route>
        </Route>
          
      </Route> {/* 헤더 끝 */}
    </Routes>

  );
}

export default App;
