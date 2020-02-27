import { emailService } from '../services/email-service.js'

export default {
    template: `
        <section" v-if="email">
    <h1>{{email.adress}}</h1>
    <h2>{{email.subject}}</h2>
    <p>{{email.body}}</p>
    <h3>{{email.sentAt}}</h3>
        </section>
    `,
    data() {
        return {
            email: email,
        }
    },
    watch: {
        '$route.params.id'(to, from) {
            console.log('ROUTE CHANGED, loading a email');
            this.getEmail()
        }
    },
    methods: {
        getEmail() {
            const emailId = this.$route.params.id
            emailService.getById(emailId)
                .then(email => {
                    this.email = email
                })
        }
    },
    created() {
        this.getEmail()
        console.log(this.email);
    }
}
