// callback
function message(callback) {
    console.log("First msg")
}

function api(callback2) {
    let url = "https://fakestoreapi.com/products"
    fetch(url)

        .then(Response => Response.json())

        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log("error", error)
        });
}
function api2(callback3) {
    let url2 = "https://api.escuelajs.co/api/v1/products"
    fetch(url2)

        .then(Response => Response.json())

        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log("error", error)
        });
}
message(api(api2()));