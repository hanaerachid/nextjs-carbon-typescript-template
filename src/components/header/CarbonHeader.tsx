import React from 'react'
import {
  Header,
  HeaderName,
  SkipToContent,
} from 'carbon-components-react'

const CarbonHeader = (): JSX.Element => {
  return (
    <Header aria-label="IBM Platform Name">
      <SkipToContent />
      <HeaderName href="#" prefix="GEOAP">
        Training Registration
      </HeaderName>

    </Header>
  )
}

export default CarbonHeader
