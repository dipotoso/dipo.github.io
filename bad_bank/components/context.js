const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function Card(props){
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 ' + bg + txt;
    }
  
    return (
      <div className={classes()} style={{maxWidth: "30rem"}}>
        <div className="card-header header-addon">{props.header}</div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </div>
      </div>      
    );    
  }

  function BankForm(props) {
    const[show, setShow] = React.useState(true);
    const[status, setStatus] = React.useState('');
    const[name, setName] = React.useState('');
    const[email, setEmail] = React.useState('');
    const[password, setPassword] = React.useState('');

        
    function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      } 

    if (label === 'password') {
        const pwdLength = field.length;
        if (pwdLength < 8) {
        alert('Invalid password: password cannot be less than 8 characters long')
        return false;
        }
      }

      if(label === 'email') {
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!field.match(validRegex)) {           
          alert('Invalid email address')
          return false;
      }
    }
      return true;
    
  }

  function handleCreate(){
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    props.handle({name, email, password});
    alert('Successfully created account')
    setShow(false);
  }
  
  
  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }
    return (
    <Card
      header={props.label}
      bgcolor = {props.bgcolor}
      txtcolor = {props.txtcolor}
      status={status}
      body = {show ? (
          <>
           
            <label>Name
            <input type="text" className="form-control" id="name"
              placeholder="Enter name"
              value={name}
              onChange={e => setName(e.currentTarget.value)}
            /><br/></label><br/>
            <label>
            Email address<br/>
            <input type="email" className="form-control" id="email" 
              placeholder="Enter email" value={email} 
              onChange={e => setEmail(e.currentTarget.value)}
            /><br/></label><br/>
            <label>Password<br/>
            <input type="password" className="form-control" id="password"
            placeholder="Enter password" value={password}
            onChange={e => setPassword(e.currentTarget.value)}
            /><br/></label><br/>
            <button type="submit" className="btn btn-light" disabled={!name || !email || !password}
            onClick={handleCreate}>Create Account</button>
            </>
        ) : (
           <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light"
              onClick={clearForm}>{props.successButton}</button>
            </>
        )

      } />
    

    )

  }

  function BankTable({theadData, tbodyData}) {
    return (
   <table>
       <thead>
          <tr>
           {theadData.map(heading => {
             return <th key={heading}>{heading}</th>
           })}
         </tr>
       </thead>
       <tbody>
           {tbodyData.map((row, index) => {
               return <tr key={index}>
                   {theadData.map((key, index) => {
                        return <td key={row[key]}>{row[key]}</td>
                   })}
             </tr>;
           })}
       </tbody>
   </table>
    )
  }