import EmailPreview from './EmailPreview.js'

export default {
    props: ['emails'],

    template: `
    <section class="email-list">
        <ul>
            <li v-for="email in emails" :key="email.id" >
                <EmailPreview :email="email" @emailRemoved="removeEmail" @click="changeToRead(email.id)"/>
            </li>
        </ul>
    </section>
    `,

    methods: {
        removeEmail(emailId) {
            this.$emit('emailRemoved', emailId)
            // console.log('emailId : ', emailId)
        },
        changeToRead(emailId) {
            // console.log('emailId : ', emailId)
            this.$emit('updateToRead', emailId)
        }
    },

    components: {
        EmailPreview
    },
}