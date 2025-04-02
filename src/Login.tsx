import homeCSS from '../public/css/Home.module.css';
import joinCSS from '../public/css/Join.module.css';
import loginCSS from '../public/css/Login.module.css';
import '../public/css/reset.css';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <>
      <section className={homeCSS.mobile_frame}>
        <div className={homeCSS.home_container}>
          <div className={joinCSS.join_inner_container}>
            <div className={joinCSS.join_navBar}>
              <div
                className={joinCSS.return_btn}
                onClick={() => navigate(`/`)}
              >
                <ChevronLeft
                  color="black"
                  size={32}
                />
              </div>
              <div className={joinCSS.title}>로그인</div>
            </div>
            <div className={joinCSS.join_registerInputs}>
              <input
                className={joinCSS.register_email}
                placeholder="이메일"
              ></input>
              <input
                className={joinCSS.register_PW}
                placeholder="비밀번호"
              ></input>
              <div className={joinCSS.join_bottom}>
                <button className={loginCSS.login_btn}>확인</button>
              </div>
              <a className={loginCSS.forgot_PW}>비밀번호를 잊었다면?</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
