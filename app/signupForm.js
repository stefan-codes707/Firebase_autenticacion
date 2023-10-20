import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";
import {auth} from './firebase.js';
import { showMessage } from "./showMessage.js";

const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener('submit', async(e) =>{
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    console.log(email, password);

    try {
        const userCredentials =  await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredentials);

        const signupModal = document.querySelector("#signupModal");
        const modal = bootstrap.Modal.getInstance(signupModal);
        modal.hide();

        showMessage("Wecolme " + userCredentials.user.email);

    } catch (error) {
        if (error.code == "auth/network-request-failed"){
            showMessage("El email es incorrecto", "error");
        } else if(error.code == "auth/weak-password"){
            showMessage("La contraseña es débil", "error");
        }else{
            showMessage(code.error, "error");
        }
    }
} )