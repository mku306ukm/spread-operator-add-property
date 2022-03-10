console.log("Useful Modern JavaScript Tips")
//1.Conditionally add properties💡 in the object

const isValid = true
const age = 18

//we can use spread operator (...) add properties in objects

const person = {
    id: '132',
    name: 'umesh',
    ...(isValid && {isActive: true}),//(true && {isActive:true})
    ...((age >= 18 || isValid) && { cart: "i am best in coding" }) // (true && {cart:0})
}
console.log('person----',person)