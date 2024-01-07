import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const Signin = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup(); // Destructuring response object
        const userDocRef = await createUserDocumentFromAuth(user);
        // console.log(response);
    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google popup
            </button>
        </div>
    )
}

export default Signin;