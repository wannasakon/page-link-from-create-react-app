import React from 'react'
import ReactDOM from 'react-dom'
import Flats from './pages/Flats'

import './styles.css'

const App = () => <Flats />


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)