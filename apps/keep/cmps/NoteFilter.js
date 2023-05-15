export default {
  template: `
        <section class="btn-filter-type">
            <input 
                v-model="filterBy.title"
                placeholder="Search By Title"
                type="text" />
                
            <div class="btn-filter-type">

            </div>
        </section>
    `,
  data() {
    return {
      filterBy: { title: '', type: '' },
    }
  },
  methods: {
    filter() {
      this.$emit('filter', this.filterBy)
    },
  },
  watch: {
    filterBy: {
      handler() {
        this.$emit('filter', this.filterBy)
      },
      deep: true,
    },
    'filterBy.title'() {
      this.$emit('filter', this.filterBy)
    },
  },
}
