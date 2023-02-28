import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPhotos } from './galleryState';

function App() {
  const dispatch = useDispatch();
  const photos = useSelector(state => state.gallery.photos);

  useEffect(() => {
    dispatch(getPhotos())
  }, [dispatch])

  return (
    <div className="App">
      <h1>Photo Gallery</h1>
      <p>This is a photo gallery made using redux toolkit and redux thunk</p>
      {
        photos.length>0 && photos.map(photo=>{
          return <img key={photo.id} src={photo.download_url} alt={photo.author} height="400" width="400"/>
        })
      }
    </div>
  );
}

export default App;
