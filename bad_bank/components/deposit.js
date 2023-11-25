function Deposit () {
    const ctx = React.useContext(UserContext)
    const [accountBalance, setAccountBalance] = React.useState(ctx.users[0]['balance']);
    const [deposit, setDeposit] = React.useState('');

    function handleDeposit () {
        if (deposit <= 0) {
            alert ('Please deposit a positive amount')
            return;
        }
        setAccountBalance(Number(accountBalance)+Number(deposit));
        ctx.users[0]['balance'] = Number(accountBalance)+Number(deposit);
        alert(`Your $${deposit} deposit was kindly receive ${ctx.users[0].name}`);
        setDeposit('')

    }

    return (
        <Card
            bgcolor='primary-subtle'
            txtcolor='black'
            header ='Deposit'
            body   = { (
                <>
                    <strong>Balance <span className='balance-item'>${accountBalance}</span></strong><br/><br/><br/>
                    <label> Deposit Amount<br/><br/>
                    <input type="number" className="form-control" 
                    id="deposit" placeholder="Deposit Amount" 
                    value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
                        </label>
                    <br/>
                    <button type="submit" className="btn btn-light" disabled={!deposit}
                    onClick={handleDeposit}>Deposit</button>
                    

                </>
            )}
        />
    )
}