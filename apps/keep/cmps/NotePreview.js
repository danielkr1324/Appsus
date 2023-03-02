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

            <button title="delete note"
              @click="deleteNote(note.id)" 
              class="note-icon delete" >
              <i class="fa-solid fa-trash"></i>
            </button>

            <button title="duplicate note" 
              @click="duplicateNote(note.id)"
              class="note-icon duplicate">
              <i class="fa-solid fa-clone"></i>
            </button>



        </article>
    `,

  computed: {
    styleObject() {
      return this.note.style.backgroundColor
        ? `background-color: ${this.note.style.backgroundColor}; border: 1px solid ${this.note.style.backgroundColor}`
        : ''
    },
  },
  methods: {
    deleteNote(noteId) {
      this.$emit('noteDeleted', noteId)
      if (this.editedNote) this.$emit('editor-opened')
      this.editedNote = null
    },
    duplicateNote(noteId) {
      this.$emit('note-duplicate', noteId)
    },
  },
  components: {
    NoteTodos,
    NoteTxt,
    NoteImg,
    NoteVideo,
  },
}
