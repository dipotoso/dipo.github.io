import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
    emailField: '',
    pswField: ``
  },


  validate: values => {
    const errors = {};
      if(!values.emailField) {
        errors.emailField=`Field required`
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailField)) {
        errors.emailField = 'Username should be an email'
      };
      if(!values.pswField) {
        errors.pswField=`Field required`
      };
      return errors;
  },

  onSubmit: errors => {
   
      if(errors.emailField && errors.pswField) {
      return alert(`Login succesful`)
      };
  }
})

  return (
    <section>
    <form onSubmit={formik.handleSubmit}>
      <section> Email: </section>
       <input 
       id='emailField'
        type='text' 
        name='emailField'
        onChange= {formik.handleChange}
        value = {formik.values.emailField}
      />
      {formik.errors.emailField ? 
      <div 
        id='emailError' 
        style={{color:'red'}}>{formik.errors.emailField}
      </div>: null}
      
      <section> Password </section>
      <input 
        id = 'pswField'
        type='text' 
        name='pswField'
        onChange= {formik.handleChange}
        value = {formik.values.pswField}
        />
        {formik.errors.pswField ? 
      <div 
        id='pswError' 
        style={{color:'red'}}>{formik.errors.pswField}
      </div>: null}
      <section>
        <button 
        id='submitBtn'
        >Submit</button>
      </section>
     
    </form>
      <p>

        Simple form fields
      </p>
    </section>
  );
}

export default App;
