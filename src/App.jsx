import Navpage from './components/assets/Navpage';
import Welcome from './components/assets/Welcome';
import ReactPageScroller from 'react-page-scroller';
import {useState} from 'react'

function App() {

  const [currPage, setCurrPage] = useState(0)

  const handlePageChange = number => {
    setCurrPage(number)
  }

  return (
    <>
    <ReactPageScroller animationTimer={700} customPageNumber={currPage}
    renderAllPagesOnFirstRender={false} onBeforePageScroll={() => handlePageChange(0)}>
        <Welcome pageScroll={handlePageChange}/>
        <Navpage/>
    </ReactPageScroller>
    </>
  );
}

export default App;
