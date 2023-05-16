export default {
  props: ['email'],

  template: `
        <section class="email-preview">
        <RouterLink :to="'/email/'+email.id" :style="isRead" >
            <main class="preview-main">
            <div class="preview-from"> {{ email.from }} </div> 
            <div class="preview-subject"> {{ email.subject }} &nbsp;|&nbsp; {{  limitBodyLength }} </div>
            <!-- <div class="preview-time" :sentAt="convertDate(email.sentAt)"> {{sentAt}} </div> -->
          </main>
        </RouterLink>
        <button class="btn-email-remove" @click.stopPropagation="removeEmail(email.id)">  <i class="fa-regular fa-trash-can"></i> </button>
        </section>
    `,

  methods: {
    removeEmail(emailId) {
      this.$emit('emailRemoved', emailId)
    },
  },

  computed: {
    isRead() {
      return {
        fontWeight: this.email.isRead ? 'normal' : 'bold',
      }
    },
    limitBodyLength() {
      if (this.email.body.length + this.email.subject.length > 60) return (this.email.body.substring(0, 60 - this.email.subject.length) + '...')
      else return this.email.body
    }
  },
}
