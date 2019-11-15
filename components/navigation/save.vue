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
        mode: 'javascript',
        theme: 'dracula',
        body: 'const name = "daniel";',
      }).then((response) => {
        console.log(response);
      }).catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>
