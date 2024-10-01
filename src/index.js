import SignupPage from './features/signUp/index.js';
import FeedPage from './features/feed/index.js';
import PostPage from './features/post/index.js';
import Header from './common/components/header.js';

const routes = [
    { path: '/signup', view: SignupPage, },
    { path: '/feed', view: FeedPage, },
    { path: '/post', view: PostPage, },
];

const App = async () => {
    const appElement = document.getElementById('app');
    
    // Header 렌더링
    appElement.innerHTML = Header();

    // 메인 컨테이너가 존재하지 않으면 생성
    let main = document.querySelector('.page');
    if (!main) {
        main = document.createElement('div');
        main.className = 'page';
        appElement.appendChild(main);
    }

    // 현재 경로와 매칭되는 라우트 찾기
    const match = routes.find(route => window.location.pathname === route.path) || routes[1];

    // 페이지 렌더링
    main.innerHTML = await match.view();
};

window.navigate = (url) => {
    window.history.pushState({}, null, url);
    App();
};

App();