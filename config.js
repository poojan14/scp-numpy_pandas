/*
  Firebase connection settings for the Scientific Python Lab.

  These values are from your existing "dip1415" Firebase project (the one used by
  the DIP Practicals site), so Google sign-in already works on poojan14.github.io.
  This site stores its data in separate collections (sp_users, sp_enrollments,
  sp_progress, sp_attempts), so it does not touch the DIP data.

  To use a different Firebase project instead, paste its web config here
  (Firebase console > Project settings > Your apps > Web app > Config).
  These are public identifiers, not secrets; security comes from firestore.rules.

  Leave apiKey as "PASTE..." to run the site without sign-in (progress stays in the browser).
*/
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAqQCbdJkVPals-C9uNjLSZ06zIqwycq8s",
  authDomain: "dip1415.firebaseapp.com",
  projectId: "dip1415",
  storageBucket: "dip1415.firebasestorage.app",
  messagingSenderId: "727900792208",
  appId: "1:727900792208:web:2e0c90ed2766f9e1a1bf15"
};

/* Prefix for the Firestore collections. Keep it equal to the names used in firestore.rules. */
window.COLLECTION_PREFIX = "sp_";
