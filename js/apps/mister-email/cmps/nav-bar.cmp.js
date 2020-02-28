
export default {
    template: `
        <ul class="nav-bar">       
                    <li class="inbox fas fa-inbox">inbox </li>      
                    <li class="starred fas fa-star">starred </li>
                    <li class="sent fas fa-share-square">sent mail </li>
                    <li class="draft fab fa-firstdraft">drafts </li>
        </ul>
        `,

    data() {
        return {
            bigPrevIsOpen: false,
        }
    },
    props: ['email'],
    computed: {
      
        }
        ,
    methods: {
    
    },
    components: {
        
    }

}