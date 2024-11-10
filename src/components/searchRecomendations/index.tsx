import { useEffect, useState } from "react";
import { SearchBox } from "./style";
import { getAllUsers, User } from "../../hooks/storeUsersData";

const SearchRecomendations = ({ search, complete }: { search?: string, complete: (name: string) => void }) => {
    const users = getAllUsers();
    const [foundedUsers, setFoundedUsers] = useState<Array<User>>([])

    useEffect(() => {
        if (search) {
            setFoundedUsers(
                users.filter((user: User) => user.name?.startsWith(search))
            );
        } else {
            setFoundedUsers([])
        }
    }, [search])

    return (
        <SearchBox>
            {foundedUsers.map((user: User, index: number) => (
                <div className="user" key={index} onClick={() => {complete(user.name)}}>
                    <img src="/assets/images/default_user.png" alt="User" />
                    <p>{user.name}</p>
                </div>
            ))}
        </SearchBox>
    );
};

export default SearchRecomendations;
