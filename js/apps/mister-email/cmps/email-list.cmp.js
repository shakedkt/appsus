import emailPreview from './email-preview.cmp.js'
import emailCompose from './email-compose.cmp.js'
//<email-preview :email="currEmail"></email-preview>
// {/* <button @click="$emit('remove', currCar.id)">x</button> */}



export default {
    template: `
    <section class="list-email-container">
        <h2>emails List</h2>
        <ul>
            <li v-for="(currEmail, idx) in emails" class="email-prev">
                <email-preview :email="currEmail"></email-preview>
            </li>
        </ul>
        <email-compose></email-compose>
    </section>
    `,
    props: ['emails'],
    components: {
        emailPreview,
        emailCompose,
    },
    created() {
        // console.log(this.emails);

    },



}
/*

        */