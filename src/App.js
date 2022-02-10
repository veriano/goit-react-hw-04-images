import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Searchbar from "./Components/Searchbar";
import Button from "./Components/Button";
import ImageGallery from "./Components/ImageGallery";
import Modal from "./Components/Modal";
import Loader from "./Components/Loader"; 
const axios = require('axios');


function App() {
    const [hits, setHits] = useState([]);
    const [name, setName] = useState('');
    const [page, setPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [modalImage, setModalImage] = useState('');
    const [visibleLoadMore, setVisibleLoadMore] = useState(false);

    useEffect(() => {
        if(!name) {
            return;
        }
        pixabayApi(name,page);
    },[name,page])

    const openModal = largeImageURL => {
        setShowModal(true);
        setModalImage(largeImageURL);
    }

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const getValue = data => {
        setName(data.name);
        setPage(data.page);
        setHits([]);
    }

    const onLoadMore = () => {
        setPage(page => page + 1);
    }

    async function pixabayApi(name, page) {        
        setLoading( true );

         const searchParams = new URLSearchParams({
            image_type: 'photo',
            orientation: "horizontal",
            safesearch: true,
            per_page: 12,
         });
        
        const BASE_URL = 'https://pixabay.com/api/';
        const API_KEY = '24463326-9b2d5a427846ea9fa30299421';

        try {
            const data = await axios(`${BASE_URL}/?key=${API_KEY}&q=${name}&page=${page}&${searchParams}`)
           
            .then(data => {
                    const totalPages = data.data.totalHits / data.data.hits.length;
                if (data.data.hits.length < 1) {
                    setLoading(false);
                    toast.error('Пожалуйста введите корректное поисковое слово.');
                    return;
                }

                setLoading(false);
                setHits(prevHits => [...prevHits, ...data.data.hits]);
                setVisibleLoadMore(true);

                if (page >= totalPages) {
                    setLoading(false);
                    setVisibleLoadMore(false);
                    toast.error('Извините, но это были последние изображения.');
                }
                
                return data.data.hits;
                });
            return data;
        } catch (error) {
            console.log(error);
        }
    }

        return (
            <div>
                <Searchbar onSubmitHandler={ getValue } />

                <ToastContainer autoClose={ 4000 } />

                { loading && <Loader />}

                {hits && (
                <ImageGallery articles={ hits } onImgClick={ openModal } />)}

                {showModal && (
                <Modal onClose={ toggleModal }>
                <img src={ modalImage } alt="largeImage" className='image' />
                </Modal> )}

                { visibleLoadMore && (
                <Button onButtonClick={ onLoadMore } />)}
            </div>
        )
}

export default App;