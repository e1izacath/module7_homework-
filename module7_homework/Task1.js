
function userInfo(object) {
      for(let key in object) {
        if(object.hasOwnProperty(key)) {
          console.log(key, object[key]);
        }
      }  
    }

const user = {
  name: 'Ivan', 
  age: 20,
};
userInfo(user);