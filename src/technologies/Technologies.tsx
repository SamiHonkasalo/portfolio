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
import datingImage from '../assets/images/dating.PNG';
import thesisImage from '../assets/images/thesis.PNG';
import chatImage from '../assets/images/chat.PNG';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
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
        <Project
          title="Places App"
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
        <Project
          title="Dating App"
          technologies={[
            'Angular',
            '.NET Core',
            'C#',
            'SQL',
            'EntityFramework',
            'TypeScript',
            'Bootstrap',
            'Azure',
          ]}
          description={t('dating_description')}
          github={[
            {
              title: 'Project',
              url: 'https://github.com/SamiHonkasalo/dating-app',
            },
          ]}
          image={datingImage}
          url="https://datingappsaho.azurewebsites.net/home"
        />
        <Project
          title="HarvesThem"
          technologies={[
            'React',
            'TypeScript',
            'Material design',
            'Jest',
            'Azure',
          ]}
          description={t('thesis_description')}
          github={[
            {
              title: 'Project',
              url: 'https://github.com/SamiHonkasalo/thesis',
            },
          ]}
          image={thesisImage}
          url="https://saho-thesis.azurewebsites.net/"
        />
        <Project
          title="SaHoChat"
          technologies={[
            'React',
            'TypeScript',
            'Material design',
            '.NET Core',
            'C#',
            'SignalR',
            'Azure',
          ]}
          description={t('chat_description')}
          github={[
            {
              title: 'Project',
              url: 'https://github.com/SamiHonkasalo/saho-chat',
            },
          ]}
          image={chatImage}
          url="https://sahochat.azurewebsites.net/"
        />
      </Grid>
    </Container>
  );
};

export default Technologies;
