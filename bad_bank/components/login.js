function Login (props) {
    const ctx = React.useContext(UserContext)
    const [isValid, setIsValid] = React.useState(false);
    const [userLogin, setUserLogin] = React.useState({email:'',
                                                    password:''})
    function handleLogin() {
        const client =  ctx.users.filter(user => {
            return (user.email === userLogin.email && user.password === userLogin.password)
        } )
        if (client.length > 0) {
            setUserLogin(userLogin)
            setIsValid(true)
        } else {
            alert(`Please enter valid email and password or set up a new account`)
           
            return;
        }
    }
    function newRoute() {
        return props.history.push('/balance')
        
    }

    return (
        <Card 
            bgcolor='success'
            txtcolor='white'
            header="Login Page"
            
            body={ !isValid ? (
            <form>
                Email address<br/>
                <input type="email" className="form-control" id="email" 
                placeholder="Enter email" value={userLogin.email} 
                        onChange={e => {
                            userLogin.email = e.currentTarget.value;
                            setUserLogin({...userLogin})}}/><br/>
                Password<br/>
                <input type="password" className="form-control" id="password" 
                placeholder="Enter password" value={userLogin.password} 
                            onChange={e => {
                                userLogin.password = e.currentTarget.value;
                            setUserLogin({...userLogin})}}/><br/>
                <button type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
            </form>):
            <>
            <h5>Success</h5>
              <button type="submit" className="btn btn-light" 
              onClick={newRoute}>Access your Account</button>
            </>
            
            }
        />
    )
}