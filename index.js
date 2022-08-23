const languages = {};
languages.ar = require('./ar.json');
languages.en = require("./en.json");

module.exports = languages;
module.exports.webLangs = {
  ar: { name: "العربية", flag: "sa" },
  en: { name: "English", flag: "us" },
};

