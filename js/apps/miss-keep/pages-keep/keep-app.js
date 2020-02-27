// import { eventBus, EVENT_SEND_EMAIL } from '../services/eventBus.service.js';
import { keepService } from '../services-keep/keep-service.js';



export default {
    template: `
    <section class="miss-keep-container">
        <h1>Miss Keep</h1>
        <h2 v-if="notes">notes</h2>
        <ul>
            <li v-for="(note, idx) in notes" >
                <!-- if its componenet of this type (text) so we render it like this -->
                <h4>{{note.type}}, {{note.isPinned}},{{note.info.txt}}</h4>  
            </li>
        </ul>
        <!-- <email-filter @set-filter="setFilter"></email-filter>
        <button @click="composeNewMail">+Compose</button>
        <email-list v-if="emails" :emails="emailsForDisplay"></email-list> -->
    </section>
    `,
    data() {
        return {
            notes: null
        }
    },

    created() {
        this.notes = keepService.getNotes()
    },
    // computed: {


    // },
    // methods: {

    // },
    // components: {
    //     // emailList,
    //     // emailFilter

    // }
}