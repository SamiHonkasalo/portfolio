import React, { useEffect } from 'react';
import {
  Card,
  Container,
  CardHeader,
  CardContent,
  Avatar,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import ProfilePicture from '../assets/images/profile.png';
import useTitle from '../utils/hooks/useTitle';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    borderBottom: '2px solid' + theme.palette.primary.main,
  },
  image: {
    height: '10rem',
    width: '10rem',
    margin: 'auto',
  },
}));

const Profile: React.FC = () => {
  const classes = useStyles();
  const setTitle = useTitle();

  useEffect(() => {
    setTitle('Profile');
  }, [setTitle]);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Sami Honkasalo" className={classes.header} />
            <CardContent>
              <Grid container justify="center" direction="row" spacing={4}>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                  <Avatar
                    alt="Sami Honkasalo"
                    src={ProfilePicture}
                    className={classes.image}
                  />
                </Grid>
                <Grid item>
                  <Typography color="secondary" variant="h3" align="center">
                    Tervehdys!
                  </Typography>
                  <Typography variant="body1" align="center">
                    Olen 25-vuotias tieto- ja viestintätekniikan insinööri
                    Jyväskylästä. Työskentelen tällä hetkellä
                    ohjelmistokehittäjänä Devecto Oy:llä ja työni ohella toimin
                    sivutoimisena tuntiopettajana Jyväskylän
                    Ammattikorkeakoulussa automaatiotekniikan alalla. Olen
                    nykyisissä työtehtävissäni keskittynyt pääasiassa
                    Web-kehitykseen, jossa painotus on ollut vahvasti
                    React-kehityksessä.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Mitä etsin?" className={classes.header} />
            <CardContent>
              <Typography variant="body1" align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                aliquam sapien erat. Suspendisse velit tellus, gravida
                ullamcorper suscipit quis, faucibus ut erat. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Duis non feugiat velit, vitae pulvinar massa. Nam at
                tortor odio. Vestibulum eu lectus eu tortor consequat venenatis
                eget a ipsum. Donec feugiat velit lectus, quis ullamcorper
                lectus ultricies hendrerit. Vivamus et sem ullamcorper, pulvinar
                sapien at, vehicula libero. Vivamus blandit felis justo, ac
                semper ante tristique ac. Donec diam lorem, faucibus id placerat
                in, iaculis id nisl. Phasellus sed mi vitae urna porta
                malesuada.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardHeader title="Miksi Sami?" className={classes.header} />
            <CardContent>
              <Typography variant="body1" align="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                aliquam sapien erat. Suspendisse velit tellus, gravida
                ullamcorper suscipit quis, faucibus ut erat. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Duis non feugiat velit, vitae pulvinar massa. Nam at
                tortor odio. Vestibulum eu lectus eu tortor consequat venenatis
                eget a ipsum. Donec feugiat velit lectus, quis ullamcorper
                lectus ultricies hendrerit. Vivamus et sem ullamcorper, pulvinar
                sapien at, vehicula libero. Vivamus blandit felis justo, ac
                semper ante tristique ac. Donec diam lorem, faucibus id placerat
                in, iaculis id nisl. Phasellus sed mi vitae urna porta
                malesuada.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
