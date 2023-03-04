export default {
    props: ['email'],

    template: `
        <section>
        <RouterLink :to="'/email/'+email.id" :style="isRead" class="email-preview" >
            <main class="preview-main">
            <div class="preview-from"> {{ email.from }} </div> 
            <div class="preview-subject"> {{ email.subject }}| {{ email.body }} </div>
            <div class="preview-time"> {{ email.sentAt }} </div>
        </main>
        </RouterLink>
        <!-- <button class="btn-email-remove" @click="removeEmail(email.id)"> X </button> -->
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