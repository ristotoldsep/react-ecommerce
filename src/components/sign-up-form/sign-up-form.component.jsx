import { useState/* , useContext */ } from "react";

import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import Button from "../button/button.component";
// import { UserContext } from "../../contexts/user.context";

import { signUpStart } from "../../store/user/user.action";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
 
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  // const { setCurrentUser } = useContext(UserContext);

  const dispatch = useDispatch(); // Dispatch function from Redux

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      alert("Passwords do not match");

      return;
    }

    try {
      // // Call the Firebase function to create a user
      // const { user } = await createAuthUserWithEmailAndPassword(
      //   email,
      //   password
      // );

      // // setCurrentUser(user);

      // await createUserDocumentFromAuth(user, { displayName });

      dispatch(signUpStart(email, password, displayName));

      // Reset form fields after successful submission
      resetFormFields();

    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use!");
      } else {
        // Handle errors, e.g., display an error message
        console.error("Error signing up:", error.message);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    // console.log(event.target);
    // console.log(formFields);

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type='submit'>Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
