import { booksService } from '../services-books/books-service.js'

import bookFilter from '../cmps-books/book-filter.cmp.js'
import bookList from '../cmps-books/books-list.cmp.js'
import bookDetails from '../cmps-books/book-details.cmp.js'

export default {
    template: `
        <section class="my-app">
            <h1 class="books-app-header">Miss Books</h1>

            <book-filter @set-filter="setFilter"></book-filter>
            <book-list v-if="!selectedBook" :books="booksToShow" @selected="selectBook"></book-list>
            <book-details v-else :book="selectedBook"></book-details>
        </section>
    `,
    data() {
        return {
            books: '',
            filterBy: null,
            selectedBook: null
        }

    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books
            var filteredBooks = this.books;
            if (this.filterBy.title) {
                filteredBooks = filteredBooks.filter(book => {
                    return book.title.includes(this.filterBy.title)
                });
            }
            if (this.filterBy.minPrice) {
                filteredBooks = filteredBooks.filter(book => {
                    return (book.listPrice.amount > this.filterBy.minPrice)
                });
            }
            if (this.filterBy.maxPrice) {
                filteredBooks = filteredBooks.filter(book => {
                    return (book.listPrice.amount < this.filterBy.maxPrice)
                });
            }
            return filteredBooks;
        }
    },
    methods: {
        getBooks() {
            booksService.query().then(books => {
                this.books = books
            })
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        },

        selectBook(id) {
            this.bookId = id;
            booksService.getBook(id).then(book => {
                this.book = book
                this.selectedBook = book
            })

        }
    },
    created() {
        this.getBooks()

    },
    components: {
        'book-filter': bookFilter,
        'book-list': bookList,
        'book-details': bookDetails
    }
}