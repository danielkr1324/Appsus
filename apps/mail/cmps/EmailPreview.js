export default {
  props: ['email'],

  template: `
        <section>
        <RouterLink :to="'/email/'+email.id" :style="isRead" class="email-preview" >
            <main class="preview-main">
            <div class="preview-from"> {{ email.from }} </div> 
            <div class="preview-subject"> {{ email.subject }} &nbsp;|&nbsp; {{ email.body }} </div>
            <!-- <div class="preview-time" :sentAt="convertDate(email.sentAt)"> {{sentAt}} </div> -->
            <button class="btn-email-remove" @click.stop="removeEmail(email.id)">  <i class="fa-regular fa-trash-can"></i> </button>
        </main>
        </RouterLink>
        </section>
    `,

  data() {
    return {
      sentAt: null,
    }
  },

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
    convertDate(timeStamp) {
      console.log('timeStamp : ', timeStamp)
      var date = new Date(timeStamp * 1000)
      console.log('Unix Timestamp:', timeStamp)
      console.log('Date Timestamp:', date.getTime())
      console.log(timeStamp)
      console.log(
        'Date: ' +
          date.getDate() +
          '/' +
          (date.getMonth() + 1) +
          '/' +
          date.getFullYear() +
          ' ' +
          date.getHours() +
          ':' +
          date.getMinutes()
      )
    },
  },
}
