export default {
  props: ['note'],
  template: `
        <section class="note-txt">
            <h3>{{note.info.title}}</h3>
            {{note.info.txt}}
        </section>
    `,
}
