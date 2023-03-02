import EmailPreview from './EmailPreview.js'

export default {
    props: ['emails'],
    template: `
    
    <section class="email-list">
        <ul>
            <li v-for="email in emails" :key="email">
                <EmailPreview :email="email" @removeEmail="removeEmail" />
            </li>
        </ul>
    </section>
    `,

    data() {
        return {

        }
    },
    methods: {
        removeEmail(emailId) {
            this.$emit('removeEmail', emailId)
            console.log('emailId : ', emailId)
        },
    },
    computed: {

    },
    created() {

    },
    components: {
        EmailPreview
    },
    emits: [],
}