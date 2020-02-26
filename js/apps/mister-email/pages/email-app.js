import { eventBus, EVENT_SEND_EMAIL } from '../services/eventBus.service.js';
import { emailService } from '../services/email-service.js';
import emailList from '../cmps/email-list.cmp.js'


export default {
    template: `
    <section class="email-container">
        <h1>My emailbox</h1>
        <button @click="composeNewMail">+Compose</button>
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
        composeNewMail() {
            eventBus.$emit(EVENT_SEND_EMAIL, true)
        }

    },
    components: {
        emailList,
        // carFilter
    }
}