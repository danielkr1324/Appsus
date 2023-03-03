import NoteTodos from './NoteTodos.js'
import NoteImg from './NoteImg.js'
import NoteTxt from './NoteTxt.js'
import NoteVideo from './NoteVideo.js'
import NoteColorPalette from './NoteColorPalette.js'

export default {
  props: ['note'],
  template: `
        <article class="note-preview"  :style="styleObject">
        <component :is="note.type" 
          :note="note"
          @toggle="toggleTodo"/>
          

            
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

            <button title="background color-palette"
              @click="togglePalette"
              class="note-icon palette">
              <i class="fa-solid fa-palette"></i>
            </button>

            <NoteColorPalette 
              v-show="isPaletteOn" 
              @colorSelected="setBackground(note.id, $event)"
              @click="togglePalette"/>


        </article>
    `,
  data() {
    return {
      isPaletteOn: false,
    }
  },
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
    },
    toggleTodo(noteId, todo) {
      this.$emit('toggle', noteId, todo)
    },
    duplicateNote(noteId) {
      this.$emit('noteDuplicate', noteId)
    },
    setBackground(noteId, color) {
      this.$emit('colorSelected', noteId, color)
      this.note.style.backgroundColor = color
    },
    togglePalette() {
      this.isPaletteOn = !this.isPaletteOn
    },
  },
  components: {
    NoteTodos,
    NoteVideo,
    NoteTxt,
    NoteImg,
    NoteColorPalette,
  },
}
