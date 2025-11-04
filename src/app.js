import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import Header from './components/header';
import Watch from './pages/watch'
function App() {
    return ( 
        <>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/watch/:id' element={<Watch/>}/>
                </Routes>
            </BrowserRouter>
        </>
     );
}

export default App;