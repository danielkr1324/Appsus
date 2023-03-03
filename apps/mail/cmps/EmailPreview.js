export default {
    props: ['email'],

    template: `
        <section>
        <RouterLink :to="'/email/'+email.id" :style="isRead" class="email-preview" >
            <span class="preview-from"> {{ email.from }} </span> |
            <span class="preview-subject"> {{ email.subject }}| {{ email.body }} </span>
            </RouterLink>
            <button class="btn-email-remove" @click="removeEmail(email.id)"> X </button>
        </section>
    `,

    methods: {
        removeEmail(emailId) {
            this.$emit('emailRemoved', emailId)
        }
    },

    computed: {
        isRead() {
            return {
                fontWeight: (this.email.isRead) ? 'normal' : 'bold'
            }
        }
    },
}