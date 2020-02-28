import emailPreview from './email-preview.cmp.js'
import emailCompose from './email-compose.cmp.js'

export default {
    template: `
    <section class="list-email-container">
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
}



