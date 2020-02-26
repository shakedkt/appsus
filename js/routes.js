import home from './pages/home.cmp.js'
// import routes from './routes.js'
// import appSus from './pages/book-app.cmp.js'
import mailApp from './apps/mister-email/pages/email-app.js'


const routes = [
    { path: '/', component: home },
    {path: '/mail', component: mailApp}
];


export const router = new VueRouter({ routes })