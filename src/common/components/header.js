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
            <form name='login-info' method='get'>
                <input type='text' placeholder='아이디'/>
                <input type='password' placeholder='비밀번호'/>
            </form>
            ${button({ btnName: '로그인', isMain: 'main-button' })}
            <hr/>
            ${button({ btnName: '회원가입', isMain: 'sub-button' })}
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