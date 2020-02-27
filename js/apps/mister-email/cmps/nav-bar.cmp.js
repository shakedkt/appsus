
export default {
    template: `
        <section class=nav-bar>
        <li class="fas fa-inbox">inbox </li>
        <li class="fas fa-star">starred </li>
        <li class="fa-share-square">sent mail </li>
        <li>drafts </li>
        </section>
    
    
    
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
        bigPreview
    }

}