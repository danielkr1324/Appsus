export default {
    props: ['email'],
    template: `
<h1>Preview</h1>
<article class="email-preview">

<pre> {{ email }} </pre>
<h1>HI</h1>
    <!-- <h2>{{ email.subject }}</h2>
    <h3>{{ email.body }}</h3> -->
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