let _token: string = undefined;

export function getToken(){
    return _token;
}

export function setToken(token: string){
    _token = token;
}