//class for shape
class Shape{
    constructor(color, font, letters){
        this.color=color
        this.font=font
        this.letters=letters
    }
};

class Triangle extends Shape{
    constructor(color, font, letters){
        super(color,font,letters);
    }
    render(color,font,letters){
        return `<polygon points="200,0 200,200 0,200" fill="${color}"></polygon><text y="150" x="150" alignment-baseline="center" fill="${font}" text-anchor="middle" font-size="28">${letters}</text>`
    }
};

class Square extends Shape{
    constructor(color, font, letters){
        super(color,font,letters);
    }
    render(color,font,letters){
        return `<rect x="0" y="0" height="200" width="300" fill="${color}"></rect><text y="100" x="150" alignment-baseline="center" fill="${font}" text-anchor="middle" font-size="28">${letters}</text>`
    }
}

class Circle extends Shape{
    constructor(color, font, letters){
        super(color,font,letters);
    }
    render(color,font,letters){
        return `<circle cy="100" cx="150" r="100" fill="${color}"></circle><text y="110" x="150" alignment-baseline="center" fill="${font}" text-anchor="middle" font-size="28">${letters}</text>`
    }
}

// extra shape, star (https://www.w3schools.com/graphics/svg_polygon.asp)
class Star extends Shape {
    constructor(color, font, letters){
        super(color,font,letters);
    }
    render(color, font, letters) {
        return `<polygon points="100,10 40,198 190,78 10,78 160,198" fill="${color}"></polygon><text y="120" x="100" alignment-baseline="center" fill="${font}" text-anchor="middle" font-size="28">${letters}</text>`
    }
}

function shapeSVG({color,font,letters,shape}){
    let shapes = {
        "Triangle": new Triangle(color,font,letters),
        "Square": new Square(color, font, letters),
        "Circle": new  Circle(color,font,letters),
        "Star": new Star(color, font, letters)
    }
    const newShape=shapes[shape];
    return newShape.render(newShape.color, newShape.font, newShape.letters)
};

function genSVG(data){
    let svg=`<svg height="200" width="300">${shapeSVG(data)}</svg>`;
    return svg
};

//export 
module.exports=genSVG;