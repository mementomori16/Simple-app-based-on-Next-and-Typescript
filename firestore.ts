// firestore.ts
import { getFirestore } from "firebase/firestore";
import firebaseApp from "./firebase";

const firestore = getFirestore(firebaseApp);

export default firestore;