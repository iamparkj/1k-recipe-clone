import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailView from './DetailView';
import Header from './Header';
import MainView from './MainView';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/recipe/:id" element={<DetailView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
