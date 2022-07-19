import {database} from "./connection";
import {ref, onValue} from "firebase/database";

function getTestProp() {
    const dbRef = ref(database, "/test");
    onValue(dbRef, snapshot => console.info("FeatureFlag 'test': " + snapshot.val()));
}

export {getTestProp};