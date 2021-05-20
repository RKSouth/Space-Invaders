$(document).ready(function () {
    local = localStorage;

    let keyNames = [];

    allStorage()
    for (var name in local) {
        console.log(name);

        if (name === "length" || name === "clear" || name === "getItem" || name === "key" || name === "removeItem" || name === "setItem") {
        } else {
            keyNames.push(name);
        }
    }

    console.log(keyNames[2].indexOf("'s "));
    console.log(keyNames[2].substring( (keyNames[2].indexOf("'s ") + 3) ))
    console.log(keyNames)

    finalNames = [];
    for (i=0; i<keyNames.length; i++){
        finalNames.push(keyNames[i].substring( (keyNames[i].indexOf("'s ") + 3) ))
    }
    console.log(finalNames);

    finalNames.map(item => (
        $('#name').append(
            '<p">' + item + '</p>'
        )

    ));
    function allStorage() {


        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;


        while (i--) {
            values.push(localStorage.getItem(keys[i]));
        }
        console.log("values" + values)

        // console.log(data);
        // console.log(name);
        // $('#savedResults').append(  '<table>' );
        values.map(number => (
            $('#results').append(
                '<p>' + number + '</p>'
            )
        ));
    }
    symbol = []
    for (i = 0; i < keyNames.length; i++) {
        // console.log(keyNames[i]);
        // console.log(keyNames[i].indexOf("'s "));
        symbol.push(keyNames[i].slice(0,keyNames[i].indexOf("'s ")));
    }
    symbol.map(stock =>
        $('#stock').append(
            '<p>' + stock + '</p>'
        )
    )

    console.log(symbol);
})