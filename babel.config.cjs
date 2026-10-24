// Lets Jest understand modern import/export syntax (same syntax Vite and React use).
module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]],
};
