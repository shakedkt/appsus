import { emailService } from '../services/email-service.js'

export default {
    template: `
        <section v-if="email">
        <router-link class="navbar-links mister-email" to="/email" exact>
        <i class="fas fa-chevron-circle-left"></i>
        </router-link>
    <h1>from: {{email.adress}}</h1>
    <h2>subject: {{email.subject}}</h2>
    <p>{{email.body}}</p>
    <h3>sent at:{{emailDateChange}}</h3>
        </section>
    `,
    data() {
        return {
            email: null,
        }
    },
    watch: {
        '$route.params.id'(para) {
            this.getEmail()
        }
    },
    methods: {
        getEmail() {
            const emailId = +this.$route.params.id

            emailService.getEmailById(emailId)
            .then(email => {
                    this.email = email
                })
        }
    },
    computed: {
        emailDateChange() {
            var timeInMils = this.email.sentAt
            var date = new Date(timeInMils)
            var dd = date.getDate();
            var mm = date.getMonth() + 1; //January is 0!
            var yyyy = date.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            var date = dd + '/' + mm + '/' + yyyy;
            var emailDate = date.toString()

            return emailDate
        }
    },
    created() {
        this.getEmail()
    }
}
