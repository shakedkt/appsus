import bigPreview from './big-preview.cmp.js'

export default {
    template: `
        <article v-if="email" :class ="{readed: email.isRead}">     
        <h4 @click="openBigPrev" class="email-prev-line" :class ="{readed: email.isRead,opend: bigPrevIsOpen}" >
       <p class="mail-subject"> {{email.subject}} </p> <p class="mail-body">{{showShortText}}</p> <p class="mail-date">{{emailDateChange}} </p>
         </h4>
         <hr v-if="bigPrevIsOpen">
        <big-preview :email="email" v-if="bigPrevIsOpen"> </big-preview>    
    </article>               
    `,
    data() {
        return {
            bigPrevIsOpen: false,
        }
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
            if (this.email.body.length > 100) return this.email.body.substr(0,100)+'...'
            return this.email.body
        }
        
    },
    methods: {
        openBigPrev() {
            this.bigPrevIsOpen = !this.bigPrevIsOpen
            
        }
    },
    components: {
        bigPreview
    }

}