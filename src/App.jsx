import React from 'react'
import Loading from './components/Loading'
import Tours from './components/Tours'
import Footer from './components/Footer'
import Refresh from './components/Refresh'

const url = 'https://course-api.com/react-tours-project';


const App = () => {

const [ toursData, setToursData ] = React.useState()
const [ status, setStatus ] = React.useState('idle')

// fetching data from the API
React.useEffect(() => {
  async function fetchData() {

    setStatus('loading')
    const response = await fetch(url)
    const json = await response.json()

    if(!json) {
      throw error
      setStatus('error')
    }
    setToursData(json)
    setStatus('success')
    
  }

  fetchData()
}, [])

// remove items
function removeTour(id) {
  const filteredTours = toursData.filter((item) => item.id != id)
  setToursData(filteredTours)
}

// re-fetch items from URL 
async function reFetch() {
  const response = await fetch(url)
  const json = await response.json()
  setToursData(json)
}


  return (
    <>
    <h2 className="page-title">Tours</h2>
    <main>

      <Tours toursData={toursData} removeTour={removeTour} />
      {toursData?.length === 0 && <Refresh reFetch={reFetch} />}
    </main>
    <Footer />
    </>
  );
};

export default App;