import bookPreview from '../cmps-books/book-preview.cmp.js'


export default {
    template: `
    <section class="books-container">
    <h2>Books List</h2>
    <ul class="book-list">

    <router-link v-for="(book, idx) in books" :to="'/miss-books/'+book.id" class="book-link">
        <book-preview :book="book">
            </book-preview>
        </router-link>
  

</ul>
</section>
    `,

    props: ['books'],
    components: {
        'book-preview': bookPreview
    }
}