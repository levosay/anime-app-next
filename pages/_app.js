import 'styles/globals.css'
import { Provider } from 'react-redux';
import React from 'react'
import store from 'store/index';
import MainLayout from 'layouts/MainLayout'

const WrappedApp = ({Component, pageProps}) => (
  <Provider store={store}>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </Provider>
)

export default WrappedApp



