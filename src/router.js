import SignupPage from './features/signUp/index.js';
import FeedPage from './features/feed/index.js';
import PostPage from './features/post/index.js';

export const router = () => {
    const routes = [
        { path: '/feed', view: FeedPage, },
        { path: '/post', view: PostPage, },
        { path: '/signup', view: SignupPage, },
    ];

    // 현재 경로와 매칭되는 라우트 찾기
    const match = routes.find(route => window.location.pathname === route.path) || routes[0];

    const main = document.getElementById('page-container');
    main.innerHTML = match.view();
}

export const navigate = (url) => {
    history.pushState({}, null, url);
    router();
};