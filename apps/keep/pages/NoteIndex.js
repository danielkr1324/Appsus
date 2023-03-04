import { noteService } from '../services/note.service.js'
import NoteList from '../cmps/NoteList.js'
import NoteAdd from '../cmps/NoteAdd.js'
import NoteFilter from '../cmps/NoteFilter.js'

export default {
  template: `
        <section class="note-index">
           <NoteFilter @filter="setFilterBy" />
           <NoteAdd @saveNote="saveNote" />
           <NoteList
            :notes="filteredNotes"
            @noteDeleted="deleteNote"
            @noteDuplicate="duplicateNote"
            @selectedColor="setBackground" 
            @toggle="toggleTodo"/>
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
      console.log(note)

      noteService.saveNote(note).then(note => this.notes.push(note))
    },
    toggleTodo(noteId, todo) {
      noteService.toggleTodo(noteId, todo)
      const todoTxt = todo.txt
      let note = this.notes.find(note => note.id === noteId)
      const currTodo = note.info.todos.find(todo => todo.txt === todoTxt)
      if (!currTodo.doneAt) currTodo.doneAt = Date.now()
      else currTodo.doneAt = null
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
    setBackground(noteId, color) {
      noteService.updateBgc(noteId, color)
    },
    setFilterBy(filterBy) {
      this.filterBy = filterBy
    },
  },
  created() {
    noteService.notesQuery().then(notes => (this.notes = notes))
  },
  computed: {
    filteredNotes() {
      const regex = new RegExp(this.filterBy.title, 'i')
      return this.notes.filter(note => regex.test(note.info.title))
    },
  },
  components: {
    NoteFilter,
    NoteAdd,
    NoteList,
  },
}
