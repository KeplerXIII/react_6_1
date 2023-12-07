import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import ZoneClock from './components/zoneClock';

// moveTime(yourElement, "America/New_York"); // для New York
// moveTime(yourElement, "Europe/Moscow"); // для Moscow
// moveTime(yourElement, "Europe/London"); // для London
// moveTime(yourElement, "Asia/Tokyo"); // для Tokyo

function App() {

  return (
    <>
      <ZoneClock zone="Europe/Moscow" title='Москва'/>
      <ZoneClock zone="Asia/Tokyo" title='Asia' />
    </>
  )
}

export default App
