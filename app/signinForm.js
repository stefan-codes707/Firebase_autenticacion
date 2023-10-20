import {signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector("#login-form");

signInForm.addEventListener('submit',  async e =>{

    const email = signInForm['login-email'].value;
    const password = signInForm['login-password'].value;


    try {
        const userCredentials = await signInWithEmailAndPassword(auth,email, password);
        console.log(userCredentials);

        const signinModal = document.querySelector("#signinModal");
        const modal = bootstrap.Modal.getInstance(signinModal);
        modal.hide();

        showMessage('Welcome ' + userCredentials.user.email);

    } catch (error) {
        if (error.code == "auth/network-request-failed"){
            showMessage("El email o contraseña es incorrecto", "error");
        }else{
            showMessage(error.code, "error");
        }
    }
})