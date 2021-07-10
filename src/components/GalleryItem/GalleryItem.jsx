import '../GalleryItem/GalleryItem.css';

function GalleryItem(props){
    return( 
    <>
        <img src={props.path}/>
        <div>
            <button onClick = { () => props.photoLiked(props.key)}>Like</button>
            <aside>likes</aside>
        </div>
    </>
    )
}

export default GalleryItem;