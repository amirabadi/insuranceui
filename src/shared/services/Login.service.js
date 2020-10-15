import Ajax from '../../utilis/Ajax'
const loginService={

    login:async (dataIn)=>{

        const response=await Ajax.post({
            isAuth:false,
            url:'user/login',
            data:dataIn
        })
        return response;
    }
}
export default loginService;