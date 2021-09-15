

function checkUR(abc){
    let string = abc.value
    if(!(/^http:\/\//.test(string))){
        string = "http://" + string;
    }
    abc.value=string
}

const Prtocol = "http://";


export {checkUR, Prtocol} ;

