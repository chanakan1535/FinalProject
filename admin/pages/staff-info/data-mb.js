import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import {getFirestore, collection, getDocs  } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";
import { getStorage, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-storage.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
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
    const db = getFirestore(app);
    const database = getDatabase(app);
    const auth = getAuth();
    const storage = getStorage(app);
    const datamb = document.getElementById(datamb);
    console.log(datamb, "mb")
    
    //ฟังก์ชันในการสร้างบัญชีผู้ใช้
    signUp.addEventListener('click', (e) => {
        var username = document.getElementById('username').value; //ชื่อผู้ใช้
        //var address = document.getElementById('address').value; //ที่อยู่
        //var phoneNumber = document.getElementById('phone-number').value; //เบอร์โทรศัพท์
        // var username = document.getElementById('username').value;
        //console.log(password);
        createUserWithEmailAndPassword(auth, username)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            // console.log('user created');
            // ...
        
            // save sign up datails in realtime database บันทึกข้อมูลในการลงทะเบียนฐานข้อมูลเรียลไทม์
            set(ref(database, 'username/' + user.uid),{
                username: username
                
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
            // console.log(errorMessage);
        });
        // 'file' comes from the Blob or File API
        uploadBytes(ref(storage, email), file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
    })