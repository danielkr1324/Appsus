import NotePreview from './NotePreview.js'

export default {
  props: ['notes'],
  template: `
        <section class="note-list">
            <ul>
                    
                <li v-for="note in notes" :key="note.id">
                    <NotePreview
                     :note="note" 
                     @noteDeleted="deleteNote"
                     @noteDuplicate="duplicateNote"
                     @colorSelected="setBackground"
                     @toggle="toggleTodo"
                     />
                </li>
            </ul>
        </section>
    `,
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
      this.$emit('selectedColor', noteId, color)
    },
  },
  components: {
    NotePreview,
  },
}
