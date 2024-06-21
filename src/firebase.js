
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { addDoc, collection, getFirestore} from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDY66QAi3sjr-PZ7752Ptq5yXWmFlzFSco",
  authDomain: "netflux-clone-e8ad5.firebaseapp.com",
  projectId: "netflux-clone-e8ad5",
  storageBucket: "netflux-clone-e8ad5.appspot.com",
  messagingSenderId: "449054995309",
  appId: "1:449054995309:web:745fa7387e29d89638a064",
  measurementId: "G-EG8839BJNG"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


const signup =  async(name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        await addDoc(collection(db, "user"),{
            uid: user.uid,
            name,
            authProvider:"local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login =async(email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('- ').join(" "));
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db , login, signup, logout};