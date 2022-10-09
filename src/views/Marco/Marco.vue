<script>
import article from '!!raw-loader!../../template/宏任务.html';
import ejs from 'ejs';
import { h } from 'vue';

export default {
  setup() {
    const template = ejs.render(article, {
      user: {
        name: 'jeriming'
      }
    });
    return () => h('p', {
      innerHTML: template
    })
  }
}
</script>