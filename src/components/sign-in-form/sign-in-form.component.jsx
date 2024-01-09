import { useState } from "react";

// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';

import {
  // auth,
  // signInWithGoogleRedirect,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(response);

      // Reset form fields after successful submission
      resetFormFields();

    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        alert("Wrong email or password!");
      } else {
        // Handle errors, e.g., display an error message
        console.error("Error signing in:", error.message);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };


   // GOOGLE LOGIN WITH REDIRECT
  // useEffect(() => {
  //   const authenticateUser = async () => {
  //     try {
  //       const response = await getRedirectResult(auth);
  //       console.log(response);

  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //       }

  //     } catch (error) {
  //       console.error('Error fetching redirect result:', error);
  //     }
  //   };
  
  //   authenticateUser();
  // }, []);
  

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup(); // Destructuring response object
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(response);
  };

  return (
    <div className="sign-in-container">

      <h2>Already have an account?</h2>

      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
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

        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>

        {/* <button onClick={signInWithGoogleRedirect}>
          Sign in with Google redirect
        </button> */}
      </form>
    </div>
  );
};

export default SignInForm;
