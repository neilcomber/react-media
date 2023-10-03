import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers, addUser, deleteUser } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';
import UsersListItem from './UsersListItem';
import useThunk from '../hooks/useThunk';

function UsersList() {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);
    

  
    const { data } = useSelector((state) => {
        return state.users;
    })

    useEffect(() => { 
        doFetchUsers();
    },[doFetchUsers]);

    const handleUserAdd = () => {
        doCreateUser();
    }

   

    let content;

    if (isLoadingUsers) {
        content = <div><Skeleton times={6} className="h-10 w-full" /></div>
    } else if (loadingUsersError) {
        content = <div>Error fetching data..</div>
    } else {
        content = data.map((user) => {
            return <UsersListItem key={user.id} user={user} />
        
        })
    }


    return (<div>
                <div className="flex flex-row justify-between m-3 items-center">
                    <h1 className="m-2 text-xl">Users</h1>
                    <Button loading={ isCreatingUser } onClick={handleUserAdd}>+ Add User</Button>
                    {creatingUserError && 'Error Creating User'}
                </div>
                {content}
             </div>)
}

export default UsersList;