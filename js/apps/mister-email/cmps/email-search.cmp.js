export default {
    template: `
    <section >
        <input type="text" class="email-search-box" 
            placeholder="Search by subject name..." 
            v-model="filterBy.subject" 
        />
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