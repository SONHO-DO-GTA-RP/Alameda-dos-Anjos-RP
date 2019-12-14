import React, { Component } from 'react';
import './Guerra.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class Guerra extends Component {
    render() {
        return (
            <>
                <Container maxWidth="lg" className="container">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="h4" component="h1" align="center" color="primary">
                                Facções
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="h4" component="h1" align="center" color="primary">
                                Guerra de Facções
                            </Typography>
                            <List component="nav" aria-label="secondary mailbox folders">
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">Durante o sábado/domingo a tarde, um Ranger organizará a <span className="bold">Guerra de Facções</span></Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">Ele estará assistindo a ação ao tempo todo para que não ocorra injustiças, e a ação será gravada para fins de contraprova</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">A guerra de facções consiste na disputa pela Zona Neutra, localizada entre as duas partes das favelas, possui a venda de maconha com um valor 10% mais alto de venda e um posto de fácil acesso. </Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">A facção que controlar a Zona Neutra, terá o símbolo de sua facção setado pela próxima semana e poderá cobrar, através do RP, uma porcentagem em cima da venda no ponto, dos jogadores que desejarem vender</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">É proibido tentar tomar a zona neutra durante a semana. A guerra acontecerá somente aos finais de semana e com testemunhas dos Rangers</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">O PVP é protegido neste ponto após a guerra, exceto pela facção que o controla</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">Apenas facções criminosas podem participar, excluindo a Máfia e Yakuza. O número de membros não importa, visto que é um evento marcado, quanto mais pessoas estiverem no dia, maiores as chances</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">O descumprimento dessas regras levará a demoção do cargo dos lideres das facções, sendo escolhido um novo líder pela própria facção, não podendo este ser o punido. Portanto, cabe aos líderes segurarem seus membros para que não descumpram as regras</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">É permitido o uso de veículos para uso estratégico, exceto aéreos, mas não será tolerado VDM em nenhuma hipótese. É permitido atirar de dentro do veículo</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">A Guerra acaba quando não houver membros vivos de um dos lados da facção</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">É permitido lootear os membros caídos</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">É permitido fugir da favela se conseguirem, avisando assim que fugiu no /ilegal após estar do lado de fora da favela. Fugir será considerado desistência do ponto, e terá de ser uma decisão tomada por todos os membros restantes com aval do líder, não sendo permitindo a fuga individual</Typography></ListItemText>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Container>
            </>
        )
    }
}
