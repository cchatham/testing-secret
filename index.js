#!/usr/bin/env node
var program = require('commander');
var testSecret = require('./test-secret.js');

program.arguments('<random>')
  .action(function(random) {
    if(isNaN(random)){
      console.log("You entered something that is not a number.");
      process.exit(1);
    }
    else {
      console.log(testSecret.isAdditive(random));
      process.exit(0);
    }
  })
  .parse(process.argv);
