import { noteService } from '../services/note.service.js'
import NoteList from '../cmps/NoteList.js'

export default {
  template: `
        <section class="note-index">
           <div>notes</div>
           <NoteList
            :notes="notes"
           />
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
    NoteList,
  },
}
