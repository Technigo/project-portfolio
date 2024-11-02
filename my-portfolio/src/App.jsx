import './App.css'
import { Header } from "./components/sections/HeaderSection/Header.jsx"
import { Library } from "./components/sections/LibrarySection/Library.jsx"
import { Bio } from "./components/sections/BioSection/Bio.jsx"
import { Grid } from "./components/ui/GridLayout/Grid.jsx"

export const App = () => {

  return (
    <>
      <Header />
      <Library />
      <Bio />
      <Grid />
    </>
  )
}

