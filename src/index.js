import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '@store/store';
//import { render } from 'react-dom';
//import { BrowserRouter } from 'react-router-dom';

//import { REPO_NAME } from '@constants/repo';

import ThemeProvider from '@context/ThemeProvider';
import App from '@containers/App';

import '@styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  // // document.getElementById('root')
  // <React.StrictMode>
	// 	<BrowserRouter basename={`/${REPO_NAME}/`}>
	// 		<Provider store={store}>
	// 			<ThemeProvider>
	// 				<App />
	// 			</ThemeProvider>
	// 		</Provider>
	// 	</BrowserRouter>
	// </React.StrictMode>
);

