import { emailService } from '../services/email-service.js';

export default {
    template: `
    <section>
        <article v-if="email" class="big-prev-continer">
            <div class="main-content">
        <h2 class="big-prev-header">{{email.subject}}</h2>
        <h4 class="sender"> from: {{email.sender}}</h4> <h4 class="adress"> {{emailForDisplay}} </h4>
        <p>{{email.body}}</p>        
            </div>
            <div class="buttons-continer">
            <router-link :to="'/email/'+email.id" :email="email"> 
        <i class="fas fa-expand"></i>
        </router-link>
        <i class="fas fa-trash" @click="onDelelteMail(email.id)"></i>
            </div>
        </article>               
    </section>
 `,
    props: ['email'],
    computed: {
        emailForDisplay() {
            return '<' + this.email.adress + '>'
        }
    }, 
    methods: {
        onDelelteMail(emailId) {
            emailService.removeEmail(emailId)
                .then(()=>{
                    eventBus.$emit(EVENT_SHOW_MSG, {
                        txt: `email ${emailId} deleted succesfully`,
                        type: 'success'
                    })
                })
        }
    }
}

