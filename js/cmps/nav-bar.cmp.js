export default {
    template: `
    <div class="navbar">
    <router-link class="navbar-links home" to="/" exact>
        Home
        </router-link>
        
        <router-link class="navbar-links mister-email" to="/email" exact>
        Mister Email
        </router-link>
        
        <router-link class="navbar-links miss-keep" to="/miss-keep" exact>
        Miss Keep
        </router-link>
        
        <router-link class="navbar-links miss-book" to="/Books" exact>
        Miss Books
    </router-link>
    
    <router-link class="navbar-links about-us" to="/AboutUs" exact>
        About Us
    </router-link>
    </div>
    `
}