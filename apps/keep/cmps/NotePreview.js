import NoteTodos from './NoteTodos.js'
import NoteImg from './NoteImg.js'
import NoteTxt from './NoteTxt.js'
import NoteVideo from './NoteVideo.js'

export default {
  props: ['note'],
  template: `
        <article class="note-preview"  :style="styleObject">
            <h2>{{ note.info.title }}</h2>
            <h3>{{ note.info.txt }}</h3>
        </article>
    `,
  computed: {
    styleObject() {
      return {
        background: this.note.style.backgroundColor
          ? this.note.style.backgroundColor
          : '',
        color: 'black',
      }
    },
  },

  components: {
    NoteTodos,
    NoteTxt,
    NoteImg,
    NoteVideo,
  },
}
