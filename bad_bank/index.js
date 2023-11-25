function Spa () {
    return (
        <>
        <HashRouter>
            <NavBar/>
            <UserContext.Provider value={{users:[{name: 'dipo',
                                                email: 'dipo@xyz.com',
                                                password: 'secretpassword',
                                                balance:50}]}}>
                <section className='container' style={{padding:'20px'}}>
                    <Route path='/' exact component ={Home}/>
                    <Route path="/CreateAccount/" component={CreateAccount} />
                    <Route path="/deposit/" component={Deposit} />
                    <Route path="/withdraw/" component={Withdraw} />
                    <Route path="/alldata/" component={AllData} />
                </section>
            </UserContext.Provider>
        </HashRouter>
        </>
    )
}

ReactDOM.render(
    <Spa />,
    document.getElementById('root')
)