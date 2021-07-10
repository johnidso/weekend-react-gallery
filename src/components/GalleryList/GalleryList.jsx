

function GalleryList(props){
    return(
        <>
            <h2>Photo Gallery</h2>
            {props.gallery.map(photo => 
                <GalleryItem key={photo.id} photoSrc={photo.photoSrc} />
                )}
        </>
    )
}