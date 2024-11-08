export type User = {
    name: string,
    displayName?: string,
    instaLink?: string,
    faceLink?: string,
    xLink?: string,
    linkedinLink?: string,
    youLink?: string,
    history?: string,
    experiences?: [
        {
            title: string,
            during: string,
            technologies: string[],
            description: string,
            repoLink?: string
        }
    ]
}
export const getLocalStorageData = (user: string) => {
    const usersArray = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = usersArray.findIndex((u: User) => u.name === user);

    return { usersArray, userIndex };
}

export const changeLinkedinLink = (user: string, link: string) => {
    const { usersArray, userIndex } = getLocalStorageData(user);
    
    if (userIndex !== -1) {
        usersArray[userIndex].linkedinLink = link;
    }
    else {
        const newUser: User = {
            name: user,
            linkedinLink: link
        };
        usersArray.push(newUser);
    }
    localStorage.setItem('users', JSON.stringify(usersArray));
}