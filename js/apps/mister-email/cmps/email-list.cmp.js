
//import carPreview from './car-preview.cmp.js'

export default {
    template: `
    <section class="list-email-container">
        <h2>emails List</h2>
       
    </section>
    `,
    props: ['emails'],
    components: {
       // carPreview
    },
    created() {
        console.log('im created now');
        
    }
}
/*
 <ul>
            <li v-for="(currCar, idx) in cars" >
                <car-preview :car="currCar"></car-preview>
                <button @click="$emit('remove', currCar.id)">x</button>
            </li>
        </ul>
        */