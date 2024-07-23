const GalleryItem = ({ gallery }) => {
  return (
    <div key={gallery.id} className="gallery-item p-4 rounded">
      <img
        src={`/storage/${gallery.image_name}`}
        alt={gallery.title}
        className="w-full h-auto"
      />
    </div>
  );
};

export default GalleryItem;
