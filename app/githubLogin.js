import { GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {auth} from './firebase.js';
import { showMessage } from "./showMessage.js";

const githubButton = document.querySelector("#githubLogin");
githubButton.addEventListener('click', async() =>{

    const provider = new GithubAuthProvider();

    try {
        const credentials = await signInWithPopup(auth, provider);

        const signinModal = document.querySelector("#signinModal");
        const modal = bootstrap.Modal.getInstance(signinModal);
        modal.hide();

        showMessage("Welcome " + credentials.user.displayName);

    } catch (error) {
        console.log(error);
        showMessage(error.code, "error");
    }
})