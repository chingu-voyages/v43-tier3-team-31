import { Button, Label, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { auth } from "../utils/firebaseClient";

import { GoogleAuthProvider } from "firebase/auth";
function Login() {
  const router = useRouter();

  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");

  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/dashboard/overview");
      }
    });
    return () => unsubscribe();
  }, []);

  const login = async (e: any) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, signinEmail, signinPassword).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const googleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);

      router.push("/dashboard/overview");
    } catch (error) {
      // Handle login error here (e.g., display an error message)
      console.error("Login error: ", error);
    }
  };

  const createAccount = async (e: any) => {
    e.preventDefault();
    if (signupPassword !== signupConfirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(
        auth,
        signupEmail,
        signupPassword
      ).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User -->", user);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div className="container mx-auto flex items-center h-screen justify-center">
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@dina.com"
            value={signinEmail}
            onChange={(e) => setSigninEmail(e.target.value)}
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            value={signinPassword}
            onChange={(e) => setSigninPassword(e.target.value)}
            placeholder="********"
            required={true}
          />
        </div>
        <Button type="submit" onClick={login}>
          Login
        </Button>
        <Button color="purple" onClick={googleLogin}>
          Login with Google
        </Button>

        <div className="flex items-center justify-center gap-3">
          <span>Don't have an account? </span>
          <Button color="warning" onClick={onOpenModal}>
            Sign Up
          </Button>
        </div>
      </form>

      <>
        <Modal open={open} onClose={onCloseModal} center>
          <form className="w-80 rounded-lg">
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign Up
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                  id="email"
                  placeholder="name@dina.com"
                  required={true}
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Enter password" />
                </div>
                <TextInput
                  id="password"
                  placeholder="********"
                  type="password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="confirmPassword" value="Confirm password" />
                </div>
                <TextInput
                  id="confirmPassword"
                  type="password"
                  placeholder="********"
                  required={true}
                  value={signupConfirmPassword}
                  onChange={(e) => setSignupConfirmPassword(e.target.value)}
                />
              </div>
              <div className="w-full">
                <Button onClick={createAccount}>Sign Up</Button>
              </div>
            </div>
          </form>
        </Modal>
      </>
    </div>
  );
}
import { useRouter } from "next/router";

export default Login;
