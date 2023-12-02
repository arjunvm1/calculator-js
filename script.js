// display number

function displayNumber(num){
    result.value+=num
}



function clearBox(){
    result.value=""
}

function  calculateResult(){
//     exp=result.value
//     output=eval(exp)
//     result.value=output


result.value=eval(result.value)
}

function removelastitem(){
    result.value=result.value.slice(0,-1)
}




