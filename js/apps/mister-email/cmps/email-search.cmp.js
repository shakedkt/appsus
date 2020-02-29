export default {
    template: `
    <section class="email-filter">
        <input type="text" 
            placeholder="Search by subject name..." 
            v-model="filterBy.subject" 
        />

        <!-- <input type="text" 
            placeholder="search for "
            v-model.number="filterBy.isRead"
        /> -->
    </section>
    `,
    data() {
        return {
            filterBy: { subject: ''}
        }
    },
    watch: {
        filterBy: {
            handler(newVal) {
                this.emitFilter();
            },
            deep: true
        }
    },
    methods: {
        emitFilter() {
            this.filterBy.subject = this.filterBy.subject            
            this.$emit('set-search', this.filterBy)
        }
    }
}