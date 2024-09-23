
let num_p = 0;
let num_n = 0;

  function checkProbabilityTheory(count){
    for(; count > 0; count--){
        if(getRandom(100, 1000) % 2 == 0){
            num_p++;
        } else {
            num_n++;
        }
        }
        if(num_p === 0){
            return "Рандомних парних чисел немає";
        } else if(num_n === 0){
            return "Рандомних непарних чисел немає";
        } else {
            return (num_p / num_n) * 100 + "%";
        }
        
  }
  
    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); 
      }

      console.log(checkProbabilityTheory(4));
