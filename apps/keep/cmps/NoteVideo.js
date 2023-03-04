export default {
  props: ['note'],
  template: `
        <section class="note-video">
            <iframe width="300"
            :src="note.info.url">
        </iframe>
                <h2>{{note.info.title}}</h2>
             
        </section>
    `,
}
