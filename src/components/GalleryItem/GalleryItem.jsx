import './GalleryItem.css';

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