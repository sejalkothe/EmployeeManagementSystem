// import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import UsePagination from '../Pagination/Pagination.js';

import { useEffect, useState } from 'react';
// import formApi from '../../../../../API/FormData.js';
import DeleteIcon from '@mui/icons-material/Delete';
import './Table.css';
import Pagination from '../Pagination/Pagination.js'



export default function BasicTable({ forms, getForms }) {
    // const [forms, setForms] = useState([]);

    const getLocalStorage = (label) => {
        return JSON.parse(sessionStorage.getItem(label) || '{}');
    };
    const test = [];
   


    async function handleDeleteForm(e, id) {
        console.log(e.target.id)
        const querRes = await formApi.delete(`/${id}`, {
            headers: {
                'x-tenant-id': '63f72b21f9dfbe6751b8875e'
            }
        });

        // console.log("delete form query res :", querRes.data.massage);
        setTimeout(() => { getForms() }, 10);
        

    }

    function createData(name,role , type, number, email,skill) {
        return { name,role , type, number, email,skill };
      }


      const rows = [
        createData('Vivek Sharma', 'Software Engineer', 'Intern', '+919587815425', 'Vivek.S@iauro.com','Wireframes  Prototype'),
        createData('Marvin McKinney', 'UI/UX designer', 'Permanent', '+919587815425', 'Marvin.S@iauro.com','Wireframes Prototype'),
        createData('Kathryn Murphy', 'Software Engineer', 'Intern','+919587815425', 'Kathryn.S@iauro.com','Wireframes Prototype'),
        createData('Arlene McCoy', 'UI/UX designer', 'Permanent','+919587815425', 'Arlene.S@iauro.com','Wireframes  Prototype'),
        createData('Brooklyn Simmons', 'Software Engineer', 'Intern', '+919587815425', 'Brooklyn.S@iauro.com','Wireframes  Prototype'),
        createData('Cody Fisher', 'UI/UX designer', 'Permanent', '+919587815425', 'Cody.S@iauro.com','Wireframes Prototype'),
        createData('Savannah Nguyen', 'Software Engineer', 'Intern', '+919587815425','Savannah.S@iauro.com','Wireframes Prototype'),
        createData('Wade Warren', 'UI/UX designer', 'Permanent',' +919587815425', 'Wade.S@iauro.com','Wireframes Prototype'),
        createData('Ronald Richards', 'UI/UX designer','Permanent','+919587815425', 'Ronald.S@iauro.com','Wireframes Prototype'),
      ];
      

    // useEffect(() => {
    //     getForms();
    // }, [])

    // const classes = useStyles();

    return (

        <TableContainer component={Paper} sx={{'&.MuiTableContainer-root':{boxShadow:'none'}, width: '100%',
        height: '100%',
        /* color: red; */
        backgroundColor: 'white',
        border: 'none',
        overflow: 'hidden'}}>
            <Table sx={{ minWidth: 650 }} aria-label="a dense table" >
                <TableHead >
                    <TableRow style={{ color: 'red' }} >
                        <TableCell className='cell'><b>Name</b></TableCell>
                        <TableCell className='cell' align="right" style={{textAlign:'left'}}><b>Role</b></TableCell>
                        <TableCell className='cell' align="right" style={{textAlign:'left'}}><b>Type</b></TableCell>
                        <TableCell className='cell' align="right" style={{textAlign:'left'}}><b>Mobile Number</b></TableCell>
                        <TableCell className='cell' align="right" style={{textAlign:'left'}}><b>Email Address</b></TableCell>
                        <TableCell className='cell' align="right" style={{textAlign:'left'}}><b>Skills</b> </TableCell>
                        {/* <TableCell className='cell' align="right">p</TableCell> */}

                    </TableRow>
                </TableHead>
                <TableBody >
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" className='cell'>
                                {row.name}
                            </TableCell>
                            <TableCell className='cell' align="right" style={{textAlign:'left'}} >{row.role}</TableCell>
                            <TableCell className='cell' align="right" style={{textAlign:'left'}}>{row.type}</TableCell>
                            <TableCell className='cell' align="right" style={{textAlign:'left'}}>{row.number}</TableCell>
                            <TableCell className='cell' align="right" style={{textAlign:'left'}}>{row.email}</TableCell>
                            <TableCell className='cell' align="right" style={{textAlign:'left'}}>{row.skill}</TableCell>
                            {/* <TableCell className='cell' align="right" style={{textAlign:'left'}}>{row.p}</TableCell> */}
                        </TableRow>
                    ))}  
                </TableBody>
                
            </Table>
            {/* <Pagination style={{marginTop:'100px'}}/> */}
            <UsePagination />
        </TableContainer>

    );
}
