import {AppBar, Container, Toolbar, Typography} from "@mui/material";

function Navbar() {
    return (
        <AppBar position={"static"}>
            <Container maxWidth={"xl"}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "flex"},
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        Flagio
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;