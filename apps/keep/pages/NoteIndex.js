import { noteService } from '../services/note.service.js'
import NoteList from '../cmps/NoteList.js'
import NoteAdd from '../cmps/NoteAdd.js'

export default {
  template: `
        <section class="note-index">
           <NoteAdd />
           <NoteList :notes="notes"/>
        </section>
    `,
  data() {
    return {
      notes: [],
      filterBy: {},
    }
  },
  created() {
    noteService.notesQuery().then(notes => (this.notes = notes))
  },
  components: {
    NoteAdd,
    NoteList,
  },
}
