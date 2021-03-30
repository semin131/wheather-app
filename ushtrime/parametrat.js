// ARROW FUNCTION

const hello = (name = "user", surname) => {
    console.log("Hello" + name)
}

const login = (name = "admin", password = "admin") => {
    var emri = document.getElementById('username').value
    var passwordi = document.getElementById('password')
    var success = document.getElementById('success')

    if (emri == "admin" && passwordi == "admin") {
        success.innerHTML = "You are in"
    }
    else {
        success.innerHTML = "Incorret password"
    }
    console.log(emri)
}

const change_password = (password = "admin") => {
    // merrne inputin
    // merrne divin

    // kushtin
}

hello('Vardona')

const products = {
    name: "Notebook",
    price: 3,
    stock: 200
}

const transation = (type, { name, price, stock }) => {
    console.log("Type:", type, "Name:", name, "Price", price, "Stock", stock)
}

transation('order', products)