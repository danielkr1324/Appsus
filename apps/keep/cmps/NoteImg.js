export default {
  props: ['note'],
  template: `
        <section class="note-img">
            <img :src="note.info.url"/>
            <h2>{{note.info.title}}</h2>
        </section>
    `,
}
