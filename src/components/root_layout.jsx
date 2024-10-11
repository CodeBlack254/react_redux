import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/store";

const RootLayout = () => {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Navbar />
                    <main>
                        <Outlet />
                    </main>
                </PersistGate>
            </Provider>
        </>
    )
}

export default RootLayout;

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './store'; // Adjust the path as necessary
// import App from './App';

// ReactDOM.render(
//     <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//             <App />
//         </PersistGate>
//     </Provider>,
//     document.getElementById('root')
// );