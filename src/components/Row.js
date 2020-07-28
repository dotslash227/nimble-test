import React from 'react';
import {Table, TableBody, TableCell, TableRow, Paper, Collapse, makeStyles, Box} from '@material-ui/core';
import ModalBox from '../components/ModalBox';
import {NoteIcon, ScorecardIcon, PlusSign, NimbleIcon} from '../ui-kit/icons'

const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
  });
  

export default function Row(props){
    const {row} = props;
    const [open, setOpen] = React.useState(false);    
    const [openModal, setOpenModal] = React.useState(false);
    const [application, setApplication] = React.useState(null);    
    const classes = useRowStyles();

    
    const toggle = (application=null) =>{           
        if(application) setApplication(application);        
        setOpenModal(!openModal);        
    }

    function getMonths(d1){
        let d2 = new Date();
        let months = 0;
        d1 = new Date(d1);
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        return months <= 0 ? 0 : months;
    }

    return(
        <>        
        {openModal && <ModalBox toggle={toggle} candidate={row} application={application} />}
        <TableRow onClick={()=>setOpen(!open)} className={classes.root}>
            <TableCell>{row.name}</TableCell>
            <TableCell align="right">{row.applications[row.applications.length-1].new_status.label}</TableCell>
            <TableCell align="right">{row.applications.length}</TableCell>
            <TableCell align="right">{getMonths(row.profile.updated)} months ago</TableCell>
            <TableCell align="right"><NoteIcon /> {row.note_count}</TableCell>            
            <TableCell><NimbleIcon /> {row.profile.nimble_score}</TableCell>
            <TableCell><ScorecardIcon />  {row.scorecard_count}</TableCell>
            <TableCell><PlusSign /></TableCell>            
        </TableRow>
        <TableRow style={{border:"none"}}>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>                
                <Box margin={1}>
                <Table size="small">                        
                        <TableBody>
                            {row.applications.map((application, key)=>{
                                return(
                                    <TableRow key={key} onClick={()=>toggle(application)}>
                                        <TableCell>
                                            {application.role.title}
                                        </TableCell>
                                        <TableCell>
                                            {application.new_status.label}
                                        </TableCell>
                                    </TableRow>
                                )
                            })}                            
                        </TableBody>
                    </Table>
                </Box>                    
                </Collapse>            
            </TableCell>            
        </TableRow>
        </>
    )

}