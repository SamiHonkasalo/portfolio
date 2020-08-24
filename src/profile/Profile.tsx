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
  cardContent: {
    padding: '16px 80px',
  },
}));

const Profile: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const setTitle = useTitle();

  useEffect(() => {
    setTitle(t('nav_profile'));
  }, [setTitle, t]);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Sami Honkasalo" className={classes.header} />
            <CardContent className={classes.cardContent}>
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
                  <Typography variant="body1" align="center">
                    {t('profile_intro')}
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
            <CardContent className={classes.cardContent}>
              <Typography variant="body1" align="center">
                {t('profile_seeking')}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className={classes.card}>
            <CardHeader
              titleTypographyProps={{ align: 'center' }}
              title={t('profile_why_title')}
              className={classes.header}
            />
            <CardContent className={classes.cardContent}>
              <Typography variant="body1" align="center">
                {t('profile_why')}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
