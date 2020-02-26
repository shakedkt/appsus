export default {
    template: `
        <article v-if="email"  :class ="{readed: email.isRead}">
        <h4>{{email.subject}}</h4>
    
        </article>               
    `,

    created() {

    },
    props: ['email']
}