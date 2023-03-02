import { ReactNode } from 'react'
import { Container, Grid } from '@mui/material'

import { FormStepper } from '../FormStepper/FormStepper'

interface PageLayoutProps {
  children: ReactNode
  title: string
}
export const PageLayout = ({ children, title }: PageLayoutProps) => {
  return (
    <Container>
      <Grid container md={6} sm={12} rowGap="20px" direction="column">
        <h1>Customer Form</h1>
        {children}
        <FormStepper />
      </Grid>
    </Container>
  )
}
