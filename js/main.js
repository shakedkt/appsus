import navBar from './cmps/nav-bar.cmp.js'
import appSusHeader from './cmps/appsus-header.cmp.js'
import { router } from './routes.js'

new Vue({
    el: '#appSus',
    router,
    template: `
    <section class="our-app">
    <div class="header-nav"> 
            <appsus-header>
                </appsus-header>
                <nav-bar></nav-bar>
         </div>
                <router-view></router-view>
         <footer>
             Rotem 🐣 Shaked &copy; 2020 
        </footer>
    </section>
    `,
    components: {
        'nav-bar': navBar,
        'appsus-header': appSusHeader
    }
})