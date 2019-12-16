import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Maconha from './Maconha/Maconha';

export default class Ilegais extends Component {
    render() {
        return (
            <>
                <Router>
                    <Container maxWidth="lg" className="container">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h4" component="h1" align="center" color="primary">
                                    Profissões Ilegais
                            </Typography>
                            </Grid>
                            <Grid item xs={4} align="center">
                                <Button component={Link} to="/profissoes/ilegais/maconha" align="center" color="inherit">
                                    <Typography variant="h5" component="h3" color="primary">
                                        Traficante de Maconha
                                </Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={4} align="center">
                                <Button component={Link} to="/profissoes/legais/cocaina" align="center" color="inherit">
                                    <Typography variant="h5" component="h3" color="primary">
                                        Traficante de Cocaina
                                </Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={4} align="center">
                                <Button component={Link} to="/profissoes/policial/metanfetamina" color="inherit">
                                    <Typography variant="h5" component="h3" color="primary" align="center">
                                        Traficante de Metanfetamina
                                </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>

                    <Switch>
                        <Route exact path='/profissoes/ilegais/maconha' component={Maconha} />
                    </Switch>
                </Router>
            </>
        )
    }
}
