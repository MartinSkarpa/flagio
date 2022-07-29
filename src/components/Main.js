import {Container, Grid} from "@mui/material";
import FeatureFlag from "./FeatureFlag";
import React, {createContext} from "react";
import {onValue, ref} from "firebase/database";
import {database} from "../database/connection";

const FeatureFlagContext = createContext();

function useFeatureFlagList() {
    const [result, setResult] = React.useState([]);
    const dbRef = ref(database, "/featureFlags");

    React.useEffect(() => {
        onValue(dbRef, snapshot => {
            const records = [];
            snapshot.forEach(item => {
                console.info("name: " + item.key + ", value: " + item.val());
                records.push({name: item.key, value: item.val()});
            });
            setResult(records);
        });
    }, []);

    return result;
}

function Main() {
    const featureFlagList = useFeatureFlagList();
    /*const [featureFlagList, setFeatureFlagList] = React.useState([]);
    const dbRef = ref(database, "/featureFlags");

    React.useEffect(() => {
        onValue(dbRef, snapshot => {
            const records = [];
            snapshot.forEach(item => {
                console.info("name: " + item.key + ", value: " + item.val());
                records.push({name: item.key, value: item.val()});
            });
            setFeatureFlagList(records);
        });
    }, []);*/

    return (
        <Container
            fixed
            sx={{
                background: "#F0F0F0"
            }}
        >
            <h1>Feature flags</h1>
            <Container>
                <Grid container id={"featureFlagsContainer"}>
                    {featureFlagList.map(row => {
                        return (
                            <FeatureFlagContext.Provider value={row}>
                                <FeatureFlag/>
                            </FeatureFlagContext.Provider>
                        );
                    })}
                </Grid>
            </Container>
        </Container>
    );
}

export {Main, FeatureFlagContext};