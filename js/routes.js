import home from './pages/home.cmp.js'
import emailApp from './apps/mister-email/pages/email-app.js'
//import emailDetails from './pages/email-details.cmp.js'


const routes = [
    { path: '/', component: home },
    { path: '/email', component: emailApp },
 //   {path:'/email/:id', component:emailDetails},
];


export const router = new VueRouter({ routes })