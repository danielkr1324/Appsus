export default {
  props: [],
  template: `
    <section class="email-nav">
        <div class="btns-nav">
            <div @click="setFolder('inbox')"><i class="fa-solid fa-inbox"></i> <span>Inbox</span></div>
            <div><i class="fa-regular fa-star"></i> <span>Stared</span></div>
            <div @click="setFolder('sent')"><i class="fa-solid fa-arrow-right"></i> <span>Sent</span></div>
            <div><i class="fa-regular fa-note-sticky"></i> <span>Draft</span></div>
            <div><i class="fa-regular fa-trash-can"></i> <span>Trash</span></div>
        </div>
    </section>
    `,

  data() {
    return {
      isOnRead: false,
      folder: null
    }
  },

  methods: {
    setFolder(folderName) {
      this.folder = folderName
      this.$emit('folder', this.folder)
    }
  },
}
