import { utilService } from '../../../services/util.service.js'
import { noteService } from '../services/note.service.js'

export default {
  template: `
    <section class="note-add">
        <div class="title-input">
         <input type="text" @focus="toggleFocus"   class="title-input" v-model="note.info.title" placeholder="Add title" />
            <div @focus="toggleFocus" @blur="toggleFocus" v-show="isTitleFocused">
                <input type="text" v-model="note.info.txt"  placeholder="Add text"/>
                <button @click="saveNote" >save note</button>
            </div>
        </div>
    </section>
    `,
  data() {
    return {
      note: {
        id: utilService.makeId(),
        type: 'NoteTxt',
        info: {
          title: null,
          txt: null,
        },
        style: {
          backgroundColor: utilService.getRandomColor(),
        },
      },
      isTitleFocused: false,
    }
  },
  methods: {
    toggleFocus() {
      this.isTitleFocused = !this.isTitleFocused
      console.log(this.isTitleFocused)
    },
    saveNote() {
      this.$emit('saveNote', this.note)
      this.note = {
        id: '',
        type: 'NoteTxt',
        info: {
          title: null,
          txt: null,
        },
        style: {
          backgroundColor: utilService.getRandomColor(),
        },
      }
    },
  },
  computed: {
    showTxt() {
      return this.isTitleFocused
    },
  },
}
