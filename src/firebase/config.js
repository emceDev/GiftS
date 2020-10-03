import firebase from "firebase";

export const firebaseConfig = {
	apiKey: "AIzaSyBbWY6eNgAQ_fFjw8214sJN4dKKo-o-bRs",
	authDomain: "gift-32619.firebaseapp.com",
	databaseURL: "https://gift-32619.firebaseio.com",
	projectId: "gift-32619",
	storageBucket: "gift-32619.appspot.com",
	messagingSenderId: "913937089749",
	appId: "1:913937089749:web:6bd348fbc8096923c48e5c",
};
export const app = firebase.initializeApp(firebaseConfig);
