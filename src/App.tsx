import React from 'react'
import GlobalStyle from './styles/global'

import Layout from './layouts'
import Routes from 'routes'
import PlateProvider from 'utils/context'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <PlateProvider>
          <Routes />
        </PlateProvider>
      </Layout>
    </>
  )
}

export default App
