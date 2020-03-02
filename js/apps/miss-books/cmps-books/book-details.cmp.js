import longText from '../cmps-books/long-text.cmp.js'
import reviewAdd from '../cmps-books/review-add.cmp.js'
import { booksService } from '../services-books/books-service.js'

export default {
    template: `
    <section v-if="book" class="book-details" :style="{ backgroundColor: changeColorByPrice }">
    <h2 class="book-deatils-header">{{book.title}}</h2>
        <img class="sale-img" src="/img/sale.png" v-if="isOnSale"/>
    <div>
            
            <h5>{{pageCount}}</h5>
            <h5>{{publishedDate}}</h5>
            <long-text :str="description" ></long-text>
            
            <section class="reviews-sect">
            <ul>Reveiws:
                <li v-for="review in book.reveiws">{{review.fullName}} | rate:{{review.selectedRate}} | from: {{review.date}}
               review: {{review.txt}}
                </li>
            </ul>
            </section>
            <review-add></review-add>
           
            <router-link class="back-books-btn" to="/miss-books" tag="button"><i class="fas fa-undo"></i></router-link>

          
 
</div>
</section>
    `,

    data() {
        return {
            book: null,
            str: ''
        }
    },


    computed: {
        pageCount() {
            if (this.book.pageCount < 100) {
                return 'Light Reading'
            } else if (this.book.pageCount > 200) {
                return 'Decent Reading'
            } else if (this.book.pageCount > 500) {
                return 'Long reading'
            }
        },
        publishedDate() {
            var today = new Date().getFullYear()
            if (today - (this.book.publishedDate) < 1) {
                return 'New!'
            } else if (today - (this.book.publishedDate) > 10) {
                return 'Veteran Book'
            }
        },
        changeColorByPrice() {
            if (this.book.listPrice['amount'] > 150) {
                return this.color = 'rgb(247, 188, 188)'
            } else if (this.book.listPrice['amount'] < 20) {
                return this.color = 'rgb(195, 236, 195)'
            }
        },
        isOnSale() {
            return this.book.listPrice['isOnSale'];

        },
        description() {
            var str = this.book.description

            return str

        }
    },
    methods: {
        getBook() {
            const bookId = this.$route.params.id
            booksService.getBookById(bookId)
                .then(book => {
                    this.book = book

                })
        },


    },
    created() {
        this.getBook();
    },
    components: {
        'long-text': longText,
        'review-add': reviewAdd
    }
}