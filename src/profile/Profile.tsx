import React, { useEffect } from 'react';
import {
  Card,
  Container,
  CardHeader,
  CardContent,
  Avatar,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

import ProfilePicture from '../assets/images/profile.png';
import useTitle from '../utils/hooks/useTitle';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    borderBottom: `2px solid${theme.palette.primary.main}`,
  },
  image: {
    height: '10rem',
    width: '10rem',
    margin: 'auto',
  },
  card: {
    height: '100%',
  },
}));

const Profile: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const setTitle = useTitle();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    setTitle(t('nav_profile'));
  }, [setTitle, t]);

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
                <Grid item xs={12} md={8}>
                  <Typography color="secondary" variant="h3" align="center">
                    {t('profile_greet')}
                  </Typography>
                  <br />
                  <Typography
                    variant="body1"
                    align={isSmall ? 'left' : 'center'}
                  >
                    {t('profile_intro')}
                  </Typography>
                  <br />
                  <Typography
                    variant="body1"
                    align={isSmall ? 'left' : 'center'}
                  >
                    {t('profile_intro_2')}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className={classes.card}>
            <CardHeader
              titleTypographyProps={{ align: 'center' }}
              title={t('profile_seeking_title')}
              className={classes.header}
            />
            <Grid container justify="center">
              <Grid item xs={12} md={8}>
                <CardContent>
                  <Typography
                    variant="body1"
                    align={isSmall ? 'left' : 'center'}
                  >
                    {t('profile_seeking')}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className={classes.card}>
            <CardHeader
              titleTypographyProps={{ align: 'center' }}
              title={t('profile_why_title')}
              className={classes.header}
            />
            <Grid container justify="center">
              <Grid item xs={12} md={8}>
                <CardContent>
                  <Typography
                    variant="body1"
                    align={isSmall ? 'left' : 'center'}
                  >
                    {t('profile_why')}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
