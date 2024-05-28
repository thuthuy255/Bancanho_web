
function Validator(options){

    var formElement = document.querySelector(options.form-contact_us);
    if(formElement){
        options.rules.forEach(function (rule){
           var inputElement = formElement.querySelector(rule.selector);
           if(inputElement){
                inputElement.onblur = function (){
                    console.log(ttrule);
                }
           }
        //    console.log(inputElement);
        });

        // console.log(formElement);
    }
}
//Định nghĩa các rules
Validator.isRequired = function (selector){
    return {
        selector: selector,
        test: function(){

        }
    };
}

Validator.isEmail = function (selector){
    return {
        selector: selector,
        test: function(){
            
        }
    };
}
