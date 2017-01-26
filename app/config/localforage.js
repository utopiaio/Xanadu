import localforage from 'localforage';

const config = {
  NAME: 'Rafi',
  STORE_NAME: 'Rafi',
  DESCRIPTION: 'Todo, Rafi way',
  LF_STORE: {
    TODO: 'TODO',
    THEME: 'THEME',
    LANGUAGE: 'LANGUAGE',
  },
};

localforage.config({
  name: config.NAME,
  storeName: config.STORE_NAME,
  description: config.DESCRIPTION,
});

module.exports = config;
