import { app } from "../firebase/config";

export const dbGet = (ref, cb) => {
	app
		.database()
		.ref(ref)
		.once("value", (snap) => {
			cb(snap.val());
		});
};

export const dbSet = (ref, data) => {
	app
		.database()
		.ref("/" + ref)
		.set({
			data,
		});
};

export const CUdb = (user, password) => {};
