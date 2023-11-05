import wineData from './assets/data/wineData.json'
import WineStatsComponent from './components/features/WineStatsComponent'
import './assets/css/custom.css'
function App() {

  return (
    <>
      <WineStatsComponent wineData={wineData} />
    </>
  );
}

export default App
