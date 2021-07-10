import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

// loop through gallery items
function GalleryList(props){
    return(
        <section className='container'>
            {props.galleryList.map(photo => 
                <GalleryItem key={photo.id} photoLiked={props.photoLiked} getPhotos={props.getPhotos} id={photo.id} path={photo.path} description={photo.description} likes={photo.likes} />
                )}
        </section>
    )
}

export default GalleryList;