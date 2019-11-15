export default {
  head: {
    script: [
      { src: '/codemirror.js' },
      { src: '/mode/apl/apl.js' },
      { src: '/mode/asciiarmor/asciiarmor.js' },
      { src: '/mode/asn.1/asn.1.js' },
      { src: '/mode/asterisk/asterisk.js' },
      { src: '/mode/brainfuck/brainfuck.js' },
      { src: '/mode/clike/clike.js' },
      { src: '/mode/clojure/clojure.js' },
      { src: '/mode/cmake/cmake.js' },
      { src: '/mode/cobol/cobol.js' },
      { src: '/mode/coffeescript/coffeescript.js' },
      { src: '/mode/commonlisp/commonlisp.js' },
      { src: '/mode/crystal/crystal.js' },
      { src: '/mode/css/css.js' },
      { src: '/mode/cypher/cypher.js' },
      { src: '/mode/d/d.js' },
      { src: '/mode/dart/dart.js' },
      { src: '/mode/diff/diff.js' },
      { src: '/mode/django/django.js' },
      { src: '/mode/dockerfile/dockerfile.js' },
      { src: '/mode/dtd/dtd.js' },
      { src: '/mode/dylan/dylan.js' },
      { src: '/mode/ebnf/ebnf.js' },
      { src: '/mode/ecl/ecl.js' },
      { src: '/mode/eiffel/eiffel.js' },
      { src: '/mode/elm/elm.js' },
      { src: '/mode/erlang/erlang.js' },
      { src: '/mode/factor/factor.js' },
      { src: '/mode/fcl/fcl.js' },
      { src: '/mode/forth/forth.js' },
      { src: '/mode/fortran/fortran.js' },
      { src: '/mode/gas/gas.js' },
      { src: '/mode/gfm/gfm.js' },
      { src: '/mode/gherkin/gherkin.js' },
      { src: '/mode/go/go.js' },
      { src: '/mode/groovy/groovy.js' },
      { src: '/mode/haml/haml.js' },
      { src: '/mode/handlebars/handlebars.js' },
      { src: '/mode/haskell/haskell.js' },
      { src: '/mode/haskell-literate/haskell-literate.js' },
      { src: '/mode/haxe/haxe.js' },
      { src: '/mode/htmlembedded/htmlembedded.js' },
      { src: '/mode/htmlmixed/htmlmixed.js' },
      { src: '/mode/http/http.js' },
      { src: '/mode/idl/idl.js' },
      { src: '/mode/javascript/javascript.js' },
      { src: '/mode/jinja2/jinja2.js' },
      { src: '/mode/jsx/jsx.js' },
      { src: '/mode/julia/julia.js' },
      { src: '/mode/livescript/livescript.js' },
      { src: '/mode/lua/lua.js' },
      { src: '/mode/markdown/markdown.js' },
      { src: '/mode/mathematica/mathematica.js' },
      { src: '/mode/mbox/mbox.js' },
      { src: '/mode/mirc/mirc.js' },
      { src: '/mode/mllike/mllike.js' },
      { src: '/mode/modelica/modelica.js' },
      { src: '/mode/mscgen/mscgen.js' },
      { src: '/mode/mumps/mumps.js' },
      { src: '/mode/nginx/nginx.js' },
      { src: '/mode/nsis/nsis.js' },
      { src: '/mode/ntriples/ntriples.js' },
      { src: '/mode/octave/octave.js' },
      { src: '/mode/oz/oz.js' },
      { src: '/mode/pascal/pascal.js' },
      { src: '/mode/pegjs/pegjs.js' },
      { src: '/mode/perl/perl.js' },
      { src: '/mode/php/php.js' },
      { src: '/mode/pig/pig.js' },
      { src: '/mode/powershell/powershell.js' },
      { src: '/mode/properties/properties.js' },
      { src: '/mode/protobuf/protobuf.js' },
      { src: '/mode/pug/pug.js' },
      { src: '/mode/puppet/puppet.js' },
      { src: '/mode/python/python.js' },
      { src: '/mode/q/q.js' },
      { src: '/mode/r/r.js' },
      { src: '/mode/rpm/rpm.js' },
      { src: '/mode/rst/rst.js' },
      { src: '/mode/ruby/ruby.js' },
      { src: '/mode/rust/rust.js' },
      { src: '/mode/sas/sas.js' },
      { src: '/mode/sass/sass.js' },
      { src: '/mode/scheme/scheme.js' },
      { src: '/mode/shell/shell.js' },
      { src: '/mode/sieve/sieve.js' },
      { src: '/mode/slim/slim.js' },
      { src: '/mode/smalltalk/smalltalk.js' },
      { src: '/mode/smarty/smarty.js' },
      { src: '/mode/solr/solr.js' },
      { src: '/mode/soy/soy.js' },
      { src: '/mode/sparql/sparql.js' },
      { src: '/mode/spreadsheet/spreadsheet.js' },
      { src: '/mode/sql/sql.js' },
      { src: '/mode/stex/stex.js' },
      { src: '/mode/stylus/stylus.js' },
      { src: '/mode/swift/swift.js' },
      { src: '/mode/tcl/tcl.js' },
      { src: '/mode/textile/textile.js' },
      { src: '/mode/tiddlywiki/tiddlywiki.js' },
      { src: '/mode/tiki/tiki.js' },
      { src: '/mode/toml/toml.js' },
      { src: '/mode/tornado/tornado.js' },
      { src: '/mode/troff/troff.js' },
      { src: '/mode/ttcn/ttcn.js' },
      { src: '/mode/ttcn-cfg/ttcn-cfg.js' },
      { src: '/mode/turtle/turtle.js' },
      { src: '/mode/twig/twig.js' },
      { src: '/mode/vb/vb.js' },
      { src: '/mode/vbscript/vbscript.js' },
      { src: '/mode/velocity/velocity.js' },
      { src: '/mode/verilog/verilog.js' },
      { src: '/mode/vhdl/vhdl.js' },
      { src: '/mode/vue/vue.js' },
      { src: '/mode/webidl/webidl.js' },
      { src: '/mode/xml/xml.js' },
      { src: '/mode/xquery/xquery.js' },
      { src: '/mode/yacas/yacas.js' },
      { src: '/mode/yaml/yaml.js' },
      { src: '/mode/yaml-frontmatter/yaml-frontmatter.js' },
      { src: '/mode/z80/z80.js' },
    ],
    link: [{
      rel: 'stylesheet',
      href: '/codemirror.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/ttcn.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/3024-day.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/3024-night.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/abcdef.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/ambiance-mobile.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/ambiance.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/base16-dark.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/base16-light.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/bespin.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/blackboard.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/cobalt.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/colorforth.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/darcula.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/dracula.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/duotone-dark.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/duotone-light.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/eclipse.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/elegant.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/erlang-dark.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/gruvbox-dark.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/hopscotch.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/icecoder.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/idea.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/isotope.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/lesser-dark.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/liquibyte.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/lucario.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/material-darker.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/material-ocean.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/material-palenight.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/material.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/mbo.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/mdn-like.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/midnight.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/monokai.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/moxer.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/neat.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/neo.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/night.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/nord.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/oceanic-next.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/panda-syntax.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/paraiso-dark.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/paraiso-light.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/pastel-on-dark.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/railscasts.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/rubyblue.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/seti.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/shadowfox.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/solarized.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/ssms.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/the-matrix.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/tomorrow-night-bright.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/tomorrow-night-eighties.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/twilight.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/vibrant-ink.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/xq-dark.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/xq-light.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/yeti.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/yonce.css',
    }, {
      rel: 'stylesheet',
      href: '/theme/zenburn.css',
    }],
  },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
};
