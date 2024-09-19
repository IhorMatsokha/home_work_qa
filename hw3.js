let x = 2;
let y = 4;

function pow(x, y) {
    let result = x;
    for(x; y > 0; y--){
        result *= x;
    }
    return result;
  }

  let results = pow(x, y);
  console.log(results);