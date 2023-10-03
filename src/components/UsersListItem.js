import { GoTrash } from 'react-icons/go';
import Button from "./Button";
import { deleteUser } from '../store/thunks/deleteUser';
import useThunk from '../hooks/useThunk';


function UsersListItem({ user }) {

    const [doDeleteUser, isDeleteingUser, deletingUserError] = useThunk(deleteUser);

    const handleUserDelete = () => {
        const response = doDeleteUser(user);
        console.log(response)
    }

    return <div className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
            <div className="flex flex-row items-center justify-between">
                <Button className="mr-3" loading={isDeleteingUser} onClick={handleUserDelete}><GoTrash /></Button>
                {deletingUserError && <div>Error Deleting user</div>}
                {user.name}
            </div>
            
                </div>
            </div>
}

export default UsersListItem;