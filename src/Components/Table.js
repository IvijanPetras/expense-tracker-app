import React from 'react';

function Table() {
 
    return(
        <div className='table'>
            <table border="1" className='table' width="50%">
                <thead>
                    <tr>
                        <th>Expense</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th className='emptyTh'></th>
                    </tr>   
                </thead>
                <tbody className='addExpense' >
                    
                </tbody>
            </table>
        </div>
    );

}

export default Table;