import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import HelpIcon from '@material-ui/icons/Help';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  removeOppositeContent: {
    '&:before': {
      [theme.breakpoints.down('sm')]: { content: 'none' },
    },
  },
}));

interface Props {
  isSmall: boolean;
}

const ExperienceTimeline = ({ isSmall }: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Timeline align={isSmall ? 'left' : 'alternate'}>
      <TimelineItem
        classes={{ missingOppositeContent: classes.removeOppositeContent }}
      >
        <TimelineSeparator>
          <TimelineDot color="primary">
            <HelpIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              {t('experience_next')}
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem
        classes={{ missingOppositeContent: classes.removeOppositeContent }}
      >
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Devecto Oy, 12/2019 -
            </Typography>
            <Typography>{t('experience_devecto_title')}</Typography>
            <Typography variant="body2">
              {t('experience_devecto_description')}
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem
        classes={{ missingOppositeContent: classes.removeOppositeContent }}
      >
        <TimelineSeparator>
          <TimelineDot color="primary">
            <MenuBookIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              JAMK, 8/2019 -
            </Typography>
            <Typography>{t('experience_jamk_title')}</Typography>
            <Typography variant="body2">
              {t('experience_jamk_description')}
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem
        classes={{ missingOppositeContent: classes.removeOppositeContent }}
      >
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              PCS Engineering Oy, 2/2019 - 12/2019
            </Typography>
            <Typography>{t('experience_pcs_title')}</Typography>
            <Typography variant="body2">
              {t('experience_pcs_description')}
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem
        classes={{ missingOppositeContent: classes.removeOppositeContent }}
      >
        <TimelineSeparator>
          <TimelineDot color="primary">
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Protacon Technologies Oy, 9/2017 - 2/2019
            </Typography>
            <Typography>{t('experience_ptc_title')}</Typography>
            <Typography variant="body2">
              {t('experience_ptc_description')}
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      {/* <TimelineItem classes={{ missingOppositeContent: classes.removeOppositeContent }}>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <BuildIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Metsä Board Oyj, 4/2017 - 9/2017
            </Typography>
            <Typography>Automaatiokunnossapito</Typography>
            <Typography variant="body2">
              Kartonkitehtaan arkkileikkurien sähkö- ja automaatiokunnossapito
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem classes={{ missingOppositeContent: classes.removeOppositeContent }}>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <BuildIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Metsä Board Oyj, 5/2016 - 9/2017
            </Typography>
            <Typography>Automaatiokunnossapito</Typography>
            <Typography variant="body2">
              Kartonkitehtaan arkkileikkurien sähkö- ja automaatiokunnossapito
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem> */}
    </Timeline>
  );
};

export default ExperienceTimeline;
