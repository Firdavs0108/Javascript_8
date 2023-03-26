

// let obj ={
//     id: 1,
//     name: 'WebBrain'
// }

// for(let key in obj){
//     console.log(key);
// }


//================================2


// let obj ={
//     id: 1,
//     name: 'WebBrain'
// }


// for(let key in obj)

//     if( typeof obj[key]  === 'number')

//     console.log(key);



// let obj ={
//     id: 1,
//     name: 'WebBrain'
// }


// let obj2 = Object.assign({}, obj)

// delete obj2.name
// console.log(Object.keys(obj2));


//==================================3

// let obj ={
//         id: 1,
//         name: 'WebBrain',
//         offline: true,
//         online: true,
//         individula: false
//     }

//     let Newobj = Object.assign({}, obj)
//   delete Newobj.id
//   delete Newobj.name

//     console.log(Newobj);


//===================================4

let person = {
    id: 1,
    name: 'Odil',
    age:78,
    child: {
        id: 1,
        name: 'Ali',
        age2: 48,
        child: {
            id: 1,
            name: 'Umar',
            age3: 20
        }
      }
}
// let Newobj = Object.assign({}, person)
let  { age, child:{age2, child: {age3} } }= person

  console.log(age + age2 + age3);
  // console.log(age );
  // console.log(age2 );
  // console.log(age3);

  
