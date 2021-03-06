import { eventBus, EVENT_SEND_EMAIL } from '../services/eventBus.service.js';
import { emailService } from '../services/email-service.js';

export default {
    template: `
    <form v-if="newEmail" class="save-email">
    <h4 class="compose-top">
    New Email 

    <i class="fas fa-times close-NewEmail-btn" @click.prevent="closeNewEmail"></i>
    </h4>
<div class="form-section">
        <div class="form-group">
        <label for="email-to">Send to:</label>
        <input type="email" class="form-control" ref="adressInput" placeholder="Enter email">
        </div>
     
        <div class="form-group">
        <label for="email-subject">Subject:
        <input type="text" class="form-control"  ref="subjectInput" placeholder="Enter subject">
        </label>
        </div>
     
        <div class="form-group email-body">
        <textarea class="email-content"  rows="4" columns="10" type="text" ref="bodyInput" style="border: none" placeholder="Enter email content..."></textarea>
        </div>
</div>
    <div class="buttons-conteiner">
        <button @click="saveEmail" type="submit" class="save-btn" form="nameform" value="Submit" @click.prevent="closeNewEmail">Send</button>
       <i class="fas fa-trash-alt clear-btn" @click.prevent="clear"></i>
    </div>
        </form>

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
                this.newEmail = false
            }
        }
    }