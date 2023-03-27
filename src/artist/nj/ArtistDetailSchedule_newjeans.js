import axios from "axios";
import { useEffect, useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import styled from "../../css/ArtistDetailSchedule.module.css";
import styled2 from "../../css/Calendar.css"; // calendar css 중복
import dayjs from 'dayjs';
import Paging from "../../Paging";


const ArtistDetailSchedule = () => {

    //캘린더
    const [value, setValue] = useState(new Date());

    //페이지네이션
    const [data, setData] = useState(''); //axios 받아온 데이터 저장
    // const [currentPosts, setCurrentPosts] = useState([]); //보여줄 포스트
    // const [page, setPage] = useState(1); //현재 페이지
    // const handlePageChange = (page) => {setPage(page)};
    // const [postPerPage] = useState(4); //페이지당 포스트 개수
    // const indexOfLastPost = page * postPerPage;
    // const indexOfFirstPost = indexOfLastPost - postPerPage;
    
    useEffect(() => {
        getSchedule();
    },[value]);

    async function getSchedule() {

        await axios({
            url: '/axiosgetList',
            method: 'get',
            params: {
                schedule_start_time: dayjs(value).format("YYYY-MM-DD"),
                ent_name: 'newjeans'
            },
        }
        )
        .then((response) => {
            const schedule = response.data.map(item =>
                <ul className={styled.sch_detail} key={item.schedule_no}>
                    {/* 날짜 데이터 가져오기 */}
                    <li className={styled.dt_date}>{dayjs(item.schedule_start_time).format('DD ddd')}</li>
                    <li>
                        <span className={styled.sbt_etc}>{item.schedule_ent_name}</span>
                    </li>
                </ul>
            );
                
            setData(schedule);

            // setCurrentPosts(schedule.slice(indexOfFirstPost, indexOfLastPost))
            // console.log(currentPosts);
            
        })
        .catch((error) => {
                console.error(error);
            })
        }


    return (
        <>
            <div className={styled.container}>
                <div className={styled.schedule_wrap}>

                    {/* 왼쪽 캘린더 */}
                    <div className={`${styled2.Calendar} ${styled.n_left}`}>
                        <Calendar
                            onChange={setValue}
                            onClickDay={getSchedule}
                            formatDay={(locale, date) => dayjs(date).format("DD")}
                            locale="ko-KO" // 한글버전
                            calendarType="US" // 요일을 일요일부터 시작하도록 설정
                            value={value}
                            minDetail="year"
                            navigationLabel={null}
                            showNeighboringMonth={false} //이번달 날짜만 보이게
                            next2Label={null} //>> 화살표 지우기
                            prev2Label={null} //>> 화살표 지우기
                            />
                    </div>


                    {/* 오른쪽 텍스트 */}
                    <div className={styled.n_right}>
                            
                        {/* 타이틀 */}
                        <div className={styled.title}>SCHEDULE</div>
 
                        {/* 스케줄 나오는 곳 */}
                            {data}
                            {/* {currentPosts} */}

                            {/* pagination */}
                            {/* <Paging
                                totalCount={data.length}
                                page={page}
                                postPerPage={postPerPage}
                                pageRangeDisplayed={5}
                            handlePageChange={handlePageChange}/> */}

                            {/* 데이터가 넘어가는게 있을때만 나오게 */}
                            {/* { pageRangeDisplayed >= 2 ? <Paging totalCount={data.length} page={page} postPerPage={postPerPage} pageRangeDisplayed={5} handlePageChange={handlePageChange}/> : '없다' } */}

                        </div>

                    </div>

               
            </div>


        </>
    )
}

export default ArtistDetailSchedule;