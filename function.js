// let a = document.getElementById('hello')
// a.classList.add('classnamefrom CSS goes here')


// getting value of a text box


// Variable names  
// bill--amount
// number--people--input

var billAmount = document.querySelector('.bill--amount')
var numberOfPeople = document.querySelector('.number--people--input')
var totalTip = document.querySelector('.total--tip')
var tipPerPerson = document.querySelector('.tip--per--person')


// button for each percent
var percent5 = document.querySelector('.percent5')
var percent10 = document.querySelector('.percent10')
var percent15 = document.querySelector('.percent15')
var percent25 = document.querySelector('.percent25')
var percent50 = document.querySelector('.percent50')




function percentfive() {
    
    if (numberOfPeople.value.match(/^\d+/)){numberOfPeople.classList.add('correct--input')}
    if (billAmount.value.match(/^\d+/)){billAmount.classList.add('correct--input')}

    if (!billAmount.value.match(/^\d+/) &&  !numberOfPeople.value.match(/^\d+/)){
        billAmount.classList.add('wrong--input')
        numberOfPeople.classList.add('wrong--input')
    }
    if (!numberOfPeople.value.match(/^\d+/)){numberOfPeople.classList.add('wrong--input')}
    if (!billAmount.value.match(/^\d+/)){billAmount.classList.add('wrong--input')}


    if (billAmount.value.match(/^\d+/) &&  numberOfPeople.value.match(/^\d+/)){
        billAmount.classList.add('correct--input')
        numberOfPeople.classList.add('correct--input')

        var totalAmountofTip = (5 * billAmount.value) / 100
        var tipPerEachPerson = totalAmountofTip / numberOfPeople.value; 

        totalAmountofTip = Number(totalAmountofTip).toFixed(1)
        tipPerEachPerson = Number(tipPerEachPerson).toFixed(1)
        
        totalTip.innerHTML = totalAmountofTip
        tipPerPerson.innerHTML = tipPerEachPerson
    }
}

function percentten() {
    
    if (numberOfPeople.value.match(/^\d+/)){numberOfPeople.classList.add('correct--input')}
    if (billAmount.value.match(/^\d+/)){billAmount.classList.add('correct--input')}

    if (!billAmount.value.match(/^\d+/) &&  !numberOfPeople.value.match(/^\d+/)){
        billAmount.classList.add('wrong--input')
        numberOfPeople.classList.add('wrong--input')
    }
    if (!numberOfPeople.value.match(/^\d+/)){numberOfPeople.classList.add('wrong--input')}
    if (!billAmount.value.match(/^\d+/)){billAmount.classList.add('wrong--input')}


    if (billAmount.value.match(/^\d+/) &&  numberOfPeople.value.match(/^\d+/)){
        billAmount.classList.add('correct--input')
        numberOfPeople.classList.add('correct--input')

        var totalAmountofTip = (10 * billAmount.value) / 100
        var tipPerEachPerson = totalAmountofTip / numberOfPeople.value; 

        totalAmountofTip = Number(totalAmountofTip).toFixed(1)
        tipPerEachPerson = Number(tipPerEachPerson).toFixed(1)
        
        totalTip.innerHTML = totalAmountofTip
        tipPerPerson.innerHTML = tipPerEachPerson
    }
}

function percentfiften() {
    
    if (numberOfPeople.value.match(/^\d+/)){numberOfPeople.classList.add('correct--input')}
    if (billAmount.value.match(/^\d+/)){billAmount.classList.add('correct--input')}

    if (!billAmount.value.match(/^\d+/) &&  !numberOfPeople.value.match(/^\d+/)){
        billAmount.classList.add('wrong--input')
        numberOfPeople.classList.add('wrong--input')
    }
    if (!numberOfPeople.value.match(/^\d+/)){numberOfPeople.classList.add('wrong--input')}
    if (!billAmount.value.match(/^\d+/)){billAmount.classList.add('wrong--input')}


    if (billAmount.value.match(/^\d+/) &&  numberOfPeople.value.match(/^\d+/)){
        billAmount.classList.add('correct--input')
        numberOfPeople.classList.add('correct--input')

        var totalAmountofTip = (15 * billAmount.value) / 100
        var tipPerEachPerson = totalAmountofTip / numberOfPeople.value; 

        totalAmountofTip = Number(totalAmountofTip).toFixed(1)
        tipPerEachPerson = Number(tipPerEachPerson).toFixed(1)

        totalTip.innerHTML = totalAmountofTip
        tipPerPerson.innerHTML = tipPerEachPerson
    }
}


function percenttwentyfive() {
    
    if (numberOfPeople.value.match(/^\d+/)){numberOfPeople.classList.add('correct--input')}
    if (billAmount.value.match(/^\d+/)){billAmount.classList.add('correct--input')}

    if (!billAmount.value.match(/^\d+/) &&  !numberOfPeople.value.match(/^\d+/)){
        billAmount.classList.add('wrong--input')
        numberOfPeople.classList.add('wrong--input')
    }
    if (!numberOfPeople.value.match(/^\d+/)){numberOfPeople.classList.add('wrong--input')}
    if (!billAmount.value.match(/^\d+/)){billAmount.classList.add('wrong--input')}


    if (billAmount.value.match(/^\d+/) &&  numberOfPeople.value.match(/^\d+/)){
        billAmount.classList.add('correct--input')
        numberOfPeople.classList.add('correct--input')

        var totalAmountofTip = (25 * billAmount.value) / 100
        var tipPerEachPerson = totalAmountofTip / numberOfPeople.value; 
        
        totalAmountofTip = Number(totalAmountofTip).toFixed(1)
        tipPerEachPerson = Number(tipPerEachPerson).toFixed(1)

        totalTip.innerHTML = totalAmountofTip
        tipPerPerson.innerHTML = tipPerEachPerson
    }
}


function percentfifty() {
    
    if (numberOfPeople.value.match(/^\d+/)){numberOfPeople.classList.add('correct--input')}
    if (billAmount.value.match(/^\d+/)){billAmount.classList.add('correct--input')}

    if (!billAmount.value.match(/^\d+/) &&  !numberOfPeople.value.match(/^\d+/)){
        billAmount.classList.add('wrong--input')
        numberOfPeople.classList.add('wrong--input')
    }
    if (!numberOfPeople.value.match(/^\d+/)){numberOfPeople.classList.add('wrong--input')}
    if (!billAmount.value.match(/^\d+/)){billAmount.classList.add('wrong--input')}


    if (billAmount.value.match(/^\d+/) &&  numberOfPeople.value.match(/^\d+/)){
        billAmount.classList.add('correct--input')
        numberOfPeople.classList.add('correct--input')

        var totalAmountofTip = (50 * billAmount.value) / 100
        var tipPerEachPerson = totalAmountofTip / numberOfPeople.value; 
        totalAmountofTip = Number(totalAmountofTip).toFixed(1)
        tipPerEachPerson = Number(tipPerEachPerson).toFixed(1)
        totalTip.innerHTML = totalAmountofTip
        tipPerPerson.innerHTML = tipPerEachPerson
    }
}

percent5.addEventListener('click', percentfive)
percent10.addEventListener('click', percentten)
percent15.addEventListener('click', percentfiften)
percent25.addEventListener('click', percenttwentyfive)
percent50.addEventListener('click', percentfifty)

