export default {
    props: [],
    template: `

    <section class="email-filter">
            <input 
                v-model="filterBy.subject"
                @input="filter" 
                placeholder="🔍 Search mail"
                type="text" />
    </section>

    `,
    data() {
        return {
            filterBy: { subject: '' }
        }
    },
    methods: {
        filter() {
            this.$emit('filter', this.filterBy)
        }
    }
}