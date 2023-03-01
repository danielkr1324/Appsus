export default {
    props: ["note"],
    template: `
        <section class="note-video">
            <iframe width="250"
            :src="note.info.url">
        </iframe>
        <h4>{{note.info.title}}</h4>
        </section>
    `,
}