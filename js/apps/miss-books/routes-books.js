import home from './pages/home.cmp.js'
import about from './pages/about.cmp.js'
import bookApp from './pages/book-app.cmp.js'

import bookAdd from './pages/book-add.cmp.js'
import bookList from './cmps/book-list.cmp.js'
import bookFilter from './cmps/book-filter.cmp.js'
import bookDetails from './cmps/book-details.cmp.js'

// import aboutDetails from './cmps/about-details.cmp.js'
// import aboutTeam from './cmps/about-team.cmp.js'
// import bookAppCmp from './cmps/book-app.cmp.js'


const routes = [
    { path: '/', component: home },
    { path: '/about', component: about },
    { path: '/book', component: bookApp },
    { path: '/add', component: bookAdd },

    { path: '/book/:id', component: bookDetails },
    // {
    //     path: '/about',
    //     component: aboutPage,
    //     children: [
    //         { path: '', component: aboutDetails },
    //         { path: 'team', component: aboutTeam },
    //     ]
    // },
];

export default routes