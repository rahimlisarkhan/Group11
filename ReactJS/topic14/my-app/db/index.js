// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
import {
    getDatabase,
    ref,
    set,
    push,
    onValue
} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAmqcOAbmt5FEK55Uglon4fbtVaMv_rBYg",
    authDomain: "nextjs-e0022.firebaseapp.com",
    projectId: "nextjs-e0022",
    storageBucket: "nextjs-e0022.appspot.com",
    messagingSenderId: "862555905592",
    databaseURL: "https://nextjs-e0022-default-rtdb.firebaseio.com/",
    appId: "1:862555905592:web:ed839defd7661ea81c90cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);



export const writeDataBase = (collection, data) => {
    push(ref(database, collection), data);
}

export const readDataBase = async (collection) => {
    let data
    onValue(ref(database, collection), (snapshot) => {
         data =  snapshot.val();
    });

    return data
}