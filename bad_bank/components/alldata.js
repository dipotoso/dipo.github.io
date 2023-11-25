

function AllData () {
    const ctx = React.useContext(UserContext)
    const theadData = ['name', 'email', 'password']//Object.keys(ctx.users[0])
    const tbodyData = ctx.users

    return (
        <Card 
            bgcolor='primary-subtle'
            txtcolor='black'
            header ='ALL DATA'
            
            body = <BankTable 
                theadData={theadData}
                tbodyData={tbodyData}
            />
        />
    )
}
