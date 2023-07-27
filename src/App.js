import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Router } from 'react-router-dom';

import ArtistHome from './artist/ArtistHome';
import ArtistList from './artist/ArtistList';

import ArtistDetailAbout_Bp from './artist/bp/ArtistDetailAbout_Bp';
import ArtistDetail_Bp from './artist/bp/ArtistDetail_Bp';
import ArtistDetailMain_Bp from './artist/bp/ArtistDetailMain_Bp';
import ArtistDetailSchedule_Bp from './artist/bp/ArtistDetailSchedule_Bp';

import ArtistDetailAbout_nj from './artist/nj/ArtistDetailAbout_nj';
import ArtistDetailMain_newjeans from './artist/nj/ArtistDetailMain_newjeans';
import ArtistDetail_newjeans from './artist/nj/ArtistDetail_newjeans';
import ArtistDetailSchedule_newjeans from './artist/nj/ArtistDetailSchedule_newjeans';

import ArtistDetail_ive from './artist/ive/ArtistDetail_ive';
import ArtistDetailMain_ive from './artist/ive/ArtistDetailMain_ive';
import ArtistDetailAbout_ive from './artist/ive/ArtistDetailAbout_ive';
import ArtistDetailSchedule_ive from './artist/ive/ArtistDetailSchedule_ive';

import ArtistDetail_ldh from './artist/ldh/ArtistDetail_ldh';
import ArtistDetailMain_ldh from './artist/ldh/ArtistDetailMain_ldh';
import ArtistDetailAbout_ldh from './artist/ldh/ArtistDetailAbout_ldh';
import ArtistDetailSchedule_ldh from './artist/ldh/ArtistDetailSchedule_ldh';

import ArtistDetail_csb from './artist/csb/ArtistDetail_csb';
import ArtistDetailMain_csb from './artist/csb/ArtistDetailMain_csb';
import ArtistDetailAbout_csb from './artist/csb/ArtistDetailAbout_csb';
import ArtistDetailSchedule_csb from './artist/csb/ArtistDetailSchedule_csb';

import About_Y4J from './About_Y4J';
import Y4J_history from './Y4J_history';
import Y4J_contact from './Y4J_contact';
import Tab from './Tab';
import MusicianList from './artist/MusicianList';
import ActorList from './artist/ActorList';

function App() {

  return (

    <Routes>
      {/* 회사 소개 페이지 */}
      <Route path='/tab' element={<Tab />}>
        <Route path='about' element={<About_Y4J />} />
        <Route path='history' element={<Y4J_history />} />
        <Route path='contact' element={<Y4J_contact />} />
      </Route>

      {/* 아티스트 소개 페이지 */}
      <Route path='/artist' element={<ArtistHome />}>
        <Route path='artistList' element={<ArtistList />} />
        <Route path='musicianList' element={<MusicianList />} />
        <Route path='actorList' element={<ActorList />} />

        {/* 뉴진스 게시판 */}
        <Route path='nj/artistDetail_newjeans' element={<ArtistDetail_newjeans />}>
          <Route path='main_nj' element={<ArtistDetailMain_newjeans />} />
          <Route path='about_nj' element={<ArtistDetailAbout_nj />} />
          <Route path='schedule_nj' element={<ArtistDetailSchedule_newjeans />} />
        </Route>

        {/* 블핑 게시판 */}
        <Route path='bp/artistDetail_Bp' element={<ArtistDetail_Bp />}>
          <Route path='mainBp' element={<ArtistDetailMain_Bp />} />
          <Route path='aboutBp' element={<ArtistDetailAbout_Bp />} />
          <Route path='scheduleBp' element={<ArtistDetailSchedule_Bp />} />
        </Route>

        {/* 아이브 게시판 */}
        <Route path='ive/artistDetail_ive' element={<ArtistDetail_ive />}>
          <Route path='main_ive' element={<ArtistDetailMain_ive />} />
          <Route path='about_ive' element={<ArtistDetailAbout_ive />} />
          <Route path='schedule_ive' element={<ArtistDetailSchedule_ive />} />
        </Route>

        {/* 이도현 게시판 */}
        <Route path='ldh/artistDetail_ldh' element={<ArtistDetail_ldh />}>
          <Route path='main_ldh' element={<ArtistDetailMain_ldh />} />
          <Route path='about_ldh' element={<ArtistDetailAbout_ldh />} />
          <Route path='schedule_ldh' element={<ArtistDetailSchedule_ldh />} />
        </Route>

        {/* 채수빈 게시판 */}
        <Route path='csb/artistDetail_csb' element={<ArtistDetail_csb />}>
          <Route path='main_csb' element={<ArtistDetailMain_csb />} />
          <Route path='about_csb' element={<ArtistDetailAbout_csb />} />
          <Route path='schedule_csb' element={<ArtistDetailSchedule_csb />} />
        </Route>

      </Route> {/* 아티스트 페이지 끝 */}

    </Routes>

  );
}

export default App;
