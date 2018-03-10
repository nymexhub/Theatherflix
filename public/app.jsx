// Coding by Felipe Alfonso Gonzalez -  Software Engineer/Developer  CC 2018
// ---------------------------------------------------------------
// if you wanna code with good music in the background, I recommend : https://ibizasonica.com/
// for future adjustaments from other coders please refactoring is necessary.

// import react and its dom
import React from 'react'
import ReactDOM from 'react-dom'

// import the main Component
import Greeter from './greeter'

// var to make a welcome ... from me
// Pass data to the components if necessary
const title = 'Felipe the Founder welcomes you!'
const message = 'Our first Component'

// the renderer
ReactDOM.render(<Greeter title={title} message={message} />, document.getElementById('app'))
