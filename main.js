import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
import {auth, db} from './app/firebase.js';
import {loginCheck} from './app/loginCheck.js';
import { setupCards } from './app/cardLists.js'

import "./app/logout.js";
import './app/signupForm.js';
import './app/signinForm.js'
import './app/googleLogin.js'
import './app/facebookLogin.js'
import './app/githubLogin.js'



onAuthStateChanged(auth, async (user) =>{

    if(user){
      const querySnapshot = await getDocs(collection(db, "cards"))
      setupCards(querySnapshot.docs);
    }else{
        setupCards([]);
    }


    loginCheck(user);
});