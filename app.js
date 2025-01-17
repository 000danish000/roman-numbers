let number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const result = () => {
    if(number.value===""){
        output.textContent = "Please enter a valid number";
        
    }
    else if(number.value<1){
        output.textContent = "Please enter a number greater than or equal to 1";
        
    }
    else if(number.value>=4000){
        output.textContent = "Please enter a number less than or equal to 3999";
        
    }else{
        const romanNumerals = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        };
        let roman ='';
        let numberValue = number.value;
        for(const[key,value] of Object.entries(romanNumerals)){
            while(numberValue >= value){
                    roman += key;
                    numberValue -= value;
                }
            }

            output.textContent = roman;
    }


}

convertBtn.addEventListener("click",result);


