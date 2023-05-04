import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Configuracao from './Paginas/Configuracao';
import Sorteio from './Paginas/Sorteio/Sorteio';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Configuracao />}/>
          <Route path='/sorteio' element={<Sorteio />}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;