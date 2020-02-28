import notetext from '../keep-cmps/note-text.cmp.js'
export default {
    template: `
    <section class="keep-list">
        <h2>Note List</h2>
              <!-- <div v-for="(note, idx) in notes" :note="notesForDisplay">{{note.type}} | {{note.info.txt}} </div> -->
              <note-text v-for="(note, idx) in notes" :note="notesForDisplay">{{note.type}} | {{note.info.txt}} </note-text>
    </section>
       
    `,
    // data() {
    //     return {
    //         notes: null
    //     }

    // },
    props: ['notes'],
    components: {
        notetext
    }





}