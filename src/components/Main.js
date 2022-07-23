import {Container, Grid} from "@mui/material";
import FeatureFlag from "./FeatureFlag";
import React from "react";
import {onValue, ref} from "firebase/database";
import {database} from "../database/connection";

const dbRef = ref(database, "/featureFlags");

class Main extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            featureFlagsRows: []
        }
    }

    componentDidMount() {
        const records = [];
        onValue(dbRef, snapshot => {
            snapshot.forEach(item => {
                console.info("key: " + item.key + ", value: " + item.val());
                records.push({key: item.key, value: item.val()})
            });
            this.setState({featureFlagsRows: records})
        });
    }

    render() {
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
                        {this.state.featureFlagsRows.map((row, idx) => {
                            return (
                                <FeatureFlag
                                    name={row.key}
                                    value={row.value}
                                />
                            );
                        })}
                    </Grid>
                </Container>
            </Container>
        );
    }
}

export default Main;