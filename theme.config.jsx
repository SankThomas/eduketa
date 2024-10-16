export default {
  project: {
    link: "https://github.com/SankThomas/learnerspree",
  },
  logo: <strong>Learnerspree</strong>,
  useNextSeoProps() {
    return {
      titleTemplate: "Learnerspree | %s",
    };
  },
  docsRepositoryBase: "https://github.com/SankThomas/learnerspree/tree/main",
  footer: {
    text: "Copyright Thomas Sankara 2024",
  },
  chat: {
    link: "https://discord.com/invite/TDr42sFD8g"
  }
};
