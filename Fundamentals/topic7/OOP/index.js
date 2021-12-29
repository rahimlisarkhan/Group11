
class Car{
    #make;
    model;

    constructor(make,model){
        this._make = make
        this.model = model
    }

    _goster(){
        console.log(this._make,this.model);
    }

    getMake(){
        return this._make;
    }

    setMake(letter){

        if (letter !== "bmw" || typeof letter !== "string"){
            alert('dsdsdds')
            return
        }

        this._make = letter

    }
}


class GermanyCar extends Car{

    constructor(germanMake,germanModel){
        super()
        this._make = germanMake
        this.model = germanModel
    }
}


var kolnCar = new GermanyCar("Mercedes","E200")

kolnCar.setMake('dsdsdssdsdsds')

