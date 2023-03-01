import { utilService } from '../../../services/util.service.js'

export default {
  template: `
    <section class="note-add">
        <div class="title-input">
         <input type="text" @focus="toggleFocus" @blur="toggleFocus"  class="title-input" v-model="note.info.title" placeholder="Add title" />
            <div v-show="note.isTitleFocused">
                <input type="text" v-model="note.info.txt"  placeholder="Add text"/>
                <button @click="saveNote" >save note</button>
            </div>
        </div>
    </section>
    `,
  data() {
    return {
      note: {
        type: 'note-txt',
        info: {
          url: null,
          title: null,
          txt: null,
          todos: null,
          label: null,
        },
        backgroundColor: utilService.getRandomColor(),
      },
      isTitleFocused: false,
    }
  },
  methods: {
    toggleFocus() {
      this.isTitleFocused = !this.isTitleFocused
    },
    saveNote() {
      this.$emit('save-note', this.note)
      this.note = {
        type: 'note-txt',
        info: {
          url: null,
          title: null,
          txt: null,
          todos: null,
          label: null,
        },
      }
    },
  },
}
