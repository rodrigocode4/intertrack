import React from 'react'
import GlobalStyle from './styles/global'

import Layout from './layouts'
import Routes from 'routes'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes />
      </Layout>
    </>
  )
}

export default App
