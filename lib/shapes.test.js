//shape imports 
const genSVG = require('./shapes');
let data = ''

//Test for triangle
test('Triangle Shape Letters',()=>{
    data = {
        'shape':'Triangle',
        'name': 'logo',
        'font':'pink',
        'letters': 'TES',
        'color': 'blue',
    }
    expect(genSVG(data)).toEqual(`<svg height="200" width="300"><polygon points="200,0 200,200 0,200" fill="${data.color.toLowerCase()}"></polygon><text y="150" x="150" alignment-baseline="center" fill="${data.font.toLowerCase()}" text-anchor="middle" font-size="28">${data.letters}</text></svg>`)
});

//Test for square with hexcolor
test('Square Shape Letters',()=>{
    data = {
        'shape':'Square',
        'name': 'logo',
        'font':'#e6abc7',
        'letters': 'POG',
        'color': 'red',
    }
    expect(genSVG(data)).toEqual(`<svg height="200" width="300"><rect x="0" y="0" height="200" width="300" fill="${data.color.toLowerCase()}"></rect><text y="100" x="150" alignment-baseline="center" fill="${data.font.toLowerCase()}" text-anchor="middle" font-size="28">${data.letters}</text></svg>`)
});

//Test for circle with hexcolor
test('Circle Shape Letters',()=>{
    data = {
        'shape':'Circle',
        'name': 'logo',
        'font': '#000000',
        'letters': 'SVG',
        'color': '#fffff',
    }
    expect(genSVG(data)).toEqual(`<svg height="200" width="300"><circle cy="100" cx="150" r="100" fill="${data.color.toLowerCase()}"></circle><text y="110" x="150" alignment-baseline="center" fill="${data.font.toLowerCase()}" text-anchor="middle" font-size="28">${data.letters}</text></svg>`)
});
