var line = document.querySelector(".line");

class Circles {
    constructor(name,color){
        this.name = name;
        this.color = color;
    }

    get createCircleDiv(){
        return this.circleDiv();
    }
    circleDiv(){
        this.name = document.createElement("div");
        this.name.className = "circle";
        line.appendChild(this.name);
    }
}

const unknownColors = ["red", "blue", "green", "violet"];

let createLineOfCircles = () => {
    let myArrayOfCircles = [];
    
    for (let index in unknownColors){
        let myCircle = new Circles(`circle${index}`, unknownColors[index]);
        myCircle.createCircleDiv;
        myArrayOfCircles.push(myCircle);
    }
    
    return myArrayOfCircles;
}

x = createLineOfCircles();

//How Can I include the follow function as a method on the class Circles?
asignRandomColors = () => {
    let randomColors = _.shuffle(unknownColors);
    
    for (let index in unknownColors){
        x[index].name.style.backgroundColor = randomColors[index];
    }     
}

asignRandomColors();

checkColorOfCircle = index => {
    let bool = false;
    let outputColor = x[index].name.style.backgroundColor;
    if (outputColor == unknownColors[index]){
        bool = true;
    }
    return bool;
    }

checkColorOfLine = () => {
    for (index in unknownColors){
        let bool = checkColorOfCircle(index);
        if(bool == true){
            x[index].name.style.borderColor = "cyan";
        } 
    }
}

checkColorOfLine();