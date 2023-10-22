const sharedConfig = require("tailwind-config/tailwind.config"); // Zmienić na rzeczywistą ścieżkę do pliku konfiguracyjnego

// Stworzenie nowego obiektu konfiguracji, używając zaimportowanej konfiguracji jako predefiniowanej
const config = {
  presets: [sharedConfig],
};

module.exports = config;
