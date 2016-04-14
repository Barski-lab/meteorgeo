Package.describe({
  name: 'bharath90:meteorgeo',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'SRA database query client-side API to retrieve only a particular record relating to SRA,SRP,GSE accession number',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.1');
  api.use('ecmascript');
  api.use("templating",'client');
  api.use('http','client');
  api.use(["jquery@1.11.7"], 'client');
  api.mainModule('meteorgeo.js');
  api.export('sra','client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('bharath90:meteorgeo@0.0.1');
  api.mainModule('meteorgeo-tests.js',['client','server']);
});
