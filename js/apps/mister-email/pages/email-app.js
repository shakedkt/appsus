import { eventBus, EVENT_SEND_EMAIL } from '../services/eventBus.service.js';
import { emailService } from '../services/email-service.js';
import emailList from '../cmps/email-list.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'


export default {
    template: `
    <section class="email-container">
        <h1>My emailbox</h1>
        <i class="fas fa-thumbtack"></i>
        <email-filter @set-filter="setFilter"></email-filter>
        <button @click="composeNewMail">+Compose</button>
        <email-list v-if="emails" :emails="emailsForDisplay"></email-list>
    </section>
    `,
    data() {
        return {
            emails: [],
            filterBy: null
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
            // console.log(this.filterBy)
            if (!this.filterBy) return this.emails;
            return this.emails.filter(email => {
                    // console.log(email.sender)
                    return email.sender.includes(this.filterBy.sender)
                }
                // && email.speed > this.filterBy.minSpeed
            );
        }

        // return this.emails

    },
    methods: {
        composeNewMail() {
            eventBus.$emit(EVENT_SEND_EMAIL, true)
        },
        setFilter(filterBy) {
            // console.log('filter!');
            this.filterBy = filterBy
        }

    },
    components: {
        emailList,
        emailFilter

    }
}