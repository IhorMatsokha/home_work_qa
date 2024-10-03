const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
      {
        name: 'Клієнт 1',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків',
        partners: [
          {
            name: 'Клієнт 1.1',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
          },
          {
            name: 'Клієнт 1.2',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
              {
                name: 'Клієнт 1.2.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу квитків',
                sells: 'Рішення для продажу квитків',
              }
            ]
          }
        ]
      },
      {
        name: 'Клієнт 2',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків'
      }
    ]
  };



function findValueByKey(companyName){

    for(key in company){
        if(company[key] === companyName){
            return company;
        } else if(Array.isArray(company[key])){
            for(let i = 0; company[key].length > i; i++){
                 if(typeof company[key][i] === "object"){
                    for(key1 in company[key][i]){
                        if(company[key][i][key1] === companyName){
                            return company[key][i];
                        } else if(Array.isArray(company[key][i][key1])){
                            //console.log(company[key][i][key1]);
                            for(let j = 0; company[key][i][key1].length >= j; j++){
                                //console.log(company[key][i][key1][j]);
                                //console.log("----");
                                if(typeof company[key][i][key1][j] === "object"){
                                    for(key2 in company[key][i][key1][j]){
                                        if(company[key][i][key1][j][key2] === companyName){
                                            return company[key][i][key1][j];
                                        } else if(Array.isArray(company[key][i][key1][j][key2])){
                                            for(let k = 0; company[key][i][key1][j][key2].length > k; k++){
                                                //console.log("++++");
                                                //console.log(company[key][i][key1][j][key2][k]);
                                                if(typeof company[key][i][key1][j][key2][k] === "object"){
                                                    //console.log("----");

                                                    for(key3 in company[key][i][key1][j][key2][k]){
                                                        
                                                        //console.log(company[key][i][key1][j][key2][k][key3]);
                                                        if(company[key][i][key1][j][key2][k][key3] === companyName){
                                                            return  company[key][i][key1][j][key2][k];
                                                        }

                                                    }

                                                }

                                            }

                                        }
    
                                    }

                                }
                                
                                
                            }

                        }


                    }
                }
            }
        }   
    }

}

//console.log(findValueByKey("Велика Компанія"));
//console.log(findValueByKey("Клієнт 1"));
//console.log(findValueByKey("Клієнт 2"));
//console.log(findValueByKey("Клієнт 1.1"));
//console.log(findValueByKey("Клієнт 1.2"));
console.log(findValueByKey("Клієнт 1.2.3"));


