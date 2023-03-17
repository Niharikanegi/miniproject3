import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios'

export default function Create() {
    const[student, setStudent] = useState({
        SrNo:"",
        Id:"",
        Email:"",
        regNo: "",
        studentName:"",
        grade:"",
        section:""
    })
    const createStudent =()=>{
        axios.post('http://localhost:4000/student/insert', student)

    }

  return (
    <>
    <Box
        
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <h2> Create Student</h2>
        <TextField id="outlined-basic" label="Serial No" variant="outlined" value ={student.SrNo} onChange ={
        (event)=>{setStudent({...student, SrNo:event.target.value}) }} />
        <TextField id="outlined-basic" label="Name" variant="outlined" value ={student.studentName}onChange ={
        (event)=>{setStudent({...student, studentName:event.target.value}) }} />
        <TextField id="outlined-basic" label="Student ID" variant="outlined" value ={student.Id} onChange ={
        (event)=>{setStudent({...student, Id:event.target.value}) }} />
        <TextField id="outlined-basic" label="student Email" variant="outlined" value ={student.Email} onChange ={
        (event)=>{setStudent({...student, Email:event.target.value}) }} />
      <TextField id="outlined-basic" label="Registration No" variant="outlined" value ={student.regNo} onChange ={
        (event)=>{setStudent({...student, regNo:event.target.value}) }} />      
      <TextField id="outlined-basic" label="Grade" variant="outlined" value ={student.grade} onChange ={
        (event)=>{setStudent({...student, grade:event.target.value}) }} />
      <TextField id="outlined-basic" label="Section" variant="outlined" value ={student.section} onChange ={
        (event)=>{setStudent({...student, section:event.target.value}) }} />
      
      <Stack spacing={2} direction="row">
      <Button variant="contained" color="primary" onClick= {createStudent}>Create</Button>
      
    </Stack>
    </Box>
    </>
  );
}
