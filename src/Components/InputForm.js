import React from 'react';

window.onload=function(){

    const exp = document.querySelector('.addExpense'); //tbody
    const expInp = document.querySelector('.expense');
    const dateInp = document.querySelector('.date');
    const amountInp = document.querySelector('.amount');
    const btn = document.querySelector('.btn');
    
    
    
    function createTd(e, elNewTr){
         var td = document.createElement('td');;
         td.innerText = e.value;
         e.value = "";
         // This statement appends the TD inside the TR as passed in the parameter
         elNewTr.append(td);
    }
    
    function createTr(){
        var newTr = document.createElement('tr');
        newTr.className = ".newTr";
        exp.append(newTr);
        return newTr;
    }

    function eraseTr(e){
        var eraseTr = e.target;
        eraseTr.parentNode.remove();
        exp.focus();
    }

    function eraseBtn(e){
        var erBtn = document.createElement('div');
        erBtn.className = "erBtn";
        erBtn.innerText = "brisi"
        erBtn.addEventListener('click', eraseTr);
        e.appendChild(erBtn);
    }
    
    function createAllTd(elNewTr){
        // Pass the newly created TR element to the TD functions so that we can append TD inside the new TR 
        createTd(expInp, elNewTr); 
        createTd(dateInp, elNewTr); 
        createTd(amountInp, elNewTr);
    }
    
    btn.addEventListener('click', (e) => {
            e.preventDefault(); 
            // Catch the new TR element as returned 
            var elNewTr = createTr();
            // Pass it to the TD creation process for usage
            createAllTd(elNewTr);
            
            eraseBtn(elNewTr);
            expInp.focus();
            
        });

}

function InputForm(){


    

    return(
        <div>
            <form>
                <label htmlFor="expense">Expenses:</label>
                <input className='expense' id="expense" name="expense" type='text' placeholder='Add new expense' autoFocus/>
                <label htmlFor="date">Date:</label>
                <input type='date' id="date" className='date'/>
                <label htmlFor="amount">Amount:</label>
                <input type='number' id="amount" className='amount'/>
                <button type="submit" className='btn'>Add</button>
            </form>
        </div>
    );

}

export default InputForm;