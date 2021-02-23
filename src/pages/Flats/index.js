import React from 'react'
import FlatsList from './FlatsList'
import apartments from './apartments.json'
import { Text, Image, Card } from '../../components'
const Flats = () => (
  <>
    <h1>Home</h1>
    <FlatsList data={apartments} />
    <br></br>
    <center>
      <Card flex align="flex-end">
        <br></br>
        <Image src="assets/pig.png" style={{width:350,height:350}} />
        <br></br>
        <h3>Wannasakon Phosomboon</h3>
        <h4>61114440571</h4>
        <Text small muted>
        </Text>
        <br></br>
      </Card>
    </center>
  </>
)

export default Flats
