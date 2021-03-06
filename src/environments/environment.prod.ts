export const environment = {
  production: true,

  // router extra options
  enableTracing: false,

  // NumberGeneratorService defaults
  numberGenerator: {
    defaultMin: 1,
    defaultMax: 50,
    defaultNumberCount: 5
  },

  // NumberStorageService defaults
  numberStorage: {
    cacheSize: 25,
    storageEndpoint: 'api/storage'
  },

  assetsProvider: {
    root: ''
  }

};
