import bigPreview from './big-preview.cmp.js' 
import { emailService } from '../services/email-service.js';


export default {
    template: `
        <article v-if="email" :class ="{readed: !email.isRead}">     
        <h4 @click="openBigPrev" class="email-prev-line" :class ="{readed: email.isRead,    opend: bigPrevIsOpen}" >
        <div class="inline-btns">
        <i class="fas fa-star prev-line-star" :class ="{starred: email.isStared}" @click="changeStarred" aria-hidden="true"></i>
        <i class="fab fa-readme" aria-hidden="true"></i>
    </div>

       <p>from: {{email.sender}}  <p> 
       <p class="mail-subject"> Subject: {{email.subject}} </p> <p class="mail-body">{{showShortText}}</p> <p class="mail-date">{{emailDateChange}} </p>
      
         </h4>
         <hr v-if="bigPrevIsOpen">
        <big-preview :email="email" v-if="bigPrevIsOpen"> </big-preview>    
    </article>               
    `,
    data() {
        return {
            currEmail: null,
            bigPrevIsOpen: false,
        }
    },
    created() {
        this.getEmail()
    },
    props: ['email'],
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
        },
        showShortText() {
            if (this.email.body.length > 25) return this.email.body.substr(0,25)+'...'
            return this.email.body
        }
    },
    methods: {
        openBigPrev() {            
            this.bigPrevIsOpen = !this.bigPrevIsOpen
            this.currEmail.isRead = true
        },
        changeStarred(event) {
            this.currEmail.isStared = !this.currEmail.isStared
            this.currEmail.isRead = true
            event.stopPropagation()
        },
        getEmail(){
            const emailId = this.email.id
            emailService.getEmailById(emailId)
            .then(email => {
                this.currEmail = email        
            })
        }
    },
    components: {
        bigPreview
    }
}

