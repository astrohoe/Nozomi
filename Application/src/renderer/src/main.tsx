import { Provider } from './components/ui/provider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes, Navigate } from 'react-router';
import { About, Create, Detail, Explore, Home, My } from './routes';
import App from './App';

import './assets/main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <HashRouter>
        <Routes>
          <Route path='/' element={ <App /> }>
            <Route index element={ <Home /> } />
            <Route path='about' element={ <About /> } />
            <Route path='create' element={ <Create /> } />
            <Route path='explore' element={ <Explore /> } />
            <Route path='my' element={ <My /> } />
            <Route path=':id' element={ <Detail /> } />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
