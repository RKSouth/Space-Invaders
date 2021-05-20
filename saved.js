$(document).ready(function() {
    local = localStorage;

let keyNames = [];

allStorage()
for (var name in local) {
    console.log(name);
    
  
    if(name === "length" || name === "clear" || name === "getItem" || name === "key" || name === "removeItem" || name === "setItem") { 
        
    } else {
        keyNames.push(name);
    }

}

console.log(keyNames)

keyNames.map(item => (
        

    $('#name').append( 
        // '<table>'+ '<tr id="savedTable">'+ 
// '<td id="key">' + key + '</td>' + 
'<p">' + item + '</p>'
//  + '</tr>' + '</table>'
 )

));
function allStorage() {


var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;
        

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
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

})