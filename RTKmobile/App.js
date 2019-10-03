import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux'
import Root from './view/navigators/Root'
import store from './modules/store'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
     <Provider store={store}>
      <Root />
     </Provider> 
  )
}

export default App
