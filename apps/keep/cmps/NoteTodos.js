export default {
  props: ['note'],
  template: `
        <section v-if="note" class="note-todos">
            <h2>{{note.info.title}}</h2>
            <ul>
                <li v-for="todo in note.info.todos" 
                
                 @click.stop="toggleTodo(todo.id, note.id, $event)">

                <p> {{todo.txt}} </p>
              </li>
            </ul>
        </section>
    `,
  data() {
    return {}
  },
  methods: {
    toggleTodo(todoId, noteId) {
      this.$emit('todo-done', todoId, noteId)
    },
  },
}
