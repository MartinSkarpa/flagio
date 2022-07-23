import {FormControlLabel, Grid, Switch} from "@mui/material";
import React from "react";
import {database} from "../database/connection";
import {ref, set} from "firebase/database";

export default class FeatureFlag extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = props;
        this.updateState = this.updateState.bind(this);
    }

    // Zde se nejspíš jedná o anti-pattern
    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps !== this.props) {
            this.setState(nextProps);
        }
    }

    updateState() {
        const dbRef = ref(database, "/featureFlags/" + this.state.name);

        this.setState(
            prevState => ({value: !prevState.value}),
            () => set(dbRef, this.state.value)
        );
    }

    render() {
        return (
            <Grid item xs={12} md={6} sx={{textAlign: "left"}}>
                <FormControlLabel
                    label={this.state.name}
                    control={
                        <Switch
                            checked={this.state.value}
                            onClick={this.updateState}
                        />
                    }
                />
            </Grid>
        );
    }
}
