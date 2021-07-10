import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList(props){
    return(
        <>
            {props.galleryList.map(photo => 
                <GalleryItem photoLiked={props.photoLiked} getPhotos={props.getPhotos} key={photo.id} path={photo.path} description={photo.description} />
                )}
        </>
    )
}

export default GalleryList;