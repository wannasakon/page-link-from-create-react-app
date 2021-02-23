import React from 'react'
import { Composition, Only } from 'atomic-layout'
import { Text, Image, Button, Card,} from '../../components'

const templateMobile = `
  thumbnail
  heading
  actions
`

const templateTablet = `
  thumbnail heading
  thumbnail actions
`

const Flat = ({ title, location, imageUrl, detail }) => (
  <Card>
    <Composition
      template={templateMobile}
      templateMd={templateTablet}
      templateLg={templateMobile}
      templateColsMdOnly="minmax(100px, 1fr) 1fr"
      padding={15}
      gutter={15}
      gutterLg={25}
    >
      {({ Thumbnail, Heading, Actions }) => (
        <>
          <Thumbnail>
            <Image src={imageUrl} alt={title} />
          </Thumbnail>
          <Heading>
            <h3>{title}</h3>
            <Text small muted>
              {location}
            </Text>
          </Heading>
          <Actions flex align="flex-end">
            <Only from="md" marginRight={10}>
              <Button.Map />
            </Only>
            <Button wide ><a href={detail}>Detail</a></Button>
          </Actions>
        </>
      )}
    </Composition>
  </Card> 
)

export default Flat
