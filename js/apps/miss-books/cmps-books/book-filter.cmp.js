export default {
    template: `
    <section class="book-filter">
        <h3>Filter Books</h3>
      
        <form @submit.prevent="emitFilter">
            <label>
                Title: <input type="text" v-model="filterBy.title" placeholder="Enter book title..."/>
            </label>
            <label>
                From price: <input type="number" v-model="filterBy.minPrice"/>
            </label>
            <label>
                To price: <input type="number" v-model="filterBy.maxPrice"/>
            </label>
            <button class="filter-btn">Filter</button>
        </form>
    </section>
    `,
    data() {
        return {
            filterBy: { title: '', minPrice: 0, maxPrice: 1000 }


        }
    },
    methods: {
        emitFilter() {
            this.$emit('set-filter', {...this.filterBy })
        },

    }



}