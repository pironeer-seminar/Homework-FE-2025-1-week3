import '../public/css/reset.css';

import { Bell, Compass, House, Settings, User } from 'lucide-react';

import homeCSS from '../public/css/Home.module.css';
import myPageCSS from '../public/css/MyPage.module.css';

function MyPage() {
  return (
    <>
      <section className={homeCSS.mobile_frame}>
        <div className={homeCSS.home_container}>
          <div className={myPageCSS.inner_container}>
            <div className={myPageCSS.profile_container}>
              <div className={myPageCSS.user_settings}>
                <Settings
                  color="black"
                  size={32}
                />
              </div>
              <div className={myPageCSS.user_info_container}>
                <div className={myPageCSS.img_background}>
                  <div className={myPageCSS.img_container}>
                    <img src="../public/img/todomate_white.png" />
                  </div>
                </div>
                <div className={myPageCSS.user_name_email}>
                  <span className={myPageCSS.user_name}>아무말</span>
                  <span className={myPageCSS.user_email}>아무말</span>
                </div>
              </div>
            </div>
            <div className={myPageCSS.bottom_navBar}>
              <div className={myPageCSS.nav_menu_1}>
                <div className={myPageCSS.nav_menu_1_img}>
                  <House
                    color="black"
                    size={48}
                  />
                </div>
                <div className={myPageCSS.nav_menu_1_title}></div>
              </div>
              <div className={myPageCSS.nav_menu_2}>
                <div className={myPageCSS.nav_menu_2_img}>
                  <Compass
                    color="black"
                    size={48}
                  />
                </div>
                <div className={myPageCSS.nav_menu_2_title}></div>
              </div>
              <div className={myPageCSS.nav_menu_3}>
                <div className={myPageCSS.nav_menu_3_img}>
                  <Bell
                    color="black"
                    size={48}
                  />
                </div>
                <div className={myPageCSS.nav_menu_3_title}></div>
              </div>
              <div className={myPageCSS.nav_menu_4}>
                <div className={myPageCSS.nav_menu_4_img}>
                  <User
                    color="black"
                    size={48}
                  />
                </div>
                <div className={myPageCSS.nav_menu_4_title}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyPage;
