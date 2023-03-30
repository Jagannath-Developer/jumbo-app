import { Box, styled } from '@mui/material'
import React from 'react'
import MusicCard from './MusicCard'
import ProfileView from './ProfileView'
import SocialCard from './SocialCard'
const BoxContainer=styled(Box)`
  display: flex;
  justify-content: space-between;
`
export default function TopSection() {
  return (
    <BoxContainer>
        <MusicCard/>
        <SocialCard/>
        <ProfileView/>
    </BoxContainer>
  )
}
