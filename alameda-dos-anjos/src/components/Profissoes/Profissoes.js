import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Ilegais from './Ilegais/Ilegais';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

export default class Profissoes extends Component {
    render() {
        return (
            <Router>
                <>
                    <Container maxWidth="lg" className="container">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h4" component="h1" align="center" color="primary">
                                    Profissões
                                </Typography>
                            </Grid>
                            <Grid item xs={4} align="center">
                                <Button component={Link} to="/profissoes/ilegais" align="center" color="inherit">
                                    <Typography variant="h5" component="h3" color="primary">
                                        Ilegais
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={4} align="center">
                                <Button component={Link} to="/profissoes/legais" align="center" color="inherit">
                                    <Typography variant="h5" component="h3" color="primary">
                                        Legais
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={4} align="center">
                                <Button component={Link} to="/profissoes/policial" color="inherit">
                                    <Typography variant="h5" component="h3" color="primary" align="center">
                                        Policial
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>

                    <Switch>
                        <Route exact path='/profissoes/ilegais' component={Ilegais} />
                    </Switch>
                </>
            </Router>
        )
    }
}
