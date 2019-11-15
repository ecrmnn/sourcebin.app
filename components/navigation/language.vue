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
        v-for="language in filteredLanguages" :key="language" @click="setLanguage(language)">
        {{ language }}
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
      languages: [
        'apl',
        'asciiarmor',
        'asn.1',
        'asterisk',
        'brainfuck',
        'clike',
        'clojure',
        'cmake',
        'cobol',
        'coffeescript',
        'commonlisp',
        'crystal',
        'css',
        'cypher',
        'd',
        'dart',
        'diff',
        'django',
        'dockerfile',
        'dtd',
        'dylan',
        'ebnf',
        'ecl',
        'eiffel',
        'elm',
        'erlang',
        'factor',
        'fcl',
        'forth',
        'fortran',
        'gas',
        'gfm',
        'gherkin',
        'go',
        'groovy',
        'haml',
        'handlebars',
        'haskell',
        'haskell-literate',
        'haxe',
        'htmlembedded',
        'htmlmixed',
        'http',
        'idl',
        'javascript',
        'jinja2',
        'jsx',
        'julia',
        'livescript',
        'lua',
        'markdown',
        'mathematica',
        'mbox',
        'mirc',
        'mllike',
        'modelica',
        'mscgen',
        'mumps',
        'nginx',
        'nsis',
        'ntriples',
        'octave',
        'oz',
        'pascal',
        'pegjs',
        'perl',
        'php',
        'pig',
        'powershell',
        'properties',
        'protobuf',
        'pug',
        'puppet',
        'python',
        'q',
        'r',
        'rpm',
        'rst',
        'ruby',
        'rust',
        'sas',
        'sass',
        'scheme',
        'shell',
        'sieve',
        'slim',
        'smalltalk',
        'smarty',
        'solr',
        'soy',
        'sparql',
        'spreadsheet',
        'sql',
        'stex',
        'stylus',
        'swift',
        'tcl',
        'textile',
        'tiddlywiki',
        'tiki',
        'toml',
        'tornado',
        'troff',
        'ttcn',
        'ttcn-cfg',
        'turtle',
        'twig',
        'vb',
        'vbscript',
        'velocity',
        'verilog',
        'vhdl',
        'vue',
        'webidl',
        'xml',
        'xquery',
        'yacas',
        'yaml',
        'yaml-frontmatter',
        'z80',
      ],
    };
  },

  computed: {
    selected() {
      return this.$store.state.mode;
    },

    filteredLanguages() {
      return this.languages.filter((language) => language.includes(this.query));
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

    setLanguage(language) {
      this.$store.commit('setMode', { mode: language });
      window.editor.setOption('mode', language);
      window.CodeMirror.autoLoadMode(window.editor, language);
    },
  },
};
</script>
