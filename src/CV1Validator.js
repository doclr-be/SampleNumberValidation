window.CV1Validator = (function(){
    return {
        validate: validate,
        nextMultipleOfTen:nextMultipleOfTen
    };

    function validate(code){
        if(!code){
            return false;
        }

        if(typeof code !== 'string'){
            return false;
        }

        if(code.length !== 12){
            return false;
        }

        if(!code.startsWith('CV-')){
            return false;
        }

        let sum = 0;
        let checkDigit;
        for(let i = 3; i < 12; i++){
          let num = parseInt(code.charAt(i));
          if(isNaN(num)){
              return false;
          }
          if(i!==11){
              sum += (i%2 !== 0 ? num*3 : num);
          }else{
            checkDigit = num;
          }
        }

        return nextMultipleOfTen(sum) - sum === checkDigit;
    }

    
    function nextMultipleOfTen(num){
        let numToCheck = num;
        while(numToCheck % 10 !== 0){
            numToCheck++;
        }
        return numToCheck;
    }
}());