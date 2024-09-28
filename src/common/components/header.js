// import Button from "./button";
import './style.css';

function header() {
    let signUp = false;

    const signUpCheck = signUp ? `
        <div class='header-right'>
            <p>하리미</p>
            <p>님</p>
        </div>
    ` : ` 
        <div class='header-right'>
            <input type='text' placeholder='아이디'/>
            <input type='password' placeholder='비밀번호'/>
            <button>로그인</button>
            <button>회원가입</button>
        </div>`;
    
    return `
        <header>
            <div class='header-left'>
                <p>림대</p>
                <p>SOOP</p>
            </div>
            ${signUpCheck}
        </header>
    `;
}
export default header;