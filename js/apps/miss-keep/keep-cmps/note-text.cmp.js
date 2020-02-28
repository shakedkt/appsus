export default {
    template: `
    <div class="note-text">
  

            
    `,
    data() {
        return {
            val: ''
        }

    },
    props: ['notes'],

    created: {
        check() {
            console.log('here?', this.val)
            console.log('here?', this.notes)
        }

    },
    methods: {
        reportVal() {
            this.$emit('setVal', this.val)
            console.log('reporting val')
        }

    }


}