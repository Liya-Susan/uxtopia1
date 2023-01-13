import firebase from 'firebase';

/**
 * @typedef {import('../../models/User').User} User
 */

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyALR-0uj5wdLbA9QNYIudn6XQ5gb1a4KrU',
    authDomain: 'uxtopia-app.firebaseapp.com',
    projectId: 'uxtopia-app',
    storageBucket: 'uxtopia-app.appspot.com',
    messagingSenderId: '820687940608',
    appId: '1:820687940608:web:700f46fb4eeb6df4cbfce5',
    measurementId: 'G-BNCZ8MYCC6',
});
const dbFirebase = firebaseApp.firestore();

// USER FUNCTIONS ----------------------

/**
 * Adds a student user to student collection
 * @param {string} email ID
 * @param {string} name
 * @param {string} phone
 * @param {string} institution COLLEGE | COMPANY
 * @param {string} designation COURSE | DESIGNATION
 * @param {number} experience
 * @param {string} eventSourceInfo
 * @param {string} shareWithUsInfo
 * @param {boolean} recieveNotification
 * @param {boolean} isStudent
 */
export async function addUser({
    email,
    name,
    phone,
    institution,
    designation,
    experience,
    eventSourceInfo,
    shareWithUsInfo,
    recieveNotification,
    isStudent,
}) {
    const colRef = dbFirebase.collection('user');
    recieveNotification = recieveNotification === 'Yes' ? true : false;
    const user = {
        id: email,
        name,
        phone,
        institution,
        designation,
        experience,
        eventSourceInfo,
        shareWithUsInfo,
        recieveNotification,
        isStudent,
        status: 'added',
    };

    try {
        await colRef.doc(user.id).set(user);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

// USER FUNCTIONS : END ----------------------
