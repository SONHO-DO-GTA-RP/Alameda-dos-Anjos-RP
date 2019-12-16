import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import './Maconha.css';

export default class Maconha extends Component {
    render() {
        return (
            <>
                <Container maxWidth="lg" className="container">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h4" component="h3" align="center" color="primary">
                                Traficante de Maconha
                            </Typography>
                            <Divider />
                        </Grid>
                        <Grid item xs={12} align="center">
                            <Typography variant="p" component="p" color="primary" className="pfont">
                                Vá até a agência de empregos ilegais
                            </Typography>
                        </Grid>
                        <Grid item xs={12} align="center">
                            <Card className="card">
                                <CardActionArea>
                                    <CardMedia
                                        className="media"
                                        image="https://cdn.discordapp.com/attachments/656085647400108032/656096419739992069/SPOILER_20191216081734_1.jpg"
                                        title="Imagem 1"
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} align="center">
                            <Typography variant="p" component="p" color="primary" className="pfont">
                                Selecione a profissão de <span class="bold">Traficante de Maconha</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} align="center">
                            <Card className="card">
                                <CardActionArea>
                                    <CardMedia
                                        className="media"
                                        image="https://cdn.discordapp.com/attachments/656085647400108032/656096408780406787/SPOILER_20191216082023_1.jpg"
                                        title="Imagem 2"
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} align="center">
                            <Typography variant="p" component="p" color="primary" className="pfont">
                                Vá até o <span class="bold">Campo de Maconha</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} align="center">
                            <Card className="card">
                                <CardActionArea>
                                    <CardMedia
                                        className="media"
                                        image="https://cdn.discordapp.com/attachments/656085647400108032/656096412165210122/SPOILER_20191216082104_1.jpg"
                                        title="Imagem 3"
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} align="center">
                            <Typography variant="p" component="p" color="primary" className="pfont">
                                Colha até encher o seu inventário
                            </Typography>
                        </Grid>
                        <Grid item xs={12} align="center">
                            <Card className="card">
                                <CardActionArea>
                                    <CardMedia
                                        className="media"
                                        image="https://media.discordapp.net/attachments/656085647400108032/656096414618877973/SPOILER_20191216082147_1.jpg?width=1248&height=702"
                                        title="Imagem 4"
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} align="center">
                            <Typography variant="p" component="p" color="primary" className="pfont">
                                Vá até o <span class="bold">Processamento de Maconha</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} align="center">
                            <Card className="card">
                                <CardActionArea>
                                    <CardMedia
                                        className="media"
                                        image="https://media.discordapp.net/attachments/656085647400108032/656096424248868884/SPOILER_20191216082348_1.jpg?width=1248&height=702"
                                        title="Imagem 5"
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} align="center">
                            <Typography variant="p" component="p" color="primary" className="pfont">
                                Processe toda a sua Maconha
                            </Typography>
                        </Grid>
                        <Grid item xs={12} align="center">
                            <Card className="card">
                                <CardActionArea>
                                    <CardMedia
                                        className="media"
                                        image="https://media.discordapp.net/attachments/656085647400108032/656096412617932810/SPOILER_20191216082433_1.jpg?width=1248&height=702"
                                        title="Imagem 6"
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} align="center">
                            <Typography variant="p" component="p" color="primary" className="pfont">
                                Vá até a <span class="bold">Biqueira de Maconha</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} align="center">
                            <Card className="card">
                                <CardActionArea>
                                    <CardMedia
                                        className="media"
                                        image="https://media.discordapp.net/attachments/656085647400108032/656117446524010527/20191216095603_1.jpg?width=1248&height=702"
                                        title="Imagem 7"
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} align="center">
                            <Typography variant="p" component="p" color="primary" className="pfont">
                                Venda toda a sua Maconha
                            </Typography>
                        </Grid>
                        <Grid item xs={12} align="center">
                            <Card className="card">
                                <CardActionArea>
                                    <CardMedia
                                        className="media"
                                        image="https://media.discordapp.net/attachments/656085647400108032/656096422722273282/SPOILER_20191216082808_1.jpg?width=1248&height=702"
                                        title="Imagem 8"
                                    />
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </>
        )
    }
}
