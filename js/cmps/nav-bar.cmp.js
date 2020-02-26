export default {
    template: `
    <div class="navbar">
    <router-link class="navbar-links" to="/" exact>
        Home
        </router-link>
        |
        <router-link class="navbar-links" to="/Email" exact>
        Mister Email
        </router-link>
        |
        <router-link class="navbar-links" to="/Keep" exact>
        Miss Keep
        </router-link>
        |
        <router-link class="navbar-links" to="/Books" exact>
        Miss Books
    </router-link>
    |
    <router-link class="navbar-links" to="/AboutUs" exact>
        About Us
    </router-link>
    </div>
    `
}