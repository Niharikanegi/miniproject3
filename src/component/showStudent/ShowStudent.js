import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';




export default function DenseTable() {
  
      const[studentList, setStudentList] = useState([])
      const deleteStudent =(grade)=>{
        axios.delete(`http://localhost:4000/student/delete?${grade}`).then(()=>{
          window.location.reload(false);
        })
      }
      useEffect(()=>{
        axios.get('http://localhost:4000/student/all').then((getStudentData) => {
          setStudentList(getStudentData.data);
        })
      },[])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Serial No.</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Registration Number</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Grade</TableCell>
            <TableCell align="right">Section</TableCell>
            <TableCell align="right">Action</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {studentList.map((student,key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.SrNo}
              </TableCell>
              <TableCell align="right">{student.studentName}</TableCell>
              <TableCell align="right">{student.Id}</TableCell>
              <TableCell align="right">{student.Email}</TableCell>
              <TableCell align="right">{student.regNo}</TableCell>
              <TableCell align="right">{student.grade}</TableCell>
              <TableCell align="right">{student.section}</TableCell>
              <TableCell align="right">
              <Grid item xs={8}>
              <DeleteIcon onClick = {()=> deleteStudent(student.grade)}/>
                
              </Grid>            

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
