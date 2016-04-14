// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteorgeo.js.
import { call } from "meteor/bharath90:meteorgeo";

// Write your tests here!
// Here is an example.
Tinytest.add('meteorgeo - example', function (test) {
  test.equal(1,1, "meteorgeo");
});
