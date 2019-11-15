<template>
  <div>
    <textarea id="editor"></textarea>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  mounted() {
    if (process.client) {
      if (this.$route.query.q) {
        axios.get(`https://codeshare-storage.s3.eu-north-1.amazonaws.com/${this.$route.query.q}.json`)
          .then((response) => {
            window.editor.setValue(response.data.body);
            window.editor.setOption('mode', response.data.mode);
            window.editor.setOption('theme', response.data.theme);

            this.$store.commit('setMode', { mode: response.data.mode });
            this.$store.commit('setTheme', { theme: response.data.theme });

            window.CodeMirror.autoLoadMode(window.editor, response.data.mode);
          })
          .catch(() => {
            //
          });
      }
    }
  },
};
</script>
