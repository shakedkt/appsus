import noteText from './note-text.cmp.js'
export default {
    template: `
    <section class="keep-list">
        <h2>Note List</h2>
              <!-- <div v-for="(note, idx) in notes" :note="notesForDisplay">{{note.type}} | {{note.info.txt}} </div> -->
              <!-- <div v-for="(note, idx) in notes" >{{note.type}} {{note.info}} </div> -->
              
              <component :is="info.noteType" :txt="info.txt"></component>
    </section>
       
    `,
    data() {
        return {
            currComp: this.info.noteType
        }
    },

    props: ['info'],
    components: {
        noteText
    },
    created() {
        // console.log(this.info)
    },
    // methods: {
    //     infoForDisplay(info) {
    //         console.log(info.txt)
    //         return info.txt

    //     }
}
//     }
// }