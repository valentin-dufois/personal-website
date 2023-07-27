const path = require("path");
const manageTranslations = require("react-intl-translations-manager").default;

manageTranslations({
  messagesDirectory: path.join(__dirname, "messages/"),
  translationsDirectory: path.join(__dirname, "src/assets/locales/"),
  languages: ["en", "fr"] // any language you need
});
