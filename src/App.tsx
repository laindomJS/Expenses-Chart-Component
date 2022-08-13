import { Grid } from "@chakra-ui/react";
import { Card } from "./components/Card";

export const App = ():JSX.Element => {
  return (
    <Grid as="main" w="100%" h="100vh" alignItems="center" placeItems="center" bgColor="cream">
      <Card />
    </Grid> 
  )
}

