let myFunctions = require('./functions')

test ('returnTwo should return two lol', () => {
    expect(myFunctions.returnTwo()).toEqual(2)
})

test('greeting james and jill', ()=>{
    expect(myFunctions.greeting('james')).toEqual('hello, james')
    expect(myFunctions.greeting('jill')).toEqual('hello, jill')
})

test('adding function', () =>{
    expect(myFunctions.add(1, 2)).toEqual(3)
    
})

test('subtract function', () =>{
    expect(myFunctions.subtract(2, 1)).toEqual(1)
    
})

test('divide function', () =>{
    expect(myFunctions.divide(80, 2)).toEqual(40)
    
})

test('multiply function', () =>{
    expect(myFunctions.multiply(1, 2)).toEqual(2)
    
})