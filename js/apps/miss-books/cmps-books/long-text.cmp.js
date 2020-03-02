export default {
    template: `
    <section class="book-description" >
    <div>
            <p v-if="!isShow">description: {{shortDescrip}}</p>
            <p v-else>description: {{str}}</p>
            <button v-if="!isShow" :class="{toggled: isShow}" @click="isShow = !isShow">Read more</button>
            <button v-else :class="{toggled: isShow}" @click="isShow = !isShow">Read less</button>
            <!-- <a :href="car.url" target="_blank">More Details</a> -->
            <!-- <button @click="removeCar(car.id)">x</button> -->
</div>
</section>
    `,
    data() {
        return {
            isShow: false
        }
    },
    props: ['str'],

    methods: {
        check() {
            console.log('here?', this.str)
        }
    },
    computed: {
        shortDescrip() {
            return this.str.substr(0, 100) + '...'
        },

    },
    created() {
        this.check();
    }
}