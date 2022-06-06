const escapeStr= "\`\\\/\"\'";
Object.freeze(escapeStr);

const arr= [4,'2'];
Object.freeze(arr);

const obj= {
 str :"My name is Jeff",
 num :3,
 bool :true,
 undef :undefined
} ;
Object.freeze(obj);

const nested= {
    arr1: [4, undefined, '2'],
    obj:{
        str : "My name is Joseph",
        num : 2,
        bool : false
    }
};
Object.freeze(nested);