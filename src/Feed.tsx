import '../public/css/reset.css';

import { useEffect, useState } from 'react';

import feedCSS from '../public/css/Feed.module.css';
import homeCSS from '../public/css/Home.module.css';
import PlanSection from './PlanSection';

function Feed() {
  const [yearMonth, setYearMonth] = useState('');

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    setYearMonth(`${year}년 ${month}월`);
  }, []);

  const getWeekDates = () => {
    const today = new Date();
    const day = today.getDay(); // 0(일요일) ~ 6(토요일)
    const diffToMonday = today.getDate() - ((day + 6) % 7); // 0(월요일) ~ 6(일요일)
    const monday = new Date(today.setDate(diffToMonday));

    const dates = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      return date;
    });

    return dates;
  };

  const weekDates = getWeekDates();
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <>
      <section className={homeCSS.mobile_frame}>
        <div className={homeCSS.home_container}>
          <div className={feedCSS.feed_inner_container}>
            <div className={feedCSS.weekly_container}>
              <p className={feedCSS.year_and_month_info}>{yearMonth}</p>
              <div className={feedCSS.day_container}>
                {weekDates.map((date, id) => (
                  <div
                    className={feedCSS.box_for_each_day}
                    key={id}
                  >
                    <p className={feedCSS.day_info}>
                      {dayNames[date.getDay()]}
                    </p>
                    <button className={feedCSS.icon_img}>
                      <img src="/img/todomate_planimg.png" />
                    </button>
                    <p className={feedCSS.date_info}>{date.getDate()}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={feedCSS.plan_container}>
              <div className={feedCSS.section_container}>
                <PlanSection name="학교" />
                <PlanSection name="피로니어" />
                <PlanSection name="개인일정" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feed;
