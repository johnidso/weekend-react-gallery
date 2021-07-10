import './GalleryItem.css';

// set up gallery items, including photo, like button, and like(s) display
function GalleryItem(props){
    return( 
    <section className="galleryItemWrapper">
        <img src={props.path}/>
        <div className='buttons'>
            <button onClick = { () => props.photoLiked(props.id)}>Like</button>
            <aside>Likes: {props.likes}</aside>
        </div>
    </section>
    )
}

export default GalleryItem;