import { noteService } from '../services/note.service.js'
import NoteList from '../cmps/NoteList.js'
import NoteAdd from '../cmps/NoteAdd.js'

export default {
  template: `
        <section class="note-index">
           <NoteAdd @saveNote="saveNote" />
           <NoteList
            :notes="notes"
            @noteDeleted="deleteNote"
            @noteDuplicate="duplicateNote"/>
        </section>
    `,
  data() {
    return {
      notes: [],
      filterBy: {},
    }
  },
  methods: {
    saveNote(note) {
      noteService.saveNote(note).then(note => this.notes.push(note))
    },
    deleteNote(noteId) {
      console.log(noteId)
      noteService.removeNote(noteId)
      let noteIndx = this.notes.findIndex(note => note.id === noteId)
      this.notes.splice(noteIndx, 1)
    },
    duplicateNote(noteId) {
      noteService.duplicateNote(noteId).then(note => this.notes.push(note))
    },
  },
  created() {
    noteService.notesQuery().then(notes => (this.notes = notes))
  },
  components: {
    NoteAdd,
    NoteList,
  },
}
