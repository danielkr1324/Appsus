export default {
  props: ['note'],
  template: `
        <section v-if="note" class="note-todo">
            <h4>{{note.info.label}}</h4>
            <ul>
                <li v-for="todo in note.info.todos" :style="todo.doneAt ? 'text-decoration: line-through' : ''" @click="toggleTodo(todo.id, note.id, $event)">{{todo.txt}}</li>
            </ul>
        </section>
    `,
  data() {
    return {}
  },
  methods: {
    toggleTodo(todoId, noteId, ev) {
      ev.stopPropagation()
      this.$emit('todo-done', todoId, noteId)
    },
  },
}
