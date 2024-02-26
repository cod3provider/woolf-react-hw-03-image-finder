import { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

import { getImages, PER_PAGE, responseImages } from '../api/API';
import Button from './Button/Button';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.fetchImages();
    }
  }

  searchImages = query => {
    this.setState({
      query,
      images: [],
      page: 1,
    });
  };

  async fetchImages() {
    try {
      this.setState({ isLoading: true });

      const { query, page } = this.state;
      const { hits, totalHits } = await getImages(query, page);
      const pictures = responseImages(hits);

      if (pictures.length === 0) {
        alert('Images not found');
      }
      if (page === 1) {
        this.setState({ totalPages: Math.ceil(totalHits / PER_PAGE) });
      }
      this.setState(({ images }) => ({
        images: [...images, ...pictures],
      }));
    }
    catch (err) {
      this.setState({ error: err.message });
    }
    finally {
      this.setState({ isLoading: false });
    }
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }

  render() {
    const { searchImages, handleLoadMore } = this;
    const { images, page, totalPages } = this.state;
    const isMoreImages = images.length > 0 &&  page !== totalPages;

    return (
      <>
        <Searchbar onSubmit={searchImages} />
        <ImageGallery images={images} />
        {isMoreImages && <Button text="Load more" onClick={handleLoadMore} />}
      </>
    );
  }
}

export default App;
