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
const datalogin = document.getElementById(datalogin);
    console.log(datalogin,"pp")
    // ฟังก์ชันในการสร้างบัญชีผู้ใช้
    // signUp.addEventListener('click', (e) => {
    //     var email = document.getElementById('email').value;
    //     var password = document.getElementById('password').value;
    //     var username = document.getElementById('username').value; //ชื่อผู้ใช้
    //     var address = document.getElementById('address').value; //ที่อยู่
    //     var phoneNumber = document.getElementById('phone-number').value; //เบอร์โทรศัพท์
    //     // var username = document.getElementById('username').value;
    //     console.log(password);
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         // Signed up 
    //         const user = userCredential.user;
    //         // console.log('user created');
    //         // ...
        
    //         // save sign up datails in realtime database บันทึกข้อมูลในการลงทะเบียนฐานข้อมูลเรียลไทม์
    //         set(ref(database, 'users/' + user.uid),{
    //             email: email,
    //             password: password,
    //             username: username,
    //             address: address,
    //             phoneNumber:phoneNumber
                
    //         })
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
            
    //         // console.log(errorMessage);
    //     });
    //     // 'file' comes from the Blob or File API
    //     uploadBytes(ref(storage, email), file).then((snapshot) => {
    //         console.log('Uploaded a blob or file!');
    //     });
    // })

    // ฟังก์ชันในส่วนการ login
    document.getElementById('login').addEventListener('click', (e) => {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log(userCredential,"rdfx")
                // Signed in 
                    const user = userCredential.user;
                    console.log(user,"iuyr")
                    
                // ...

                // update user login details in realtime database อัปเดตรายละเอียดการเข้าสู่ระบบของผู้ใช้ในฐานข้อมูลเรียลไทม์
                
                    set(ref(database, 'users/' + user.uid), {
                        email: email,
                        password: password,
                        test: "test"
                        
                    });
                    console.log(auth.currentUser.email,"ooo");
            })
                .catch((error) => {
                console.log(error)
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        // const storage = getStorage();
        // getDownloadURL(ref(storage, email))
        // .then((url) => {
        //     const img = document.getElementById('myimg');
        //     img.setAttribute('src', url);
        // })
        // .catch((error) => {
        //    console.log(error)
        // });

    });


// ฟังก์ชันในส่วนการ logout
    // const user = auth.currentUser;
    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         // User is signed in, see docs for a list of available properties
    //         // https://firebase.google.com/docs/reference/js/auth.user
    //         const uid = user.uid;
    //         // ...
    //     } else {
    //         // User is signed out
    //         // ...
    //     }
    // });
    // logout.addEventListener('click', (e) => {
    //     signOut(auth).then(() => {
    //     // Sign-out successful.
    //     }).catch((error) => {
    //         // An error happened.
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //     });
// });
async function getprofile(db) {
    const pfcol = collection(db, 'profile')
    const pfSnapshot = await getDocs(pfcol)
    return pfSnapshot
}
function showData(profile) {
    
}

//ดีงกลุ่ม document เก็บไว้ในตัวแปล data
const data = await getprofile(db)
console.log(data, "is")
data.forEach(profile => {
    showData(profile)
})



         