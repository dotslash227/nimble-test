import React from 'react';
import Navbar from '../components/Nav';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Collapse, CssBaseline, makeStyles, AppBar, Toolbar, Typography} from '@material-ui/core';
import {getCandidates} from '../utils/candidates';
import Row from '../components/Row';
import DrawerBar from '../components/Drawer';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));


export default function Home(props){

    const classes = useStyles();
    const [candidates, setCandidates] = React.useState([])        

    React.useEffect(()=>{
        document.title = "Nimble Hiring"
        setCandidates(getCandidates);
    }, [])      
            
    return(        
        <div className={classes.root}>
        <CssBaseline />        
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Nimble
            </Typography>
          </Toolbar>
        </AppBar>
        {/* <DrawerBar /> */}
        <main className={classes.content}>
        <div className={classes.toolbar}>
                <div style={{marginLeft:20, marginTop:30, marginBottom:30}}>
                    {candidates.length} Candidates
                </div>
                <TableContainer component={Paper}>
                    <Table aria-label="table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Candidate Name</TableCell>
                                <TableCell align="right">Candidate Status</TableCell>
                                <TableCell align="right">Applications</TableCell>
                                <TableCell align="right">Last Action</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                            </TableRow>                            
                        </TableHead>
                        <TableBody>
                            {candidates.map((row, key)=>{
                                return(
                                    <Row row={row} key={key} />
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </main>   
        </div> 
    )
}