import home from './pages/home.cmp.js'
import emailApp from './apps/mister-email/pages/email-app.js'
import emailDetails from './apps/mister-email/pages/email-details.js'
import missKeepApp from './apps/miss-keep/pages-keep/keep-app.js'


const routes = [
    { path: '/', component: home },
    { path: '/email', component: emailApp },
    { path: '/email/:id', component: emailDetails },
    { path: '/miss-keep', component: missKeepApp },
];


export const router = new VueRouter({ routes })