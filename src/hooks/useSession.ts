

export const setSession = (userLogin: string) => {
    const user = {
        login: userLogin,
    }
    localStorage.setItem('gitPortSession', JSON.stringify(user))
    
    console.log(JSON.parse(localStorage.getItem('gitPortSession') || '{}'))
}
export const getSession = () => {
    const session = JSON.parse(localStorage.getItem('gitPortSession') || '{}')
    return session
}
export const clearSession = () => {
    localStorage.removeItem('gitPortSession')
}