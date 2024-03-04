import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";

import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCyrNBpSnag4W2D8y5qKA_miHZ3vsyE784",
    authDomain: "authentication-app-79f47.firebaseapp.com",
    databaseURL: "https://authentication-app-79f47-default-rtdb.firebaseio.com",
    projectId: "authentication-app-79f47",
    storageBucket: "authentication-app-79f47.appspot.com",
    messagingSenderId: "155210703093",
    appId: "1:155210703093:web:53d22d76c4689a7a7665bc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// Function to add data to Firestore
async function addEmployeeToFirestore(fname, lname, birthDate, username, password, role, address, note) {

    try {
        const docRef = await addDoc(collection(db, "employees"), {
            fname: fname,
            lname: lname,
            birthDate: birthDate,
            username: username,
            password: password,
            role: role,
            address: address,
            note: note
        });
        console.log("Document written with ID: ", docRef.id);
        return docRef.id
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
window.addEmployeeToFirestore = addEmployeeToFirestore;


// Function to get all employees from Firestore
export async function getAllEmployees() {
    try {
        const querySnapshot = await getDocs(collection(db, "employees"));
        const employees = [];
        querySnapshot.forEach((doc) => {
            employees.push(doc.data());
        });
        return employees;
    } catch (e) {
        console.error("Error getting documents: ", e);
    }
}
window.getAllEmployees = getAllEmployees;
