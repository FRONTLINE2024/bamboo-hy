// import Button from "./button";
import button from './button';
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
            ${button({ btnName: '로그인', isMain: true })}
            <hr/>
            ${button({ btnName: '회원가입', isMain: false })}
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