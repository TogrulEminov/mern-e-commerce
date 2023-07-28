import './App.css';
import { getApiConfiguration } from './store/homeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import SearchResult from './pages/searchresult/SearchResult';
import Explore from './pages/explore/Explore';
import NotFound from './pages/notfound/NotFound';
import Details from './pages/details/Details';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
function App() {
  const dispatch = useDispatch();
  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration').then((res) => {
      const url = {
        backdrop: res?.images.secure_base_url + 'original',
        poster: res?.images.secure_base_url + 'original',
        profile: res?.images.secure_base_url + 'original',
      };

      dispatch(getApiConfiguration(url));
    });
  };

  useEffect(() => {
    fetchApiConfig();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
