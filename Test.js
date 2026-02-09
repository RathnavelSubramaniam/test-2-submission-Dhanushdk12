import React from "react";
import { useFormik } from "formik";


function App() {
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "field required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "username should be an email";
    }

    if (!values.password) {
      errors.password = "field required";
    }

    return errors;
  };

  const onSubmit = () => {
    alert("You have been Login successfully....");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="mail">
        <h3>LOGIN FORM</h3>
        <label>Email</label>
      <input
        name="email"
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <div id="emailError" style={{color:"GREEN"}}>{formik.errors.email}</div>
       
       <label>Password</label>
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <div id="passwordError" style={{color:"blue"}}>{formik.errors.password}</div>

      <button>
        Submit
      </button>
    </form>
  );
}

export default App;

