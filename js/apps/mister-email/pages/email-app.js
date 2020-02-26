import { emailService } from '../services/email-service.js';
import emailList from '../cmps/email-list.cmp.js'


export default {
    template: `
    <section class="email-container">
        <h1>My emailbox</h1>
        <email-list v-if="emails" :emails="emailsForDisplay"></email-list>
    </section>
    `,
    data() {
        return {
            emails: []
        }

    },

    created() {
        emailService.getEmails()
            .then(emails => {

                this.emails = emails

            })

    },
    computed: {
        emailsForDisplay() {
            return this.emails
        }
    },
    methods: {

    },
    components: {
        emailList,
        // carFilter
    }
}