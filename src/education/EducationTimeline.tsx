import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SchoolIcon from '@material-ui/icons/School';
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

const EducationTimeline = ({ isSmall }: Props) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Timeline align={isSmall ? 'left' : 'alternate'}>
      <TimelineItem
        classes={{ missingOppositeContent: classes.removeOppositeContent }}
      >
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              JAMK, 9/2019 - 9/2020
            </Typography>
            <Typography>{t('education_ict_title')}</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem
        classes={{ missingOppositeContent: classes.removeOppositeContent }}
      >
        <TimelineSeparator>
          <TimelineDot color="primary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              JAMK, 8/2014 - 1/2018
            </Typography>
            <Typography>{t('education_automation_title')}</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem
        classes={{ missingOppositeContent: classes.removeOppositeContent }}
      >
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Haminan Lukio, 8/2010 - 6/2014
            </Typography>
            <Typography>{t('education_gymnasium_title')}</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem
        classes={{ missingOppositeContent: classes.removeOppositeContent }}
      >
        <TimelineSeparator>
          <TimelineDot color="primary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              EKAMI, 8/2010 - 6/2013
            </Typography>
            <Typography>{t('education_ekami_title')}</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default EducationTimeline;
