import { emailService } from '../services/email.service.js'
// import { eventBusService } from '../../../services/event-bus.service.js'

import EmailNav from '../cmps/EmailNav.js'
// import EmailCompose from '../cmps/EmailCompose.js'

export default {
  template: `
    <section class="email-details" v-if="email">
        <EmailNav/>
        <div class="details-nav"> 
            <RouterLink to="/email"> <button><i class="fa-solid fa-arrow-left"></i> </button></RouterLink>
            <button class="btn-email-remove" @click="removeEmail(email.id)"> <i class="fa-regular fa-trash-can"></i> </button>
        </div>
        <div class="email-body">
            <div class="details-subject"> {{ email.subject }} </div> 
            <div class="details-from"> {{ email.from }} </div>
            <p class="details-body"> {{ email.body }} </p>
        </div>
    </section>
    `,
  data() {
    return {
      email: null,
    }
  },
  methods: {
    loadEmail() {
      emailService.getEmail(this.emailId).then(email => {
        this.email = email
        // console.log('email : ', email)
      })
    },
    removeEmail(emailId) {
      console.log('emailId : ', emailId)
      // eventBusService.emit('emailRemoved', emailId)
    },
  },
  computed: {
    emailId() {
      return this.$route.params.emailId
    },
  },
  created() {
    this.loadEmail()
  },
  components: {
    EmailNav,
    // EmailCompose,
  },
}
