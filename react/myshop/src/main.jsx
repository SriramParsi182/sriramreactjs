import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import store from './store.js'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google'
import GoogleLoginComponent from "./GoogleLoginComponent";


createRoot(document.getElementById('root')).render(
  <StrictMode>
            <GoogleOAuthProvider clientId='426424616477-q6qt0oeids88re15bdefrifj4554d2en.apps.googleusercontent.com'><GoogleLoginComponent /></GoogleOAuthProvider>

    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
