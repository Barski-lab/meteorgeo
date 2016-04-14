Package.describe({
  name: 'bharath90:meteorgeo',
  version: '0.0.3',
  summary: 'SRA database query client-side API',
  git: 'https://github.com/SciDAP/meteorgeo',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.1');
  api.use('ecmascript@0.4.1');
  api.use("templating@1.1.7",'client');
  api.use('http@1.1.3','client');
  api.use('promise@0.6.6','client');
  api.mainModule('meteorgeo.js');
  api.export('sra','client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('bharath90:meteorgeo@0.0.3');
  api.mainModule('meteorgeo-tests.js',['client','server']);
});
