import React from 'react'
import Navbar from './Navbar'
import { Typography } from '@mui/material'
import {Box} from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function About() {
  return (
    <>
    <Navbar/>
    <div>
    <Card sx={{ minWidth: 275 ,m:5}}>
      <CardContent>
        <Typography variant="h4" component="div">
          About This App
        </Typography>
        <Typography variant="body2" sx={{mt:2}}>
          This Loan Calculator App is a modern, single-page web application built using React Js and Materia UI. It allows users to calculate loan EMI (Equated Montly Installments), view a detailed amortization schedule, and see real-time currency conversions of their EMI using live exchange rates
        </Typography>
      </CardContent>
    </Card>
    </div>
    </>
  )
}

export default About