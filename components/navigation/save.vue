<template>
  <div>
    <button class="bg-black text-xs text-white py-2 px-4 rounded focus:outline-none" @click="save">
      save
    </button>
  </div>
</template>

<script>
// import ky from 'ky';
import axios from 'axios';

export default {
  methods: {
    async save() {
      // const d = await ky.post('http://localhost:9000/save', {
      //   json: {
      //     mode: 'javascript',
      //     theme: 'dracula',
      //     body: 'const name = "daniel";',
      //   },
      // }).json();

      // console.log(d);

      axios.post('http://localhost:9000/save', {
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
