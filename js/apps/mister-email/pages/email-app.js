import { eventBus, EVENT_SEND_EMAIL } from '../services/eventBus.service.js';
import { emailService } from '../services/email-service.js';
import emailList from '../cmps/email-list.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'
import navBar from '../cmps/nav-bar.cmp.js'

export default {
    template: `
    <section class="email-container">
        <email-filter @set-filter="setFilter"></email-filter>
        
        <button class="compose-btn" @click="composeNewMail">Compose</button>
            <div class="nav-and-body">
        <nav-bar></nav-bar>
        <email-list v-if="emails" :emails="emailsForDisplay"></email-list>
            </div>
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
            if (!this.filterBy) return this.emails;
            return this.emails.filter(email => {
                    return email.sender.includes(this.filterBy.sender)
                }
            );
        }
    },
    methods: {
        composeNewMail() {
            eventBus.$emit(EVENT_SEND_EMAIL, true)
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        }
    },
    components: {
        emailList,
        emailFilter,
        navBar
    }
}