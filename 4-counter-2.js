var createCounter = function(init) {
    let number = init 
    function increment(){
        return number += 1
    }

    function decrement(){
        return number -=1
    }

    function reset(){
        number = init
        return number
    }

    return {increment, decrement, reset}
};