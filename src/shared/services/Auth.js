class Auth {
    static login = async (token) => {
        localStorage.setItem('TOKEN', token);
        setTimeout(function(){
            if(localStorage.getItem('TOKEN')!='')
                return true;
            else
                return false;
        }, 500);

    }
    static token = () => {
        return localStorage.getItem('TOKEN');
    }
    static isLogin = () => {

        return (localStorage.getItem('TOKEN') !== null) ? true : false;
    }

    static logout = () => {
        localStorage.removeItem('TOKEN');
    }
}

export default Auth