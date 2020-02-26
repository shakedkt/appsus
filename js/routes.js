import home from './pages/home.cmp.js'
// import appSus from './pages/book-app.cmp.js'

const routes = [
    { path: '/', component: home },
];

export const router = new VueRoter({ routes })
    // export default routes