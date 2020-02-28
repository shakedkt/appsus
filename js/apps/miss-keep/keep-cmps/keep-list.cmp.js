export default {
    template: `
    <section class="keep-list">
        <h2>Note List</h2>
              <!-- <div v-for="(note, idx) in notes" :note="notesForDisplay">{{note.type}} | {{note.info.txt}} </div> -->
              <div v-for="(note, idx) in notes" >{{note.type}} | {{note.info.txt}} </div>
    </section>
       
    `,
    data() {
        return {
            noteType: 'note-text'
        }
    },

    props: ['notes'],







}