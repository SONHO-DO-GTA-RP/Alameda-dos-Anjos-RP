import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './Regras.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default class Regras extends Component {
    render() {
        return (
            <Container maxWidth="xl" className="container">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                            <Typography variant="h4" component="h1" align="center" color="primary">
                                Regras gerais
                            </Typography>

                            <List component="nav" aria-label="secondary mailbox folders">
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">Os players devem manter o respeito mútuo</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">Não pratique bullyng, discriminação, homofobia, racismo ou xenofobia</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">Não utilize glitchs ou bugs</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">Obrigatório a utilização de microfone para comunicar-se com outros players</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">A utilização do chat faz parte do RP</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">As denúncias só serão aceitas se forem provadas</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">Power Gaming não será tolerado</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">Proibido pular repetidamente para se mover mais rápido</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">Proibido escalar montanhas pulando, no qual não faria sem os devidos equipamentos</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">Proibido VDM</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">Proibido RDM</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">Proibido AntiRP</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">Proibido olhar o nome do jogador na lista de players e pronuncia-lo sem ter o conhecimento do nome do mesmo, o mesmo vale para gravar ID</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">Proibido matar NPC</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">Proibido usar roupas que não refletem o RP (Exemplo: andar de mascara se não estiver executando atividade ilegal)</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">Proibido agir com desonestidade</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">Proibido Combat logging (Em caso de crashing, informar imediatamente no canal do discord específico)</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">Se ocorrer morte em qualquer tipo de ação não poderá ser ressuscitado e poderá ser saqueado</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">Você se lembrará de tudo que ocorreu antes de você ficar inconsciente, após o atendimento no local</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">Proibido matar ou agredir o socorrista enquanto ele estiver em atendimento</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">Não marcar a pessoa após morrer, ou seja, se alguém te matar, após você renascer, é proibido voltar e matar o mesmo de imediato</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">Caso não houver gravação da ação não terá direito a reclamação</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">A partir do momento que você está rendido e com uma arma apontada para você automaticamente sua comunicação é cortada. Não é necessário dizer comunicação cortada ao infrator/vitima
                                                                                e não poderá chamar ajuda no discord e nem in-game. Se for constatado que foi feito comunicação no discord todos que participarem serão banidos permanentemente</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">Ao morrer ou ter sua comunicação retirada, não poderá ser comunicar nem em game e nem no discord caso isso ocorra será banido por 2 dias</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">É estritamente proibida a utilização de armadilhas contra policias e players fora da ação ou ate mesmo inventar uma ação para fazer armadilhas</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">O SAMU só ira socorrer as pessoas que não tiverem em ação ou que forem feridos por outros motivos</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">Em hipótese ALGUMA você pode CARREGAR (Arrastar alguém algemado) e levar para o hospital para reviver, o trabalho de reviver é ÚNICO e EXCLUSIVO da SAMU se não tem, morreu</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p">Zonas safe: Prefeitura, delegacia, praça, hospitais, academia e concessionária</Typography></ListItemText>
                                </ListItem>
                                <ListItem className="hover">
                                    <ListItemText><Typography component="p"> Meta Gaming e DarkRP não será tolerado sujeitos a ban imediato</Typography></ListItemText>
                                </ListItem>
                            </List>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}
