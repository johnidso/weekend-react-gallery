import './GalleryItem.css';

// set up gallery items, including photo, like button, and like(s) display
function GalleryItem(props){
    return( 
    <section className="galleryItemWrapper">
        <img src={props.path}/>
        <div className='buttons'>
            <button onClick = { () => props.photoLiked(props.key)}>Like</button>
            <aside>likes</aside>
        </div>
    </section>
    )
}

export default GalleryItem;