import GalleryItem from "./GalleryItem";

const Gallery = ({ galleries }) => {
  return (
    <>
      {galleries.map((gallery) => (
        <GalleryItem key={gallery.id} gallery={gallery} />
      ))}
    </>
  );
};

export default Gallery;
