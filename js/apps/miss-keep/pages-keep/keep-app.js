// import { eventBus, EVENT_SEND_EMAIL } from '../services/eventBus.service.js';
import { keepService } from '../services-keep/keep-service.js';
// import noteText from '../keep-cmps/note-text.cmp.js'
import keepList from '../keep-cmps/keep-list.cmp.js'



export default {
    template: `
    <section class="miss-keep-container">
        <h1>Miss Keep</h1>
<<<<<<< HEAD
        <h2 v-if="notes">notes</h2>
        <ul>
            <li v-for="(note, idx) in notes" >
                <!-- if its componenet of this type (text) so we render it like this -->
                <h4>{{note.type}}, {{note.isPinned}},{{note.info.txt}}</h4>  
            </li>
        </ul>
        <!-- <email-filter @set-filter="setFilter"></email-filter>
        <button class="compose-btn" @click="composeNewMail">Compose</button>
        <email-list v-if="emails" :emails="emailsForDisplay"></email-list> -->
=======
        <h2>notes</h2> 
        <div class="make-note">
            <label>Make New Note</label>
             <input type="text" class="note-text-container" placeholder="Enter your text here...">
             <section class="btn-section-note">
                <button class="txt-btn">Text</button>
                <button class="image-btn">Image</button> 
                <button class="todos-btn">Todos</button>
                <button class="video-btn">Video</button>
            </section>
        </div>
        </div>                
             <keep-list v-if="notes" :notes="notesForDisplay"></keep-list>
             
          <!-- <componenet :is="note.type" :notes="notesForDisplay" v-for="(note, idx) in notes"></componenet> -->
      
     
>>>>>>> 387fe4e7475c96a77cabfd933700771203edbf78
    </section>
    `,
    data() {
        return {
            notes: null
        }
    },
    methods: {

    },

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