import { eventBus, EVENT_SEND_EMAIL } from '../services/eventBus.service.js';
import { emailService } from '../services/email-service.js';
import emailList from '../cmps/email-list.cmp.js'
//import emailFilter from '../cmps/email-filter.cmp.js'
import navBar from '../cmps/nav-bar.cmp.js'

export default {
    template: `
    <section class="email-container">
       <div class="compose-btn" @click="composeNewMail"> 
    <i class="fas fa-plus">Compose</i>
    </div>
            <div class="nav-and-body">
        <nav-bar :emails="emails" @set-filter="setFilter"></nav-bar>
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

            if (this.filterBy === 'inbox') {
                return this.emails.filter(email => {
                    return email
                })
            }
            else if (this.filterBy === 'stared') {
                return this.emails.filter(email => {
                    return email.isStared
                })
            } else if (this.filterBy === 'sentMail') {
                return this.emails.filter(email => {  
                    if(email.sender === 'shaked') return email 
                })
            }
        }
    },
    methods: {
        composeNewMail() {
            eventBus.$emit(EVENT_SEND_EMAIL, true)
        },
        setFilter(filter) {
            this.filterBy = filter
        }
    },
    components: {
        emailList,
        //emailFilter,
        navBar
    }
}