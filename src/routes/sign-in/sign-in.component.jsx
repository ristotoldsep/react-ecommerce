// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import {
  // auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  // signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const Signin = () => {

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
  

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup(); // Destructuring response object
    const userDocRef = await createUserDocumentFromAuth(user);
    // console.log(response);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with Google popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default Signin;
