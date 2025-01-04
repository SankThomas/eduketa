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
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  docsRepositoryBase: "https://github.com/SankThomas/learnerspree/tree/main",
  footer: {
    text: "Copyright Thomas Sankara " + new Date().getFullYear(),
  },
  chat: {
    link: "https://discord.com/invite/TDr42sFD8g"
  }
};
