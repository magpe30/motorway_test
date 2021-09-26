import React, {useState, Component, lazy, Suspense} from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Modal from './components/Modal/Modal';

const Gallery = lazy(() => import ('./components/Gallery/Gallery')); 
const App = () =>{
    const [selectedImg, setSelectedImg] = useState(null);
    return (
        <>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
              <Gallery setSelectedImg = {setSelectedImg} />
            </Suspense>
            {selectedImg && <Modal selectedImg = {selectedImg} setSelectedImg={setSelectedImg}/>}
            <Form />
        </>
    )
}

export default App;