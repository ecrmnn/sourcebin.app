exports.state = () => ({
  theme: 'dracula',
  mode: 'javascript',
});

exports.mutations = {
  setTheme(state, { theme }) {
    state.theme = theme;
  },

  setMode(state, { mode }) {
    state.mode = mode;
  },
};
