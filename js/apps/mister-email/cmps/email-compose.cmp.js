import { emailService } from '../services/email-service.js';

export default {
    template: `
        <form action="saveEmail">
  <div class="form-group">
    <label for="email-to">Send to:</label>
    <input type="email" class="form-control" id="email-to" aria-describedby="emailHelp" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label for="email-subject">Subject:</label>
    <input type="text" class="form-control" id="email-subject" placeholder="Enter subject">
  </div>
<div>
  <textarea type="text" id="text-body" rows="4" cols="50">
</div>

  <button type="submit" class="btn btn-primary">Send</button>
</form>              
    `,

    created() {

    },
    methods: {
        saveEmail() {
            console.log('on?')
        }
    }


}