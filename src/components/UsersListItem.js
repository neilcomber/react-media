import { GoTrash } from 'react-icons/go';
import Button from "./Button";
import { deleteUser } from '../store/thunks/deleteUser';
import useThunk from '../hooks/useThunk';
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from './AlbumsList';

function UsersListItem({ user }) {

    const [doDeleteUser, isDeleteingUser, deletingUserError] = useThunk(deleteUser);

    const handleUserDelete = () => {
        const response = doDeleteUser(user);
        console.log(response)
    }

    const header = <><Button className="mr-3" loading={isDeleteingUser} onClick={handleUserDelete}><GoTrash /></Button>
    {deletingUserError && <div>Error Deleting user</div>}
        {user.name}</>
    
    return <ExpandablePanel header={header}>
        <AlbumsList user={user} />
        </ExpandablePanel>
                
           
}

export default UsersListItem;