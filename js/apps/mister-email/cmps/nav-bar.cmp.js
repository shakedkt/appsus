
export default {
    template: `
        <ul class="nav-bar">       
                    <li @click="filterByType('inbox')" class="inbox fas fa-inbox">inbox({{unread}}) </li>      
                    <li @click="filterByType('stared')" class="starred fas fa-star"> starred </li>
                    <li @click="filterByType('sentMail')" class="sent fas fa-share-square">sent mail </li>
                    <li class="draft fab fa-firstdraft">drafts </li>
        </ul>
        `,
    data() {
        return {
            filterBy: null,
        }
    } 
    ,
    props: ['emails'],
    
    computed: {
        unread() {
            var unreadeMails = []

            this.emails.forEach(email => {
                if (!email.isRead) unreadeMails.push(email)
            });
            return unreadeMails.length
        } 
    },
    methods: {
        filterByType(filterType) {
            this.filterBy = filterType
            this.$emit('set-filter', this.filterBy)
        }
    }
}