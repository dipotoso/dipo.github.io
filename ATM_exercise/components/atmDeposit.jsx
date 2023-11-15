
function ATMDeposit({onChange, isDeposit, isValid}) {
    const choice = ['Deposit', 'Cash Back']
    
    return (
    <label> 
    <h3>{choice[Number(!isDeposit)]}</h3>

            <input 
                id='number-input'
                width='200'
                type="number" 
                onChange={onChange} 
                />
            <input  
                id='submit-input'
                type="submit" 
                value='Submit'
                disabled={!isValid}
                />

    </label>
    );
}
