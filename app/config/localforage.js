import localforage from 'localforage';

const config = {
  NAME: 'Xanadu',
  STORE_NAME: 'Xanadu',
  DESCRIPTION: 'Xanadu',
  LF_STORE: {
    TODO: 'TODO',
    THEME: 'THEME',
    LANGUAGE: 'LANGUAGE',
    RANGE: 'RANGE',
  },
};

localforage.config({
  name: config.NAME,
  storeName: config.STORE_NAME,
  description: config.DESCRIPTION,
});

module.exports = config;
