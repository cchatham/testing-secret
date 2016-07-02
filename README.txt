This program requires npm (Node Package Manager) to be installed.

You can install the command by running `npm install -g` in the directory
where the program's package.json lives. `npm install` should install the commander
dependency but in case it doesn't, you may have to run `npm install -g commander`.
This will give you the command `test-secret` which you can follow with a number to test.

I have 3 examples for the secret function:
1 additive, 1 non-additive, and 1 where it depends.
You can run each of these by uncommenting out your desired secret
function in test-secret.js under the generic secret function.
Comment out the undesired secret function calls like so:

    function secret(x) {
      //return secret1(x);
      return secret2(x);
      //return secret3(x);
    }
    
Run `npm install -g` to register your changes and run the command.
