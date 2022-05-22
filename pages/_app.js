// import 'styles/globals.css'
import React from 'react'
import {wrapper} from 'store'
import MainLayout from 'layouts/MainLayout'

const WrappedApp = ({Component, pageProps}) => (
  <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
)

export default wrapper.withRedux(WrappedApp)



