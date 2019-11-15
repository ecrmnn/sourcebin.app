<template>
  <div>
    <button class="bg-black text-xs text-white py-2 px-4 rounded focus:outline-none"
      @click="toggle">
      {{ selected }}
    </button>
    <div v-if="toggled"
      class="absolute z-10 mt-1 py-2 w-64 bg-white rounded
      shadow-xl right-0 overflow-y-scroll h-64">
      <div class="px-4 pb-2">
        <input class="text-sm bg-white focus:outline-none border border-gray-300
          rounded p-2 block w-full appearance-none"
          v-model="query"
          type="text">
      </div>
      <a href="#!" class="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-300"
        v-for="theme in filteredThemes" :key="theme" @click="setTheme(theme)">
        {{ theme }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggled: false,
      query: '',
      themes: [
        'ambiance-mobile',
        '3024-day',
        '3024-night',
        'abcdef',
        'ambiance',
        'base16-dark',
        'base16-light',
        'bespin',
        'blackboard',
        'cobalt',
        'colorforth',
        'darcula',
        'dracula',
        'duotone-dark',
        'duotone-light',
        'eclipse',
        'elegant',
        'erlang-dark',
        'gruvbox-dark',
        'hopscotch',
        'icecoder',
        'idea',
        'isotope',
        'lesser-dark',
        'liquibyte',
        'lucario',
        'material-darker',
        'material-ocean',
        'material-palenight',
        'material',
        'mbo',
        'mdn-like',
        'midnight',
        'monokai',
        'moxer',
        'neat',
        'neo',
        'night',
        'nord',
        'oceanic-next',
        'panda-syntax',
        'paraiso-dark',
        'paraiso-light',
        'pastel-on-dark',
        'railscasts',
        'rubyblue',
        'seti',
        'shadowfox',
        'solarized',
        'ssms',
        'the-matrix',
        'tomorrow-night-bright',
        'tomorrow-night-eighties',
        'ttcn',
        'twilight',
        'vibrant-ink',
        'xq-dark',
        'xq-light',
        'yeti',
        'yonce',
        'zenburn',
      ],
    };
  },

  computed: {
    selected() {
      return this.$store.state.theme;
    },

    filteredThemes() {
      return this.themes.filter((theme) => theme.includes(this.query));
    },
  },

  mounted() {
    // Detect click event outside dropdown
    if (process.client) {
      const self = this;

      window.addEventListener('click', (e) => {
        if (!self.$el.contains(e.target)) {
          self.toggled = false;
        }
      });
    }
  },

  methods: {
    toggle() {
      this.toggled = !this.toggled;
    },

    setTheme(theme) {
      this.$store.commit('setTheme', { theme });
      window.editor.setOption('theme', theme);
      window.editor.refresh();
    },
  },
};
</script>
