import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default class Header extends Component {
    render() {
        return (
            <div className="root">
                <AppBar position="static">
                    <Toolbar>
                        <Grid container direction="row" justify="space-between" alignItems="center">
                            <Grid item>
                                <Typography variant="h6">
                                    Alameda dos Anjos RP
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button component={Link} to="/regras" color="inherit">
                                    Regras
                                </Button>
                                <Button component={Link} to="/profissoes" color="inherit">
                                    Profissões
                                </Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
