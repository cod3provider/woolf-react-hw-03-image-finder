import { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';

import { getImages, PER_PAGE, responseImages } from '../api/API';

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

  render() {
    const { searchImages } = this;
    const { images } = this.state;

    return (
      <>
        <Searchbar onSubmit={searchImages} />
      </>
    );
  }
};

export default App;
