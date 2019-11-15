exports.state = () => ({
  theme: '',
  mode: '',
});

exports.mutations = {
  setTheme(state, { theme }) {
    state.theme = theme;
  },

  setMode(state, { mode }) {
    state.mode = mode;
  },
};
