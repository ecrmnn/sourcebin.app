<template>
  <div>
    <nav class="flex fixed z-10 right-0 mt-6 mr-10">
      <theme class="mr-2"/>
      <language class="mr-2"/>
      <save/>
    </nav>
    <nuxt/>
  </div>
</template>

<script>
import Language from '../components/navigation/language.vue';
import Theme from '../components/navigation/theme.vue';
import Save from '../components/navigation/save.vue';

export default {
  mounted() {
    if (process.client) {
      window.editor = window.CodeMirror.fromTextArea(document.getElementById('editor'), {
        lineNumbers: true,
        lineWrapping: false,
        mode: 'javascript',
        theme: 'dracula',
      });

      window.editor.setSize('100%', `${window.innerHeight}px`);

      document.getElementsByClassName('CodeMirror')[0].classList.add(
        'text-xl',
        'leading-loose',
      );

      window.editor.refresh();
    }
  },
  components: {
    Language,
    Theme,
    Save,
  },
};
</script>

<style>
.CodeMirror-linenumber {
    padding: 0px 24px 0 5px;
}
</style>
