window.CV2Validator = (function(){
    return {
        validate: validate,
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

        if(!code.startsWith('CV')){
            return false;
        }

        for(let i = 2; i < 12; i++){
            if(isNaN(parseInt(code.charAt(i)))){
                return false;
            }           
          }

        const clavier2 = parseInt(code.substring(2, 10));
        const checkDigit = parseInt(code.substring(10, 12));
        let mod97 = clavier2 % 97;
        if(mod97 === 0){
            mod97 = 97;
        } 
        
        return mod97 === checkDigit;
    }
}());