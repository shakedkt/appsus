export default {
    template: `
        <div class="app-header">
            <h1>My Header!!!!</h1>
            <!-- <button @click="goBack">GO BACK</button>
            <router-link to="/" exact>
                Home
            </router-link> -->
            <div class="header-links">
            <router-link class="nav" to="/" exact>
                    Home
            </router-link>
            <router-link class="nav" to="/about" exact>
                    About
            </router-link>
            <router-link class="nav" to="/book">
                    Books
            </router-link>
            <router-link class="nav" to="/add">
                    Add Book
            </router-link>
            </div>
        </div>
    `,
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}