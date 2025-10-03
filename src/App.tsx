import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import DetailView from './pages/DetailView';
import MainView from './pages/MainView';

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
