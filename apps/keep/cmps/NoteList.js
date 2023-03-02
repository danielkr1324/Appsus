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
                     @noteDuplicate="duplicateNote"/>
                </li>
            </ul>
        </section>
    `,
  methods: {
    deleteNote(noteId) {
      this.$emit('noteDeleted', noteId)
    },
    duplicateNote(noteId) {
      this.$emit('note-duplicate', noteId)
    },
  },
  components: {
    NotePreview,
  },
}
