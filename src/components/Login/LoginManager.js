


import firebase from "firebase/app"
import "firebase/auth"
import firebaseConfig from "./firebase.config"


export const initializeLoginFramework=()=>{
    if(firebase.apps.length===0){
        firebase.initializeApp(firebaseConfig);
    }
}


export const handleGoogleSignIn=()=>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then(res=>{
      const {displayName,email,photoURL}=res.user;
      const signInUSer={
        isSignIn:true,
        name:displayName,
        email:email,
        photo:photoURL,
        success:true
      }
    //   setUser(signInUSer)
    return signInUSer;
    })
    .catch(error=>{
      console.log(error);
      console.log(error.message);
    })
  }
 export const handleSignOut=()=>{
    return firebase.auth().signOut()
    .then(res=>{
      const signOutUser={
        isSignIn: false,
        name:'',
        email:'',
        photo:'',
        error:'',
        success:false
      }
    //   setUser(signOutUser)
    return signOutUser;
    })
  }
