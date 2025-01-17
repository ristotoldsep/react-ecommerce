import { useEffect, useState/* , useContext */ } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import FormInput from "../form-input/form-input.component";
import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';

// import { UserContext } from "../../contexts/user.context";

// import {
//   // auth,
//   // signInWithGoogleRedirect,
//   signInWithGooglePopup,
//   // createUserDocumentFromAuth,
//   signInAuthUserWithEmailAndPassword
// } from "../../utils/firebase/firebase.utils";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  // const { setCurrentUser } = useContext(UserContext);

  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.user.currentUser);

  // Redirect to the homepage if the user is already signed in
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // const { user } = await signInAuthUserWithEmailAndPassword(email, password);

      // setCurrentUser(user);
      
      // console.log(user);

      dispatch(emailSignInStart(email, password));

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
  

  // const signInWithGoogle = async () => {
  //   // const { user } = await signInWithGooglePopup(); // Destructuring response object
  //   await signInWithGooglePopup(); 
  //   // setCurrentUser(user);
  //   // const userDocRef = await createUserDocumentFromAuth(user);
  //   // console.log(response);
  // };

  const signInWithGoogle = async () => {
    // try {
    //   const { user } = await signInWithGooglePopup(); // Destructure to get user
    //   // Perform any additional actions like setting the current user if needed
  
    //   console.log(user);
  
    //   // Navigate to the homepage after successful sign-in
    //   navigate('/');
    // } catch (error) {
    //   console.error("Error signing in with Google:", error.message);
    // }

    try {
      dispatch(googleSignInStart());
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }

    
  };

  return (
    <SignInContainer className="sign-in-container">

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

        <ButtonsContainer className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </ButtonsContainer>

        {/* <button onClick={signInWithGoogleRedirect}>
          Sign in with Google redirect
        </button> */}
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
