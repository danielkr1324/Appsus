import { noteService } from '../services/note.service.js'

export default {
  template: `
        <section class="note-index">
            <RouterLink to="/note/edit">Add a </RouterLink>
           <div>notes</div>
          
        </section>
    `,
}
