import { booksService } from '../services-books/books-service.js'

export default {
    template: `
        <section class="review-add">
        <h2>Review Add</h2>
        <form class="review-add-form" @submit.prevent="addReveiws">
            <div class="review-top-bar">
            <label class="review-full-name">
            Full Name: <input type="text" v-model="reveiw.fullName" placeholder="Enter your full name"/>
            </label>
            <select class="rate-book" v-model="reveiw.selectedRate">
                <option disabled value="">Rate: </option>
                <option v-for="inx in 5">{{inx}}</option>
            </select>
            <input type='date' v-model="reveiw.date" class="date-book-input" id='datetimepicker4' />
</div>

            <textarea class="txt-area-review" id="txt-area" v-model="reveiw.txt" rows="4" cols="50">
                Enter your review here...
            </textarea>
            <button class="save-review-btn">Save</button>
        </form>
    </section>
    `,
    data() {
        return {
            reveiw: {
                fullName: 'Books Reader',
                selectedRate: 1,
                date: new Date(),
                txt: 'no review for you!!!'
            }
        }

    },
    created() {},
    methods: {
        addReveiws() {
            const bookId = this.$route.params.id
            booksService.saveReview(this.reveiw, bookId)
                .then((book) => {
                    this.reviewsToShow = book.reveiws
                })

        }


    }


}