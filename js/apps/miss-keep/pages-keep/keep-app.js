// import { eventBus, EVENT_SEND_EMAIL } from '../services/eventBus.service.js';
import { keepService } from '../services-keep/keep-service.js';
// import noteText from '../keep-cmps/note-text.cmp.js'
import noteText from '../keep-cmps/note-text.cmp.js'
import keepList from '../keep-cmps/keep-list.cmp.js'



export default {
    template: `
    <section class="miss-keep-container">
        <h1>Miss Keep</h1>
        <h2>notes</h2> 
        <form class="make-note">
            <label>Make New Note</label>
             <input v-on:keyup.enter="onAddNote($event)" ref="inputVal" v-model="info.txt" type="text" class="note-text-container" placeholder="Enter your text here...">
             <section class="btn-section-note">
                <button @click="changeNoteType($event)" class="txt-btn"><i class="fas fa-font"></i></button>
                <button @click="changeNoteType($event)" class="image-btn"><i class="far fa-image"></i></button> 
                <button @click="changeNoteType($event)" class="todos-btn"><i class="fas fa-list-ul"></i></button>
                <button @click="changeNoteType($event)" class="video-btn"><i class="fab fa-youtube"></i></button>
            </section>
        </div>
    </form>                
             <keep-list v-if="notes" :notes="notesForDisplay"></keep-list>
             
          <!-- <componenet :is="note.type" :notes="notesForDisplay" v-for="(note, idx) in notes"></componenet> -->
      
     
    </section>
    `,
    data() {
        return {
            notes: null,
            noteType: 'note-text',
            info: { txt: '' }
        }
    },
    methods: {
        onAddNote(event) {
            var txt = this.info.txt
            keepService.createNote(this.noteType, txt)
            this.clearInput(event)
        },
        changeNoteType(ev) {
            console.log('yes?')
            const whichBtnClicked = ev.target.classList.value
            switch (whichBtnClicked) {
                case 'txt-btn':
                    {
                        this.noteType = 'note-text'
                        console.log('is text!')
                        break;
                    }
                case 'image-btn':
                    {
                        this.noteType = 'image-btn'
                        console.log('is image!')
                        break;
                    }
                case 'todos-btn':
                    {
                        this.noteType = 'todos-btn'
                        console.log('is todos!')
                        break;
                    }
                case 'video-btn':
                    {
                        this.noteType = 'video-btn'
                        console.log('is video!')
                        break;
                    }
            }


        },
        clearInput(event) {
            this.$refs.inputVal.value = ''
            console.log(this.$refs.inputVal.value) //////cant clear input!
        }

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
        keepList,
        noteText
        // emailList,
        // emailFilter

    }
}