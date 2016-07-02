
var isAdditive = function(q) {
  var both, inner, outer;
  var primes = [2,3];
  for(var i = primes[primes.length-1]; i < q; i++) {
    if(isPrime(i, primes)) {
      primes.push(i);
    }
	}
	for (var i = 0; i < primes.length; i++) {
		for(var a = i + 1; a < primes.length; a++) {
      both = secret(primes[i] + primes[a]);
      inner = secret(primes[a]);
      outer = secret(primes[i]);
			if(!(both === inner + outer)) {
				return false;
			}
		}
	}
	return true;
}


function isPrime(p, primes) {
	if(p <= 3 || primes.indexOf(p) >= 0) {
		return true;
	}
	else {
		var theSqrt = Math.floor(Math.sqrt(p));
		for(i = 4; i <= theSqrt; i++) {
			if(p % i == 0){
				return false;
      }
		}
	}
	return true;
}

function secret(x) {
  return secret1(x);
  //return secret2(x);
  //return secret3(x);
}

//Additive Example
function secret1(x) {
	return x;
}
//Nonadditive Example
function secret2(x) {
	return -1;
}
//Sometimes Additive Example
function secret3(x) {
	if (x>40) {
    return secret2(x);
  }
	else {
    return secret1(x);
  }
}

exports.isAdditive = isAdditive;
