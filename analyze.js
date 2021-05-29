$(document).ready(function () {
    $("#reset").click(function () { 
        location.reload();
    })
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
// ------------------------------------Building Drop Down Menus -----------------------------------------

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
            '<li><button class="dateButton" id="' + item + '">' + item + '<button/></li>'
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
            '<li><button class="metricButton" id="' + item + '">' + item + '<button/></li>'
        )
    ));

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
            '<li><button class="stockButton" id="' + stock + '">' + stock + '<button/></li>'
        )
    )
//  ---------------------------- Getting the Data For Each Drop Down ------------------------------
    function dateStorage(keyHolder) {
        console.log(keyHolder)

        // create values array
        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {
            if (keys[i].substring((name.indexOf("/") - 2)).includes(keyHolder)){
                console.log(keys[i]);
                console.log(keys[i].substring((name.indexOf("/") - 2)));
                values.push(localStorage.getItem(keys[i]));
                console.log("date values pushed");
            }   
        }
        console.log(values)
        values.map(number => (
            $('#results').append(
                '<li><p>' + number + '</p></li>'
            )
        ));
    }

    function metricStorage(keyHolder) {
        console.log(keyHolder)

        // create values array
        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {
  
            if (keys[i].substring(keys[i].indexOf(" "), (keys[i].indexOf("/") - 2)).includes(keyHolder)){
                values.push(localStorage.getItem(keys[i]));
                console.log("metrics pushed")
            }
            
        }
        values.map(number => (
            $('#results').append(
                '<li><p>' + number + '</p></li>'
            )
        ));
    }

    function stockStorage(keyHolder) {
        console.log(keyHolder)

        // create values array
        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {
            if (keys[i].slice(0, keys[i].indexOf("'s ")).includes(keyHolder)) {
                // console.log(keys[i])
                values.push(localStorage.getItem(keys[i]));
                console.log("symbol values pushed")
            } 
           
        }
        console.log(values)
        values.map(number => (
            $('#results').append(
                '<li><p>' + number + '</p></li>'
            )
        ));
    }
   
    function tableBuilder(keyHolder) {
        console.log(keyHolder + "was passed through tableBuilder")
          for (var name in local) {
            // console.log(name);
            // we need to remove the names we don't want to display
            if (name.includes(keyHolder)) {
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
    }

    $(".dateButton").click(function () {
        // console.log(this.id);
        keyHolder = this.id
        $('.analyzeResults').show()
        dateStorage(keyHolder);
        tableBuilder(keyHolder)
    });

    $(".stockButton").click(function () {
        // console.log(this.id);
        keyHolder = this.id
        $('.analyzeResults').show()
        stockStorage(keyHolder);
        tableBuilder(keyHolder);

    });

    $(".metricButton").click(function () {
        // console.log(this.id);
        keyHolder = this.id
        $('.analyzeResults').show()
        metricStorage(keyHolder);
        tableBuilder(keyHolder);

    });




});