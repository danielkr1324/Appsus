import { utilService } from '../../../services/util.service.js'
import { eventBus } from '../../../services/event-bus.service.js'

export default {
  template: `
    <section @click="isTitleFocused=false" class="note-add">
        <h2 class="add-note-title">Add A Note</h2>
        <div @click.stop="isTitleFocused=true" >
         <input type="text" class="title-input" v-model="note.info.title" placeholder="Add title" />
            <div  v-show="isTitleFocused">
                <input v-show="note.type === 'NoteTxt'" type="text" v-model="note.info.txt" :placeholder="noteType"/>
                <input v-show="note.type === 'NoteTodos'" type="text" v-model="note.info.todos" :placeholder="noteType"/>
                <input v-show="note.type === 'NoteImg'" type="text" v-model="note.info.url" :placeholder="noteType"/>
                <input v-show="note.type === 'NoteVideo'" type="text" v-model="note.info.url" :placeholder="noteType"/>
                <button class="btn-save" @click="saveNote" >save note</button>

                <div class="note-type-set">

                  <button title="text note" @click="setType('NoteTxt')">
                    <i class="fa-regular fa-file-lines"></i>
                  </button>
                 
                  <button title="todos note" @click="setType('NoteTodos')">
                    <i class="fa-solid fa-list-ol"></i>
                  </button>

                  <button title="image note" @click="setType('NoteImg')">
                    <i class="fa-solid fa-image"></i>
                  </button>

                  <button title="video note" @click="setType('NoteVideo')">
                    <i class="fa-brands fa-youtube"></i>
                  </button>

                </div>

            </div>
        </div>
    </section>
    `,
  data() {
    return {
      note: {
        type: 'NoteTxt',
        info: {
          title: null,
          url: null,
          txt: null,
          todos: null,
        },
        style: {
          backgroundColor: utilService.getRandomColor(),
        },
      },
      isTitleFocused: false,
    }
  },
  methods: {
    setType(type) {
      this.note.type = type
    },
    toggleFocus() {
      this.isTitleFocused = !this.isTitleFocused
      console.log(this.isTitleFocused)
    },
    saveNote() {
      if (!this.note.info.title) {
        eventBus.emit('show-msg', { txt: 'must enter title', type: 'error' })
        return
      }
      this.convertTodos()
      this.$emit('saveNote', this.note)
      this.note = {
        type: 'NoteTxt',
        info: {
          title: null,
          url: null,
          txt: null,
          todos: null,
        },
        style: {
          backgroundColor: utilService.getRandomColor(),
        },
      }
      this.isTitleFocused = false
    },
    convertTodos() {
      if (this.note.type !== 'NoteTodos') return
      const todos = this.note.info.todos
        .split(',')
        .map(todo => ({ txt: todo, doneAt: null }))
      this.note.info.todos = todos
    },
  },
  computed: {
    noteType() {
      if (this.note.type === 'NoteVideo') return 'Enter Video URL'
      if (this.note.type === 'NoteImg') return 'Enter Image URL'
      if (this.note.type === 'NoteTxt') return 'Take a note'
      if (this.note.type === 'NoteTodos')
        return 'Enter your todos comma separated'
    },
  },
}
