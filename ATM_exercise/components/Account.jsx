
function Account() {
    const [accountState, setAccountState] = React.useState(0);
    const [amount, setAmount] = React.useState(0)
    const [isDeposit, setIsDeposit] = React.useState(true);
    const [atmMode, setAtmMode] = React.useState('');
    const [validTranscation, setValidTrasaction] = React.useState(false)

    

    const handleChange = (event) => {
        console.log(Number(event.target.value))
        if (Number(event.target.value) <= 0) {
            setValidTrasaction(false);
        }
        if (atmMode === 'Cash Back' && Number(event.target.value) > accountState) {
            setValidTrasaction(false);
        } else {setValidTrasaction(true)
        }
        setAmount(Number(event.target.value))
        }

    const handleSubmit = (event) => {
        let newTotal = isDeposit ? accountState + amount : accountState - amount;
        if (newTotal < 0) {
            return alert(`You are overdrawn by $${newTotal}.  Maximum available amount is: $${accountState}. `)
        } else {
        setAccountState(newTotal)};
        event.preventDefault();
    }

    const handleModeSelect = (event) => {
        setAtmMode(event.target.value);
        if(event.target.value === 'Deposit') {
            setIsDeposit(true)
        } else setIsDeposit(false)

    }

    return (
        <section className='amount-box'>

            <form onSubmit={handleSubmit}>
                <h2> Account Balance: ${accountState}</h2>
                <label>Select an action below to continue:  </label>
                    <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
                    <option id="no-selection" value=""></option>
                    <option id="deposit-selection" value="Deposit">Deposit</option>
                    <option id="cashback-selection" value="Cash Back">Cash Back</option>
                    </select>

                {atmMode && <ATMDeposit onChange={handleChange} isDeposit={isDeposit} isValid={validTranscation} />}
            </form>
        </section>
    )

}
