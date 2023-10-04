import { useFetchPhotosQuery, useAddPhotoMutation } from '../store';
import Button from './Button';
import PhotosListItem from './PhotosListItem';


export default function PhotosList({ album }) {
    useFetchPhotosQuery(album);
    const [addPhoto, addPhotoResults] = useAddPhotoMutation();

    const handleAddPhoto = () => {
        addPhoto(album);
    };

    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">Photos in {album.title}</h3>
                <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
                    + Add Photo
                </Button>
            </div>
        </div>
    );
}
