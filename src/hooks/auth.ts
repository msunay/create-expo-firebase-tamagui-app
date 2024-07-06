import { type UserCredential, signInAnonymously } from "firebase/auth";
import { useState } from "react";
import { auth } from "@/src/services/firebase";

export const useAnonSignIn = (): UserCredential | null => {
  const [userCredentialState, setUserCredentialState] = useState<UserCredential | null>(null)

  signInAnonymously(auth)
    .then(userCredential => {

      console.log('uid:', userCredential.user.uid);
      setUserCredentialState(userCredential)
    })


  return userCredentialState;
}