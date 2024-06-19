// vue-i18n-extract.config.js

module.exports = {
    vueFiles: './src/**/*.?(js|vue)',        // Path to your Vue files
    languageFiles: './src/locales/*.json',   // Path to where language files will be created (JSON format)
    add: true,                               // Automatically add missing keys to language files
    output: './src/locales/extracted.json',  // Optional: Path to output report file
    separator: '.',                          // Optional: Custom separator for nested keys
    detect: ['missing'],                     // Optional: Only detect missing keys
    noEmptyTranslation: '',                  // Optional: Default translation for missing keys
    missingTranslationString: '',            // Optional: String to use for missing translations
  };