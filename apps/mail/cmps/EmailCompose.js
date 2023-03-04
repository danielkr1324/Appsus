import { emailService } from '../services/email.service.js'

export default {
  template: `
    <section class="email-compose">
            <form @submit.preventDefault()="send">
                <input type="text" v-model="email.to" placeholder="To">
                <input type="text" v-model="email.subject" placeholder="Subject">
                <input class="compose-body" type="text" v-model="email.body">
                <button class="btn-send">Send</button>
            </form>
            <pre> {{email}} </pre>
    </section>
    `,

  data() {
    return {
      email: emailService.getNewEmail(),
    }
  },

  methods: {
    send() {
      console.log('Here')
      this.$emit('sendEmail', this.email)
    },
  },
}
