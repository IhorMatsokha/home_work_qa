
let num_parne = 0;
let num_neparne = 0;

  function checkProbabilityTheory(count){
    for(; count > 0; count--){
        if(getRandom(100, 1000) % 2 == 0){
            num_parne++;
        } else {
            num_neparne++;
        }
        }
        if(num_parne === 0){
            return "Рандомних парних чисел немає";
        } else if(num_neparne === 0){
            return "Рандомних непарних чисел немає";
        } else {
            return (num_parne / num_neparne) * 100 + "%";
        }
        
  }
  
    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); 
      }

      console.log("Співвідношення парних чисел до непарних " + checkProbabilityTheory(4));
