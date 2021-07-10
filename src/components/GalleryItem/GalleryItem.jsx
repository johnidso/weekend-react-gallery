import {useState} from 'react';
import './GalleryItem.css';

// set up gallery items, including photo, like button, and like(s) display
function GalleryItem(props){
    const [cardStatus, setCardStatus] = useState(true);
    console.log(cardStatus);
    return( (cardStatus) ? (
        <section className="galleryItemWrapper">
            <img src={props.path} onClick = { () => setCardStatus(!cardStatus)}/>
            <div className='buttons'>
                <button onClick = { () => props.photoLiked(props.id)}>♥</button>
                <aside>Likes: {props.likes}</aside>
            </div>
        </section>
        ) : (
        <section className="galleryItemWrapper">
            <p onClick = { () => setCardStatus(!cardStatus)}>{props.description}</p>
            <div className='buttons'>
                <button onClick = { () => props.photoLiked(props.id)}>♥</button>
                <aside>Likes: {props.likes}</aside>
            </div>
        </section>
        )
    )
}

export default GalleryItem;