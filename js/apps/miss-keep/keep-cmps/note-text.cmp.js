export default {
    template: `
    <div class="note-text">
    <h1>note text here</h1>
        <h1>{{txt}}</h1>
        <pre>{{txt}}</pre>
    </div>
            
    `,
    // data() {

    // },
    props: ['txt'],
    created() {
        console.log('im here', this.txt)
    }





}