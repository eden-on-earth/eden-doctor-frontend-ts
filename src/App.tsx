import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import SetupConfig from './components/setup/SetupApp';
import { store } from './redux/Setup/Store';
import pages from './config/pages.json';
import withPageClasses from './hoc/withPageClasses';
import LogIn from './pages/Register/LogIn';

// Placeholder for page components
const components: Record<string, React.ComponentType<any>> = {
  LogIn,
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <SetupConfig />
        <Routes>
          {Object.entries(pages).map(([element, config]: any, index) => {
            const Component = components[element];
            const PageWithClasses = withPageClasses(Component, config.classes);
            return (
              <Route
                key={index}
                path={config.path}
                element={<PageWithClasses />}
              />
            );
          })}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
