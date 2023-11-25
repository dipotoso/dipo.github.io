function Withdraw () {
    const ctx = React.useContext(UserContext)
    const [accountBalance, setAccountBalance] = React.useState(ctx.users[0]['balance'] );
    const[withdrawal, setWithdrawal] = React.useState('');

    function handleWithdrawal () {
        if (withdrawal <= 0) {
            alert ('Please withdraw a positive amount')
            setWithdrawal(0)
            return;
        }
        if (withdrawal > accountBalance) {
            alert ('Your account is overdrawn, please request a lower amount')
            setWithdrawal(0)
            return;
        }

       
        setAccountBalance(Number(accountBalance)-withdrawal)
        ctx.users[0]['balance'] = Number(accountBalance) - Number(withdrawal);
        alert(`Your $${withdrawal} withdrawal has been processed ${ctx.users[0].name}`);    
        setWithdrawal('');
        return ctx.users[0]['balance'];
    }

return (
        <Card
            bgcolor='primary-subtle'
            txtcolor='black'
            header ='Withdraw'
            body   = { (
                <>
                    <strong>Balance <span className='balance-item'>${accountBalance}</span></strong><br/><br/><br/>
                    <label> Withdraw Amount<br/><br/>
                    <input type="number" className="form-control" 
                    id="withdraw" placeholder="Withdraw Amount" 
                    value={withdrawal} onChange={e => setWithdrawal(e.currentTarget.value)}/><br/>
                        </label>
                    <br/>
                    <button type="submit" className="btn btn-light" disabled={!withdrawal}
                    onClick={handleWithdrawal}>Withdraw</button>
                    

                </>
            )}
        />
    )
            }