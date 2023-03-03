export default {
  props: ['note'],
  template: `
        <section v-if="note" class="note-todos">
            <h2>{{note.info.title}}</h2>
            <ul>
                <li v-for="todo in note.info.todos" 
                :style="todo.doneAt ? 
                'text-decoration: line-through' : ''"
                @click.stop="toggleTodo(note.id, todo)">
                   <p> - {{todo.txt}} </p>
              </li>
            </ul>
        </section>
    `,
  methods: {
    toggleTodo(noteId, todo) {
      this.$emit('toggle', noteId, todo)
    },
  },
}
