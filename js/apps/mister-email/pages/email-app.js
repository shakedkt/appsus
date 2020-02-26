import {emailService} from '../services/email-service.js';
import emailList from '../cmps/email-list.cmp.js'
// import carList from '../cmps/car-cmps/car-list.cmp.js'
// import carFilter from '../cmps/car-cmps/car-filter.cmp.js'
// import { eventBus, EVENT_SHOW_MSG } from '../services/event-bus.service.js';
//<car-filter @set-filter="setFilter" ></car-filter>
//        <email-list ></email-list>

export default {
    template: `
    <section class="email-container">
        <h1>My emailbox {{emails}}</h1>
        <email-list></email-list>
    </section>
    `,
    data(){
        return{
         emails: [] 
    }
      
    },

    created(){

          
        emailService.getEmails()
            .then(emails => {
                this.emails=emails
                console.log('im created mister mail');
            })
       
    },
    computed: {
       
    },
    methods: {
    
    },
    components:{
       emailList,
       // carFilter
    }
}