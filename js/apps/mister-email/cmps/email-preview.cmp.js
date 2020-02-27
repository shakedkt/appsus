export default {
    template: `
        <article v-if="email"  :class ="{readed: email.isRead}">
        <h4 class="preview-email-line">{{email.subject}} |{{email.body}} |sent at: {{emailDateChange}}</h4>
        </article>               
    `,

    created() {

    },
    props: ['email'],
    computed: {
        emailDateChange() {
            var timeInMils = this.email.sentAt
            var date = new Date(timeInMils)
            var dd = date.getDate();
            var mm = date.getMonth() + 1; //January is 0!
            var yyyy = date.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            var date = dd + '/' + mm + '/' + yyyy;
            var emailDate = date.toString()


            return emailDate
        }
    },

}