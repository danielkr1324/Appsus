export default {
  props: ['note'],
  template: `
        <article class="note-preview"  :style="styleObject">
            <h2>{{ note.info.title }}</h2>
            <h3>{{ note.info.txt }}</h3>
            <img :src="note.info.url" alt="" />
        </article>
    `,
  computed: {
    styleObject() {
      return {
        background: this.note.style.backgroundColor,
        color: 'black',
      }
    },
  },
}
