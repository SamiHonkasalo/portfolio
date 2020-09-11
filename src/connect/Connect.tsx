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
  Link,
  List,
  ListItem,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

import useTitle from '../utils/hooks/useTitle';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
  primaryColor: {
    backgroundColor: theme.palette.primary.main,
  },
  textColor: {
    color: theme.palette.text.primary,
  },
}));

const Connect: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const setTitle = useTitle();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    setTitle(t('nav_connect'));
  }, [setTitle, t]);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              title={t('connect_intro_title')}
              className={classes.header}
            />
            <Grid container justify="center">
              <Grid item xs={12} md={8}>
                <CardContent>
                  <Typography
                    variant="body1"
                    align={isSmall ? 'left' : 'center'}
                  >
                    {t('connect_intro')}
                  </Typography>
                  <List>
                    <ListItem style={{ justifyContent: 'center' }}>
                      <AlternateEmailIcon
                        color="secondary"
                        style={{ marginRight: 15 }}
                      />
                      <Link href="mailto:honkasalo.sami@gmail.com">
                        <Typography
                          variant="body1"
                          className={classes.textColor}
                        >
                          honkasalo.sami@gmail.com
                        </Typography>
                      </Link>
                    </ListItem>
                    <ListItem style={{ justifyContent: 'center' }}>
                      <PhoneAndroidIcon
                        color="secondary"
                        style={{ marginRight: 15 }}
                      />
                      <Link href="tel:+358405598495">
                        <Typography
                          variant="body1"
                          className={classes.textColor}
                        >
                          040 559 8495
                        </Typography>
                      </Link>
                    </ListItem>
                  </List>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Connect;
