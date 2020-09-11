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
import EducationTimeline from './EducationTimeline';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
}));

const Education: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const setTitle = useTitle();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    setTitle(t('nav_education'));
  }, [setTitle, t]);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={t('education_intro_title')}
              className={classes.header}
            />
            <Grid container justify="center">
              <Grid item xs={12} md={8}>
                <CardContent>
                  <Typography
                    variant="body1"
                    align={isSmall ? 'left' : 'center'}
                  >
                    {t('education_intro')}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item container justify="center">
          <EducationTimeline isSmall={isSmall} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Education;
