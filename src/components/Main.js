import {Container, Grid} from "@mui/material";
import FeatureFlag from "./FeatureFlag";
import React, {createContext} from "react";
import {off, onValue, ref} from "firebase/database";
import {database} from "../database/connection";

const FeatureFlagContext = createContext(/*{
    featureFlag: false,
    setFeatureFlag: () => {}
}*/);

function Main() {
    const [featureFlagList, setFeatureFlagList] = React.useState([]);
    const dbRef = ref(database, "/featureFlags");

    const onUpdateData = snapshot => {
        const records = [];
        snapshot.forEach(item => {
            console.info("name: " + item.key + ", value: " + item.val());
            records.push({name: item.key, value: item.val()});
        });
        setFeatureFlagList(records);
    };

    React.useEffect(() => {
        onValue(dbRef, onUpdateData);
        return () => off(dbRef, "value", onUpdateData);
    }, []);

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