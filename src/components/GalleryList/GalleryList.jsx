import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css';

function GalleryList(props){
    return(
        <section className='container'>
            {props.galleryList.map(photo => 
                <GalleryItem photoLiked={props.photoLiked} getPhotos={props.getPhotos} key={photo.id} path={photo.path} description={photo.description} />
                )}
        </section>
    )
}

export default GalleryList;