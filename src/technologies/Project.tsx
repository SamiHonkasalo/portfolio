import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Typography,
  CardMedia,
  CardActions,
  Link,
  Chip,
  Button,
  ButtonProps,
  ExtendButtonBase,
  ButtonTypeMap,
} from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import VisibilityIcon from '@material-ui/icons/Visibility';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    borderBottom: `2px solid${theme.palette.primary.main}`,
  },
  media: {
    height: '13rem',
    backgroundSize: 'contain',
  },
  card: {
    height: '100%',
  },
  chips: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));
interface Props {
  title: string;
  technologies: string[];
  github: { url: string; title: string }[];
  url: string;
  image: string;
  description: string;
}

const SiteButton = React.forwardRef<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  Omit<ButtonProps, 'variant' | 'color' | 'endIcon'>
>((props, ref) => (
  <Button
    size="small"
    ref={ref}
    variant="outlined"
    color="secondary"
    endIcon={<VisibilityIcon />}
    aria-label="Open site"
    title="Open site"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
)) as ExtendButtonBase<ButtonTypeMap>;

const GitHubButton = React.forwardRef<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  Omit<ButtonProps, 'variant' | 'color' | 'endIcon'>
>((props, ref) => (
  <Button
    size="small"
    ref={ref}
    variant="outlined"
    color="secondary"
    endIcon={<GitHubIcon />}
    aria-label={props['aria-label']}
    title={props.title}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
)) as ExtendButtonBase<ButtonTypeMap>;

const Project = ({
  title,
  technologies,
  github,
  url,
  image,
  description,
}: Props) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        titleTypographyProps={{ align: 'center' }}
        title={title}
        className={classes.header}
        subheader={
          <div className={classes.chips}>
            {technologies.map((t) => (
              <Chip size="small" label={t} />
            ))}
          </div>
        }
      />
      <Grid container justify="center">
        <Grid item xs={12} md={10}>
          <CardContent>
            <Typography align="center" variant="body1">
              {description}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      <CardMedia
        component={Link}
        href={url}
        target="_blank"
        rel="noreferrer"
        image={image}
        className={classes.media}
        title={title}
      />
      <CardActions style={{ justifyContent: 'center' }}>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <SiteButton
              component={Link}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              Site
            </SiteButton>
          </Grid>
          {github.map((g) => {
            return (
              <Grid item>
                <GitHubButton
                  component={Link}
                  href={g.url}
                  target="_blank"
                  rel="noreferrer"
                  title={`GitHub ${g.title}`}
                  aria-label={`GitHub ${g.title}`}
                >
                  {g.title}
                </GitHubButton>
              </Grid>
            );
          })}
        </Grid>
      </CardActions>
    </Card>
  );
};

export default Project;
