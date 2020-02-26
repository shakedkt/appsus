export default {
    template: `
    <section>
        <article v-if="email" class="show">
            <div>
        <img src="img/expand.png" @click="onOpenDeatils()" class="add-img"/>
        <img src="img/trash.png" @click="onDelelteMail(book)" class="trash-img"/>
</div>
        <h2>{{email.subject}}</h2>
        <h4>{{email.sender}}</h4> <h4 class="sender"> {{emailForDisplay}} </h4>
        <div class="icons">

        </div>
        </article>               
</section>
 `,
   methods: {

},
        props: ['email'],
    computed: {
        emailForDisplay() {
           return '<' + this.email.sender + '>'
        }
    },
}