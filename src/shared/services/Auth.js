class Auth {
    static login = (token) => {
        localStorage.setItem('TOKEN', token)
    }

    static isLogin = () => {
        return (localStorage.getItem('TOKEN') !== null) ? true : false;
    }

    static logout = () => {
        localStorage.removeItem('TOKEN');
    }
}

export default Auth