// import { eventBus, EVENT_SEND_EMAIL } from '../services/eventBus.service.js';
import { keepService } from '../services-keep/keep-service.js';
// import noteText from '../keep-cmps/note-text.cmp.js'
import keepList from '../keep-cmps/keep-list.cmp.js'



export default {
    template: `
    <section class="miss-keep-container">
        <h1>Miss Keep</h1>
        <h2>notes</h2>                 
             <keep-list v-if="notes" :notes="notesForDisplay"></keep-list>
             
          <!-- <componenet :is="note.type" :notes="notesForDisplay" v-for="(note, idx) in notes"></componenet> -->
      
     
    </section>
    `,
    data() {
        return {
            notes: null
        }
    },
    // methods: {},

    created() {
        this.notesForDisplay
    },
    computed: {
        notesForDisplay() {
            keepService.getNotes().then(notes => {
                this.notes = notes
            })
            return this.notes
        }
    },
    components: {
        keepList
        // emailList,
        // emailFilter

    }
}