function addCarDet(){
    const Car={
        Brand:carbrand.value,
        Key:carkey.value,
        Price:carprice.value
    }
    console.log(Car);
    if (Car.Key in localStorage) {
        alert("Given car already exist.");
    } else {
        localStorage.setItem(Car.Key,JSON.stringify(Car));
        alert("Car records added successfully.");
        addCar.reset();
    }
}

function srcCarDet(){
    searchKey=srcKey.value;
    if (searchKey in localStorage) {
    Car=JSON.parse(localStorage.getItem(searchKey));
        console.log(Car);
        result.innerHTML=`<div class="card">
        <div class="card-body">
          Brand : ${Car.Brand} <br>
          Price : ${Car.Price}
        </div>
      </div> `
    } else {
        alert("Car key does not exist.")
    }
}

function rmvCarDet(){
    removeKey=rmvKey.value;
    if (removeKey in localStorage) {
        localStorage.removeItem(removeKey);
    } else {
        alert("Car key does not exist.")
    }
}
function clearAll(){
    localStorage.clear();
}
