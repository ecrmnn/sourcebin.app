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
