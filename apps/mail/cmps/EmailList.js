import EmailPreview from './EmailPreview.js'

export default {
    props: ['emails'],
    template: `

    <section class="email-list">
        <ul>
            <li v-for="email in emails" :key="email.id">
                <EmailPreview :email="email"/>
                <button class="btn-email-remove" @click="remove(email.id)"> X </button>
            </li>
        </ul>
    </section>
`,

    data() {
        return {

        }
    },
    methods: {
        remove(emailId) {
            this.$emit('remove', emailId)
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