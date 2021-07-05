// function as class

function Measurement(pt1, pt2) {
    this.pt1 = pt1;
    this.pt2 = pt2;
    this.distance = 0;
    this.calcDistance = function () {
        let _x1, _x2, _y1, _y2;
        _x1 = this.pt1[0];
        _y1 = this.pt1[1];
        _x2 = this.pt2[0];
        _y2 = this.pt2[1];
        let _x_diff = _x2 - _x1;
        let _y_diff = _y2 - _y1;
        this.distance = Math.sqrt(_x_diff ** 2 + _y_diff ** 2);

    }
    this.printDistance = function () {
        console.log(`Distance between ${this.pt1} and ${this.pt2} is: ${this.distance.toFixed(3)}`);
    }

}

let coordintes_1 = [5, 1];
let coordintes_2 = [4, 3];

let distance = new Measurement(coordintes_1, coordintes_2);
distance.calcDistance();
distance.printDistance();