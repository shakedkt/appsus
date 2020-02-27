export default {
    template: `
    <section class="email-filter">
        <h3>Filter Emails</h3>
        <input type="text" 
            placeholder="Search by name..." 
            v-model="filterBy.sender" 
        />

        <!-- <input type="text" 
            placeholder="Minimal speed"
            v-model.number="filterBy.isRead"
        /> -->
    </section>
    `,
    data() {
        return {
            filterBy: { sender: '' }
        }
    },
    watch: {
        filterBy: {
            handler(newVal) {
                // console.log(' new', newVal);
                this.emitFilter();
            },
            deep: true
        }
    },
    methods: {
        emitFilter() {
            this.filterBy.sender = this.filterBy.sender.toLowerCase()
            this.$emit('set-filter', this.filterBy)
        }
    }



}