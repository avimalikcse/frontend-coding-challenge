import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';


/**
 * Pagintion Component, would render a pagination 
 */
interface PaginatorProps {
  pageHandler: (page: number) => void,
  page:number,
  size:number
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

export default function Paginator(props:PaginatorProps) {
  const classes = useStyles();
  const {page,size,pageHandler} = props
  const onChangeHandler =(event:React.ChangeEvent<unknown>,value:number) =>{
    pageHandler(value)
  }
  return (
    <div className={classes.root}>
      <Pagination count={Math.ceil(size/10)} variant="outlined" page={page} onChange={onChangeHandler} />
    </div>
  );
}