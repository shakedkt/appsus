import home from './pages/home.cmp.js'
// import routes from './routes.js'
// import appSus from './pages/book-app.cmp.js'
import emailApp from './apps/mister-email/pages/email-app.js'


const routes = [
    { path: '/', component: home },
    { path: '/email', component: emailApp }
];


export const router = new VueRouter({ routes })