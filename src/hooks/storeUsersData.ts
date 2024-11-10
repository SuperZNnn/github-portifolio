export type User = {
    name: string,
    displayName?: string,
    instaLink?: string,
    faceLink?: string,
    xLink?: string,
    linkedinLink?: string,
    youLink?: string,
    history?: string,
    extraEmail?: string
    experiences?: [
        {
            title: string,
            during: string,
            technologies: string[],
            descrip: string,
            link?: string
        }
    ] | null
}
export const getLocalStorageData = (user: string) => {
    const usersArray = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = usersArray.findIndex((u: User) => u.name === user);

    return { usersArray, userIndex };
}

type UserUpdateField = 'linkedinLink' | 'instaLink' | 'youLink' | 'xLink' | 'faceLink' | 'displayName' | 'history' | 'extraEmail';

const updateUserField = (user: string, field: UserUpdateField, value: string) => {
    const { usersArray, userIndex } = getLocalStorageData(user);
    
    if (userIndex !== -1) {
        usersArray[userIndex][field] = value;
    } else {
        const newUser: User = { name: user, [field]: value };
        usersArray.push(newUser);
    }

    localStorage.setItem('users', JSON.stringify(usersArray));
}

export const changeLinkedinLink = (user: string, link: string) => {
    updateUserField(user, 'linkedinLink', link);
};

export const changeInstagramLink = (user: string, link: string) => {
    updateUserField(user, 'instaLink', link);
};

export const changeFacebookLink = (user: string, link: string) => {
    updateUserField(user, 'faceLink', link);
};

export const changeXLink = (user: string, link: string) => {
    updateUserField(user, 'xLink', link);
};

export const changeYoutubeLink = (user: string, link: string) => {
    updateUserField(user, 'youLink', link);
};

export const changeDisplayName = (user: string, name: string) => {
    updateUserField(user, 'displayName', name);
};

export const changeHistory = (user: string, history: string) => {
    updateUserField(user, 'history', history);
};

export const changeExtraEmail = (user: string, email: string) => {
    updateUserField(user, 'extraEmail', email);
};

export const createExperience = (user: string, experience: string) => {
    const { usersArray, userIndex } = getLocalStorageData(user);

    if (userIndex > -1){
        const newExperience = JSON.parse(experience)

        usersArray[userIndex].experiences = [
            ...(usersArray[userIndex].experiences || []),
            newExperience
        ];
    }
    
    localStorage.setItem('users', JSON.stringify(usersArray));
};
export const editExperience = (user: string, experience: string, index: number) => {
    const { usersArray, userIndex } = getLocalStorageData(user);

    if (userIndex > -1){
        const newExperience = JSON.parse(experience)

        usersArray[userIndex].experiences[index] = newExperience;
    }

    localStorage.setItem('users', JSON.stringify(usersArray));
};