import home from './pages/home.cmp.js'
import emailApp from './apps/mister-email/pages/email-app.js'
import emailDetails from './apps/mister-email/pages/email-details.js'
import missKeepApp from './apps/miss-keep/pages-keep/keep-app.js'
import missBooksApp from './apps/miss-books/pages-books/books-app.cmp.js'
import bookAdd from './apps/miss-books/pages-books/book-add.cmp.js'
import bookDetails from './apps/miss-books/cmps-books/book-details.cmp.js'


const routes = [
    { path: '/', component: home },
    { path: '/email', component: emailApp },
    { path: '/email/:id', component: emailDetails },
    { path: '/miss-keep', component: missKeepApp },
    { path: '/miss-books', component: missBooksApp },
    { path: '/miss-books/add', component: bookAdd },
    { path: '/miss-books/:id', component: bookDetails },
];


export const router = new VueRouter({ routes })