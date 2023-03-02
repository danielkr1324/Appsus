export default {
    props: ['email'],
    template: `
    <article class="email-preview">
        <section class="email-preview">
            <span class="preview-from"> {{ email.from }} </span> |
            <span class="preview-subject"> {{ email.subject }} </span> |
            <span class="preview-body"> {{ email.body }} </span>
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