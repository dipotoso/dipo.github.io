function CreateAccount () {

const ctx = React.useContext(UserContext)

function handle(data) {
ctx.users.unshift({name:data.name,
              email:data.email,
              password:data.password,
              balance:0})

  return true;
}



return (
    
    <BankForm
      bgcolor='primary-subtle'
      txtcolor='black'
      label = 'Create Account'
      handle={handle}
      hideAmount={true}
      successButton='Add another account'
    />   
)
}