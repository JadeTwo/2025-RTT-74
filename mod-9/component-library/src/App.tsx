import './App.css'
import AlertBox from './components/AlertBox/AlertBox'

function App() {

  return (
    <>
      <AlertBox type='success' message='Hello World'>
          Testing
      </AlertBox>
      <AlertBox type='warning' message='Goodbye'>
          Testing123
      </AlertBox>
    </>
  )
}

export default App
