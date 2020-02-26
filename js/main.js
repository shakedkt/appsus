import navBar from './cmps/nav-bar.cmp.js'

new Vue({
    el: '#appSus',
    router,
    template: `
    <section> 
        <nav-bar></nav-bar>
        <router-view></router-view>
    </section>
    `,
    components: {
        'nav-bar': navBar
    }
})