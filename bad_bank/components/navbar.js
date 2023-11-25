function NavBar () {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/"><img src='./images/desert_small.jpg' width='75' height='50'
             className='d-inline-block align-text-center'/> LasgidiBank</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item nav-addon">
                <Link className="nav-link nav-link-addon" to="/CreateAccount/">Create Account</Link><span>
                Create a new account or skip if you already have one 
                </span>
            </li>
            
            <li className="nav-item nav-addon" >
                <Link className="nav-link nav-link-addon" to="/deposit/">Deposit</Link><span>
                Add funds into your account
                </span>
            </li>
            <li className="nav-item nav-addon">
                <Link className="nav-link nav-link-addon" to="/withdraw/">Withdraw</Link><span>
                Withdraw funds from your account
                </span>
            </li>
           
            <li className="nav-item nav-addon">
                <Link className="nav-link nav-link-addon" to="/alldata/">All Data</Link><span>
                    Client data repository
                </span>
            </li>          
            </ul>
      </div>
    </nav>
        </>
    )
}