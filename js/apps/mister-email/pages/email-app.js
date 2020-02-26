// import {carService} from '../services/car.service.js';
// import carList from '../cmps/car-cmps/car-list.cmp.js'
// import carFilter from '../cmps/car-cmps/car-filter.cmp.js'
// import { eventBus, EVENT_SHOW_MSG } from '../services/event-bus.service.js';
//<car-filter @set-filter="setFilter" ></car-filter>
//        <email-list ></email-list>

export default {
    template: `
    <section class="mail-container">
        <h1>My mailbox</h1>
    </section>
    `,
    created(){
       console.log('im created mister email');
       
    },
    computed: {
       
    },
    methods: {
    
    },
    components:{
      //  carList,
       // carFilter
    }
}