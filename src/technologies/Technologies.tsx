import React, { useEffect } from 'react';
import {
  Card,
  Container,
  CardHeader,
  CardContent,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

import useTitle from '../utils/hooks/useTitle';
import Project from './Project';
import placesImage from '../assets/images/places-app.JPG';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    borderBottom: `2px solid${theme.palette.primary.main}`,
  },
  card: {
    height: '100%',
  },
}));

const Technologies: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const setTitle = useTitle();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    setTitle(t('nav_technologies'));
  }, [setTitle, t]);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={t('techologies_intro_title')}
              className={classes.header}
            />
            <Grid container justify="center">
              <Grid item xs={12} md={8}>
                <CardContent>
                  <Typography
                    variant="body1"
                    align={isSmall ? 'left' : 'center'}
                  >
                    {t('technologies_intro')}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Project
            title="Places-App"
            technologies={[
              'React',
              'NodeJS',
              'MongoDB',
              'Express',
              'TypeScript',
              'Firebase',
              'Heroku',
            ]}
            description={t('places_description')}
            github={[
              {
                title: 'Frontend',
                url: 'https://github.com/SamiHonkasalo/mern-frontend',
              },
              {
                title: 'Backend',
                url: 'https://github.com/SamiHonkasalo/mern-backend',
              },
            ]}
            image={placesImage}
            url="https://mern-279016.web.app/"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Project
            title="Places-App"
            technologies={[
              'React',
              'NodeJS',
              'MongoDB',
              'Express',
              'TypeScript',
              'Firebase',
              'Heroku',
            ]}
            description={t('places_description')}
            github={[
              {
                title: 'Frontend',
                url: 'https://github.com/SamiHonkasalo/mern-frontend',
              },
              {
                title: 'Backend',
                url: 'https://github.com/SamiHonkasalo/mern-backend',
              },
            ]}
            image={placesImage}
            url="https://mern-279016.web.app/"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Project
            title="Places-App"
            technologies={[
              'React',
              'NodeJS',
              'MongoDB',
              'Express',
              'TypeScript',
              'Firebase',
              'Heroku',
            ]}
            description={t('places_description')}
            github={[
              {
                title: 'Frontend',
                url: 'https://github.com/SamiHonkasalo/mern-frontend',
              },
              {
                title: 'Backend',
                url: 'https://github.com/SamiHonkasalo/mern-backend',
              },
            ]}
            image={placesImage}
            url="https://mern-279016.web.app/"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Technologies;
