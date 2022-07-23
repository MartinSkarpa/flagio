import {FormControlLabel, Grid, Switch} from "@mui/material";
import React from "react";

export default class FeatureFlag extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = props;
    }

    // Zde se nejspíš jedná o anti-pattern
    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps !== this.props) {
            this.setState(nextProps);
        }
    }

    render() {
        return (
            <Grid item xs={12} md={6} sx={{textAlign: "left"}}>
                <FormControlLabel
                    label={this.state.name}
                    control={
                        <Switch
                            checked={this.state.value}
                            onClick={() => this.setState({value: !this.state.value})}
                        />
                    }
                />
            </Grid>
        );
    }
}
