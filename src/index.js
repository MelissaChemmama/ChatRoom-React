// == Import : npm
import React from 'react';
import ReactDOM from 'react-dom/client';


// Provider
import { Provider } from 'react-redux';

// == Import : local
import App from 'src/components/App';
import store from 'src/store';

// == Render
// On créé notre root avec ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// On déclenche le rendu de React (virtuel) => DOM (page web)
root.render(
  <Provider store={store} >
    <App />
  </Provider>
);

// Est-ce que j'ai besoin de lire le state ?
  // si oui il me faut une stratégie en lecture
  // première approche -> useSelector()
     // gérera à ma place store.getState() pour lire le state et store.subscribe() pour le relire quand il évolue et redéclencher un rendu !
// Est-ce que j'ai besoin de modifier le state ?
  // si oui il me faut une stratégie en écriture
  // première approche -> useDispatch()
