import { Fragment, createContext, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import cookie from 'react-cookies';
import DefaultLayout from '~/layouts/DefaultLayout';
import MyUserReducer from './reducer/MyReducerContext';

export const MyUserContext = createContext();
function App() {
    const [user, dispatch] = useReducer(
        MyUserReducer,
        cookie.load('user') || null,
    );
    return (
        <MyUserContext.Provider value={[user, dispatch]}>
            <Router>
                <div className="app">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            let Layout = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </MyUserContext.Provider>
    );
}

export default App;
