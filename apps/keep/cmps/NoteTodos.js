export default {
  props: ['note'],
  template: `
        <section v-if="note" class="note-todos">
            <h2>{{note.info.title}}</h2>
            <ul>
                <li v-for="todo in note.info.todos" >
                
              

                <p> {{todo.txt}} </p>
              </li>
            </ul>
        </section>
    `,
  data() {
    return {}
  },
}
