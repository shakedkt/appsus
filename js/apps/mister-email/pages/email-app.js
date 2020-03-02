import { eventBus, EVENT_SEND_EMAIL } from '../services/eventBus.service.js';
import { emailService } from '../services/email-service.js';
import emailList from '../cmps/email-list.cmp.js'
import emailSearch from '../cmps/email-search.cmp.js'
import navBar from '../cmps/nav-bar.cmp.js'

export default {
    template: `
    <section class="email-container">
    <email-search class="email-search" @set-search="setSearch"></email-search>
            <div class="nav-and-body">
            <div class="nav">
        <nav-bar :emails="emails" @set-filter="setFilter"></nav-bar>
        <div class="compose-btn" @click="composeNewMail"> 
        <i class="fas fa-plus">Compose</i>
        </div>
        </div>
        <email-list v-if="emails" :emails="emailsForDisplay" ></email-list>
            </div>
        </section>
    `,
    data() {
        return {
            emails: [],
            filterBy: null,
            searchBy: null
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
            if (!this.filterBy && !this.searchBy) return this.emails;
            let filteredEmails = this.getFilteredEmails()

            if (this.searchBy && this.searchBy.subject) {
                return filteredEmails.filter(email =>
                    email.subject.includes(this.searchBy.subject)
                );
            }
            return filteredEmails
        },
    },
    methods: {
        composeNewMail() {
            eventBus.$emit(EVENT_SEND_EMAIL, true)
        },
        setFilter(filter) {
            this.filterBy = filter
        },
        setSearch(searchBy) {
            this.searchBy = searchBy
        },
        getFilteredEmails() {
            if (!this.filterBy) return this.emails
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
                    if (email.sender === 'shaked') return email
                })
            }
        }
    },
    components: {
        emailList,
        emailSearch,
        navBar
    }
}