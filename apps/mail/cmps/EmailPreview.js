export default {
    props: ['email'],
    template: `
        <section class="email-preview" :style="isRead" @click="email.isRead = true">
        <RouterLink :to="'/email/'+email.id">
            <span class="preview-from"> {{ email.from }} </span> |
            <span class="preview-subject"> {{ email.subject }} </span> |
            <span class="preview-body"> {{ email.body }} </span>
            </RouterLink>
        </section>
            <button class="btn-email-remove" @click="removeEmail(email.id)"> X </button>
    `,
    data() {
        return {

        }
    },
    methods: {
        removeEmail(emailId) {
            this.$emit('removeEmail', emailId)
            console.log('emailId : ', emailId)
        }
    },
    computed: {
        isRead() {
            return {
                fontWeight: (this.isRead) ? 'normal' : 'bold'
            }
        }
    },
    created() {

    },
    components: {

    },
    emits: [],
}