import {database} from "./connection";
import {onValue, ref} from "firebase/database";

function getTestProp() {
    const dbRef = ref(database, "/test");
    onValue(dbRef, snapshot => console.info("FeatureFlag database test: " + snapshot.val()));
}

export {getTestProp};