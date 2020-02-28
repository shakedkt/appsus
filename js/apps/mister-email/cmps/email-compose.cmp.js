import { eventBus, EVENT_SEND_EMAIL } from '../services/eventBus.service.js';
import { emailService } from '../services/email-service.js';

export default {
    template: `
    <div class="save-email-continer">
    <transition name="fade">
<form v-if="newEmail" class="save-email">
<button class="close-NewEmail-btn" @click.prevent="closeNewEmail">X</button>
  <div class="form-group">
     <label for="email-to">Send to:</label>
     <input type="email" class="form-control" ref="adressInput" placeholder="Enter email">
  </div>
  
  <div class="form-group">
    <label for="email-subject">Subject:</label>
    <input type="text" class="form-control"  ref="subjectInput" placeholder="Enter subject">
  </div>

  <div>
  <textarea type="text"  ref="bodyInput" rows="4" cols="50"></textarea>
  </div>

  <button @click="saveEmail" type="submit" class="save-btn" form="nameform" value="Submit" @click.prevent="closeNewEmail">Send</button>
  <button class="clear-btn" @click.prevent="clear"><img class="clear-btn-img" src="./img/Trash.png"/></button> 
</form>
</transition>
</div>      
    `,
    data() {
        return {
            newEmail: null,
            isSent: true
        }
    },
    created() {
        eventBus.$on(EVENT_SEND_EMAIL, (newEmail) => {
            this.newEmail = newEmail
        })
    },
    methods: {
        saveEmail() {
            var adress = this.$refs.adressInput.value
            var subject = this.$refs.subjectInput.value
            var body = this.$refs.bodyInput.value
            var sentAt = new Date()
            var idxOfStrudel = adress.search("@")
            var sender = adress.substring(0, idxOfStrudel)
            if (sender !== '') {
                emailService.createEmail(adress, subject, body, sentAt, sender, this.isSent)
            }
            this.clear()
        },
        clear() {
            this.$refs.adressInput.value = ''
            this.$refs.subjectInput.value = ''
            this.$refs.bodyInput.value = ''
        },
        closeNewEmail() {
            /*
            this.isSent = false
            this.saveEmail()
            this.isSent = true
            */
            this.newEmail = false
        }
    }


}