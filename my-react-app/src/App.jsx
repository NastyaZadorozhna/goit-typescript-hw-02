import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./App.module.css";

import { fetchImages } from "./components/Unsplash/unsplash";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getImages = async () => {
      if (!query) return;

      try {
        setError(false);
        setLoading(true);
        const data = await fetchImages(query, page);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  const handleSearch = (searchQuery) => {
    if (!searchQuery.trim()) {
      toast.error("Please enter a search query!");
      return;
    }
    setImages([]);
    setError(false);
    setLoading(true);
    setPage(1);
    setQuery(searchQuery);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = "";
  };

  return (
    <div className={styles.container}>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />

      <ImageGallery
        img={images}
        openModal={openModal}
        page={page}
        totalPages={totalPages}
        onNextPage={handleNextPage}
      />
      {page < totalPages && !loading && !error && (
        <LoadMoreBtn onClick={handleNextPage} />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          image={selectedImage}
        />
      )}
    </div>
  );
}

export default App;
