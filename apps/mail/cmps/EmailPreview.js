export default {
    props: ['email'],
    template: `
<article class="email-preview">

<section class="email-preview">
    <h2>{{ email.subject }}</h2>
    <h3>{{ email.body }}</h3>
</section>
    
</article>
`,

    data() {
        return {

        }
    },
    methods: {

    },
    computed: {

    },
    created() {

    },
    components: {

    },
    emits: [],
}