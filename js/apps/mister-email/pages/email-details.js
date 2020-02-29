import { emailService } from '../services/email-service.js'

export default {
    template: `
        <section v-if="email">
    <h1>{{email.adress}}</h1>
    <h2>{{email.subject}}</h2>
    <p>{{email.body}}</p>
    <h3>{{email.sentAt}}</h3>
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
    created() {
        this.getEmail()
    }
}
