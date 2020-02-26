import home from './pages/home.cmp.js'
// import routes from './routes.js'
// import appSus from './pages/book-app.cmp.js'

const routes = [
    { path: '/', component: home },
];


export const router = new VueRouter({ routes })