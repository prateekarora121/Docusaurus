module.exports = {
  ci: {
    upload: {
      target: 'temporary-public-storage',

    },
    collect:{
      staticDistDir:'website/build',
      staticDirFileDiscoveryDepth:10,
      numberOfRuns: 1
    },
    server:{
      port:9001
    },
    upload:{
      target: 'lhci',
      serverBaseUrl: 'http://localhost:9001',
      token:"1846a2d4-259a-4f2d-88c4-8040782b967d"
    }

  },
};
