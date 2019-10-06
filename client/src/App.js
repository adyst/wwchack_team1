import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Chart from './components/Chart';
import './styles/index.css';
import rootReducer from './redux/rootReducer';
import appSaga from './redux/saga';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#f3f3f3',
      },
      secondary: {
        main: '#ffd966',
      },
  },
});

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(sagaMiddleware)
));
sagaMiddleware.run(appSaga);

const InitApp = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_DATA_REQUEST'});
    },[]);
    return (
        <Chart/ >
    );
};

const App = () => <Provider store={store}><ThemeProvider theme={theme}><InitApp /></ThemeProvider></Provider>;


export default App;
