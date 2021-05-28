$(document).ready(function () {

    $('.analyzeResults').hide()
    local = localStorage;
    $('li').hover(function () {
        $(this).find('ul > li').stop().slideToggle(400); //This is the slide//You can also use the fadeToggle propertites 
    });

    // getting the key names for each item
    let keyNames = [];
    for (var name in local) {
        // we need to remove the names we don't want to display
        if (name === "length" || name === "clear" || name === "getItem" || name === "key" || name === "removeItem" || name === "setItem") {
        } else {
            keyNames.push(name);
        }
    }
    //    console.log(keyNames[3].substring(keyNames[3].indexOf(":") - 2))
    let theDate = [];
    for (i = 0; i < keyNames.length; i++) {
        theDate.push(keyNames[i].substring((keyNames[i].indexOf("/") - 2)))
    }

    var uniqueDates = [];
    $.each(theDate, function (i, el) {
        if ($.inArray(el, uniqueDates) === -1) uniqueDates.push(el);
    });

    uniqueDates.map(item => (
        $("#dateDropDown").append(
            '<li><button class="dropButton" id="' + item + '">' + item + '<button/></li>'
        )
    ))

    finalNames = [];
    for (i = 0; i < keyNames.length; i++) {
        // removing the symbol and possessive from key name and date to get the description 
        finalNames.push(keyNames[i].substring((keyNames[i].indexOf("'s ") + 3), (keyNames[i].indexOf("/") - 2)))
    }

    var uniqueMetrics = [];
    $.each(finalNames, function (i, el) {
        if ($.inArray(el, uniqueMetrics) === -1) uniqueMetrics.push(el);
    });

    uniqueMetrics.map(item => (
        $('#nameDropDown').append(
            '<li><button class="dropButton" id="' + item + '">' + item + '<button/></li>'
        )
    ));

    function allStorage(keyHolder) {
        console.log(keyHolder)

        // create values array
        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {
            if (keys[i].slice(0, keys[i].indexOf("'s ")).includes(keyHolder)) {
                // console.log(keys[i])
                values.push(localStorage.getItem(keys[i]));
            } 
            if (keys[i].substring(keys[i].indexOf(" "), (keys[i].indexOf("/") - 2)).includes(keyHolder)){
                // console.log(keys[i]);
                // console.log(keys[i].substring(keys[i].indexOf(" "), (keys[i].indexOf("/") - 2)));
                values.push(localStorage.getItem(keys[i]));
            }
            if (keys[i].substring((name.indexOf("/") - 2)).includes(keyHolder)){
                console.log(keys[i]);
                console.log(keys[i].substring((name.indexOf("/") - 2)));
                values.push(localStorage.getItem(keys[i]));
            }   
        }
        values.map(number => (
            $('#results').append(
                '<li><p>' + number + '</p></li>'
            )
        ));
    }



    symbol = []
    for (i = 0; i < keyNames.length; i++) {
        // pushing symbol name to symbol array, making sure to remove possessives and spacing
        symbol.push(keyNames[i].slice(0, keyNames[i].indexOf("'s ")));
    }

    var uniqueNames = [];
    $.each(symbol, function (i, el) {
        if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
    });

    // map and display array to a list
    uniqueNames.map(stock =>
        $('#stockDropDown').append(
            '<li><button class="dropButton" id="' + stock + '">' + stock + '<button/></li>'
        )
    )

    $(".dropButton").click(function () {
        // console.log(this.id);
        keyHolder = this.id
        $('.analyzeResults').show()
        allStorage(keyHolder);
        for (var name in local) {
            // console.log(name);
            // we need to remove the names we don't want to display
            if (name.includes(this.id)) {
                symbol = []
                symbol.push(name.slice(0, name.indexOf("'s")))
                symbol.map(stock =>
                    $('#stock').append(
                        '<li><p>' + stock + '</p></li>'
                    )
                )

                metric = []
                metric.push(name.substring(name.indexOf(" "), (name.indexOf("/") - 2)))
                metric.map(metric =>
                    $('#metric').append(
                        '<li><p>' + metric + '</p></li>'
                    ))

                dateSaved = []
                dateSaved.push(name.substring((name.indexOf("/") - 2)))
                dateSaved.map(date =>
                    $('#date').append(
                        '<li><p>' + date + '</p></li>'
                    ))

            }
        }
    });


});