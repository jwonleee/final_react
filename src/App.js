import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import ArtistHome from './artist/ArtistHome';
import ArtistList from './artist/ArtistList';

import ArtistDetailAbout_Bp from './artist/bp/ArtistDetailAbout_Bp';
import ArtistDetail_Bp from './artist/bp/ArtistDetail_Bp';
import ArtistDetailMain_Bp from './artist/bp/ArtistDetailMain_Bp';

import ArtistDetailAbout_nj from './artist/nj/ArtistDetailAbout_nj';
import ArtistDetailMain_newjeans from './artist/nj/ArtistDetailMain_newjeans';
import ArtistDetail_newjeans from './artist/nj/ArtistDetail_newjeans';

import ArtistDetail_ive from './artist/ive/ArtistDetail_ive';
import ArtistDetailMain_ive from './artist/ive/ArtistDetailMain_ive';
import ArtistDetailAbout_ive from './artist/ive/ArtistDetailAbout_ive';

import ArtistDetail_ldh from './artist/ldh/ArtistDetail_ldh';
import ArtistDetailMain_ldh from './artist/ldh/ArtistDetailMain_ldh';
import ArtistDetailAbout_ldh from './artist/ldh/ArtistDetailAbout_ldh';

import ArtistDetail_csb from './artist/csb/ArtistDetail_csb';
import ArtistDetailMain_csb from './artist/csb/ArtistDetailMain_csb';
import ArtistDetailAbout_csb from './artist/csb/ArtistDetailAbout_csb';

import About_Y4J from './About_Y4J';
import Y4J_history from './Y4J_history';
import Y4J_contact from './Y4J_contact';
import Tab from './Tab';
import MusicianList from './artist/MusicianList';
import ActorList from './artist/ActorList';
import ArtistDetailSchedule from './artist/ArtistDetailSchedule';

import Header from './Header';
import Home from './Home';
import Paging from './Paging';

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
            <Route path='/artist/musicianList' element={<MusicianList/>}></Route>
            <Route path='/artist/actorList' element={<ActorList/>}></Route>

            {/* 뉴진스 게시판 */}
              <Route path='/artist/nj/artistDetail_newjeans' element={<ArtistDetail_newjeans/>}>
                <Route path='/artist/nj/artistDetail_newjeans/main_nj' element={<ArtistDetailMain_newjeans/>}></Route>
                <Route path='/artist/nj/artistDetail_newjeans/about_nj' element={<ArtistDetailAbout_nj/>}></Route>
                <Route path='/artist/nj/artistDetail_newjeans/schedule' element={<ArtistDetailSchedule/>}></Route>
              </Route>

            {/* 블핑 게시판 */}
              <Route path='/artist/bp/artistDetail_Bp' element={<ArtistDetail_Bp/>}>
                <Route path='/artist/bp/artistDetail_Bp/mainBp' element={<ArtistDetailMain_Bp/>}></Route>
                <Route path='/artist/bp/artistDetail_Bp/aboutBp' element={<ArtistDetailAbout_Bp/>}></Route>
                <Route path='/artist/bp/artistDetail_Bp/schedule' element={<ArtistDetailSchedule/>}></Route> 
              </Route>

            {/* 아이브 게시판 */}
              <Route path='/artist/ive/artistDetail_ive' element={<ArtistDetail_ive/>}>
                <Route path='/artist/ive/artistDetail_ive/main_ive' element={<ArtistDetailMain_ive/>}></Route>
                <Route path='/artist/ive/artistDetail_ive/about_ive' element={<ArtistDetailAbout_ive/>}></Route>
                <Route path='/artist/ive/artistDetail_ive/schedule' element={<ArtistDetailSchedule/>}></Route>
              </Route>
     
            {/* 이도현 게시판 */}
              <Route path='/artist/ldh/artistDetail_ldh' element={<ArtistDetail_ldh/>}>
                <Route path='/artist/ldh/artistDetail_ldh/main_ldh' element={<ArtistDetailMain_ldh/>}></Route>    
                <Route path='/artist/ldh/artistDetail_ldh/about_ldh' element={<ArtistDetailAbout_ldh/>}></Route>
                <Route path='/artist/ldh/artistDetail_ldh/schedule' element={<ArtistDetailSchedule/>}></Route>
              </Route>

            {/* 채수빈 게시판 */}
              <Route path='/artist/csb/artistDetail_csb' element={<ArtistDetail_csb/>}>
                <Route path='/artist/csb/artistDetail_csb/main_csb' element={<ArtistDetailMain_csb/>}></Route>
                <Route path='/artist/csb/artistDetail_csb/about_csb' element={<ArtistDetailAbout_csb/>}></Route>
                <Route path='/artist/csb/artistDetail_csb/schedule' element={<ArtistDetailSchedule/>}></Route>
              </Route>

        </Route> {/* 아티스트 리스트 끝 */}

      </Route> {/* 헤더 끝 */}

    </Routes>

  );
}

export default App;
