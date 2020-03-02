export default {
    template: `
   
        <li v-if="book" class="books-preview" >
            <h4 class="book-prev-text">{{book.title}}</h4>
            <h5 class="book-prev-text">cost {{book.listPrice['amount']}}{{currencySign}}</h5>
            <img class="book-prev-img" :src="bookImag"/>
        </li>

    `,

    computed: {
        currencySign() {
            var currencyCode = this.book.listPrice['currencyCode']
            switch (currencyCode) {
                case 'EUR':
                    return '€'
                case 'ILS':
                    return '₪'
                case 'USD':
                    return '$'
            }
        },
        bookImag() {
            return this.book.thumbnail
        }

    },
    props: ['book'],

    methods: {

    }
}