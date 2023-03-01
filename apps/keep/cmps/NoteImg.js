export default {
  props: ['note'],
  template: `
        <section class="note-img">
            <img :src="note.info.url"/>
            <h4>{{note.info.title}}</h4>
        </section>
    `,
  
}
