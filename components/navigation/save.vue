<template>
  <div>
    <button class="bg-black text-xs text-white py-2 px-4 rounded focus:outline-none" @click="save">
      save
    </button>
  </div>
</template>

<script>
import axios from 'axios';
import netlifyFunction from '../../n';

export default {
  methods: {
    save() {
      axios.post(netlifyFunction('save'), {
        mode: window.editor.getOption('mode'),
        theme: window.editor.getOption('theme'),
        body: window.editor.getValue(),
      }).then((response) => {
        window.location.href = `/${response.data.id}`;
      }).catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>
