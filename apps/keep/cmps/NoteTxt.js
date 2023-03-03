export default {
  props: ['note'],
  template: `
        <section class="note-txt">
            <h2>{{note.info.title}}</h2>
            {{note.info.txt}}
        </section>
    `,
}
