export default {
  template: `
        <div class="note-color-palette">
            <div  v-for="(color, index) in colors" 
            :key="index" class="color" 
            :style="{ backgroundColor: color }" 
            @click="setBackground(color)"></div>
        </div>
    `,
  data() {
    return {
      colors: [
        '#DDF7E4',
        '#ECF2FF',
        '#FFAACF',
        '#F7EFE5',
        '#FFFBAC',
        '#00ffff',
        '#FFF80A',
        '#9FE6A0',
      ],
    };
  },
  methods: {
    setBackground(color) {
      this.$emit('colorSelected', color);
    },
  },
};
