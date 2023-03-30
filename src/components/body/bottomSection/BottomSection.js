import { Box, styled } from '@mui/material'
import React from 'react'
import PopularProduct from './PopularProduct'
import ProjectTeamView from './ProjectTeamView'

const BoxContainer=styled(Box)`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
`
export default function BottomSection() {
  return (
    <BoxContainer>
        <PopularProduct/>
        <ProjectTeamView/>
    </BoxContainer>
  )
}
