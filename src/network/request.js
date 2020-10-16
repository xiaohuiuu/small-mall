import axios from 'axios'


export function request(config,success,faild){
    let getdatas = axios.create({
        baseURL:'http://152.136.185.210:8000/api/w6',
        timeout:5000,
        }
    )


    getdatas.interceptors.response.use(res => {
        return res.data
    },
    err => {
        return err
    }
    )



    return getdatas(config)
    

    
    

}