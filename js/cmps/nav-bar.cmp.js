export default {
    template: `
    <div class="navbar">
    <router-link class="navbar-links" to="/" exact>
        Home
        </router-link>
        |
        <router-link class="navbar-links" to="/email" exact>
        Mister Email
        </router-link>
        |
        <router-link class="navbar-links" to="/miss-keep" exact>
        Miss Keep
        </router-link>
        |
        <router-link class="navbar-links" to="/miss-books" exact>
        Miss Books
    </router-link>
    |
    <router-link class="navbar-links" to="/AboutUs" exact>
        About Us
    </router-link>
    </div>
    `
}