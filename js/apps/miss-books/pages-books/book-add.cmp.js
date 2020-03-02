import { eventBus } from '../services-books/event-bus.service.js'
import { utilService } from '../services-books/util-service.js'
import { booksService } from '../services-books/books-service.js'


export default {
    template: `
        <section class="add-book-sec">
            <h1>Add Book</h1>
            <label>
            Enter book title to search: <input v-on:keyup.enter="submit" type="text" v-model="searchTxt" placeholder="Enter your full name"/>
            {{searchTxt}}
            </label>
            <ul v-if="booksToShow" v-for="book in booksToShow">
                <li >{{book.volumeInfo.title}}
                    <button @click="addBook(book)" class="add-btn">+</button>
                </li>
            </ul>
        </section>
    `,
    data() {
        return {
            searchTxt: '',
            booksToShow: []

        }

    },


    computed: {

    },
    methods: {
        submit() {
            booksService.getMoreBooks(this.searchTxt)
                .then((books) => {
                    this.booksToShow = books
                })
        },
        addBook(book) {
            booksService.createBook(book)
            console.log('here!')
            eventBus.$emit('showMsg', { txt: 'Saved the book' + book.volumeInfo.title })
        }
    },
    created() {
        // bookService.getMoreBooks().then(books => books);
    },
}