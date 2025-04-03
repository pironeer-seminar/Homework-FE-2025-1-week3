import '../public/css/reset.css';

import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import homeCSS from '../public/css/Home.module.css';
import joinCSS from '../public/css/Join.module.css';

function Join() {
  const navigate = useNavigate();

  return (
    <>
      <section className={homeCSS.mobile_frame}>
        <div className={homeCSS.home_container}>
          <div className={joinCSS.join_inner_container}>
            <div className={joinCSS.join_navBar}>
              <div
                className={joinCSS.return_btn}
                onClick={() => void navigate(`/`)}
              >
                <ChevronLeft
                  color="black"
                  size={32}
                />
              </div>
              <div className={joinCSS.title}>가입하기</div>
            </div>
            <div className={joinCSS.join_body_container}>
              <div className={joinCSS.join_registerInputs}>
                <input
                  className={joinCSS.register_email}
                  placeholder="이메일 등록"
                ></input>
                <input
                  className={joinCSS.register_PW}
                  placeholder="비밀번호 등록"
                ></input>
                <input
                  className={joinCSS.register_username}
                  placeholder="유저 이름"
                ></input>
              </div>
              <div className={joinCSS.join_bottom}>
                <button className={joinCSS.join_btn}>회원가입</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Join;
