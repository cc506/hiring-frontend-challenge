import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';

const useStyles = makeStyles(
  createStyles({
    root: {
      backgroundColor: '#237bb3',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: '0.5%',
      margin: 0,
      width: '35%'
    },
    chip: {
      margin: '2%',
    },
  }),
);

export default function Chips({p}: {p: any}){
 const classes = useStyles();

 return(
    <Paper className={classes.root}>
        <Chip label={p.numViews} variant="outlined" size="small" className={classes.chip} icon={<PersonOutlinedIcon/>} />
        <Chip label={p.numVotes} variant="outlined" size="small" className={classes.chip} icon={<ArrowUpwardOutlinedIcon/>} />
    </Paper>
 )
}