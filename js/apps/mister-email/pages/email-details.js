import {emailService} from '../services/email-service.js'


/*
<EmailDetails> • Routable component (page) 
• show the entire email 
• allow deleting an email (using a service)
*/

/*
export default {
    template:`
        <section class="car-details-container" v-if="car">
            <h1>CAR DETAILS - {{car.vendor}}</h1>
            <pre>{{car}}</pre>
           
            <section v-if="nextPrevCarIds">
                <router-link :to="nextPrevCarIds.prevId">PREV</router-link>
                <router-link :to="nextPrevCarIds.nextId">NEXT</router-link>
            </section>
        </section>
    `,
    data(){
        return {
            car:null,
            nextPrevCarIds : null
        }
    },
   
    watch: {
        '$route.params.id'(to,from){
            console.log('ROUTE CHANGED, loading a car');
            this.getCar()
        }
    },
    methods:{
        getCar(){
            const carId = this.$route.params.id
            emailService.getById(carId)
            .then(car => {
                this.car = car 
                this.nextPrevCarIds = emailService.getNextPrevCarIds(car.id);   
            })
        }
    },
    created(){
        this.getCar()
    }
}
*/