$(document).ready(function () {
    // set local storage to a variable
    local = localStorage;
    let keyNames = [];

    // getting things from storage
    allStorage();
    // getting the key names for each item
    for (var name in local) {
        // we need to remove the names we don't want to display
        if (name === "length" || name === "clear" || name === "getItem" || name === "key" || name === "removeItem" || name === "setItem") {
        } else {
            keyNames.push(name);
        }
    }
    // creating remove button for each item
    keyNames.map(name => (
        $('#remove').append(
            '<p><button id="' + name + '">' + "Remove" + '</button></p>'
        )
    ))
    // deleting items from storage
    $("button").click(function () {
        console.log(this.id);
        localStorage.removeItem(this.id);
        location.reload();
    });

    
    console.log(keyNames[2].indexOf("/"));
    console.log(keyNames[2].substring((keyNames[2].indexOf("'s ") + 3), (keyNames[2].indexOf("/") - 2)))
    console.log(keyNames[2].substring((keyNames[2].indexOf("/") - 2)))
    console.log(keyNames)

    let theDate = [];

    for (i = 0; i < keyNames.length; i++) {
        theDate.push(keyNames[i].substring((keyNames[i].indexOf("/") - 2)))
        
    }
    console.log(theDate)
    theDate.map(item => (
        $("#date").append(
            '<li><p>' + item + '</p></li>'
        )
    ))


    finalNames = [];
    for (i = 0; i < keyNames.length; i++) {
        // removing the symbol and possessive from key name and date to get the description 
        finalNames.push(keyNames[i].substring((keyNames[i].indexOf("'s ") + 3), (keyNames[i].indexOf("/") - 2)))
    }
    console.log(finalNames);
    finalNames.map(item => (
        $('#name').append(
            '<p  class="name" id="' + item + '">' + item + '</p>'
        )
    ));


    function allStorage() {
        // create values array
        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {
            values.push(localStorage.getItem(keys[i]));
        }
        console.log("values" + values)

        values.map(number => (
            $('#results').append(
                '<p>' + number + '</p>'
            )
        ));
    }
    symbol = []
    for (i = 0; i < keyNames.length; i++) {
        // pushing symbol name to symbol array, making sure to remove possessives and spacing
        symbol.push(keyNames[i].slice(0, keyNames[i].indexOf("'s ")));
    }
    // map and display array to a list
    symbol.map(stock =>
        $('#stock').append(
            '<li><p id="' + stock + '">' + stock + '</p></li>'
        )
    )

    console.log(symbol);

})