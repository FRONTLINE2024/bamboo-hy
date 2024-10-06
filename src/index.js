import Header from './common/components/header.js';
import { router, navigate } from './router.js';

// 뒤, 앞페이지로 이동 시 app() 호춣하여 url에 맞는 페이지로 다시 랜더링
window.addEventListener("popstate", router);

document.addEventListener('DOMContentLoaded', () => {
    const appElement = document.getElementById('app');
    appElement.innerHTML = Header();

    const main = document.createElement('div');
    main.id = 'page-container';
    appElement.appendChild(main);

    router();

    document.body.addEventListener('click', (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigate(e.target.href);
          }
    })
});