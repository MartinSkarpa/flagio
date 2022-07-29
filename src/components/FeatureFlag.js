import {FormControlLabel, Grid, Switch} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import {database} from "../database/connection";
import {ref, set} from "firebase/database";
import {FeatureFlagContext} from "./Main";

function FeatureFlag() {
    const [featureFlag, setFeatureFlag] = useState(useContext(FeatureFlagContext));

    useEffect(() => {
        const dbRef = ref(database, "/featureFlags/" + featureFlag.name);

        set(dbRef, featureFlag.value)
    }, [featureFlag, setFeatureFlag]);

    return (
        <Grid item xs={12} md={6} sx={{textAlign: "left"}}>
            <FormControlLabel
                label={featureFlag.name}
                control={
                    <Switch
                        checked={featureFlag.value}
                        onClick={() => setFeatureFlag({...featureFlag, value: !featureFlag.value})}
                    />
                }
            />
        </Grid>
    );
}

export default FeatureFlag;