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
      axios.get(`https://codeshare-storage.s3.eu-north-1.amazonaws.com/${this.$route.params.id}.json`)
        .then((response) => {
          window.editor.setValue(response.data.body);
          window.editor.setOption('mode', response.data.mode);
          window.editor.setOption('theme', response.data.theme);
        })
        .catch(() => {
          window.location.href = '/';
        });
    }
  },
};
</script>
