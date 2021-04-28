//declaring object to test
var testdata={
    name: "coruscate",
    address:
    {
        line1: "surat",
        pincode: 395006
    },
    members:
    {
        name: "mem1"
    }
}

var schema=testdata;            //declaring variable to store the schema
write_datatype(schema);
console.log(JSON.stringify(schema));



function write_datatype(obj){
    for (const item in obj) {
        if(typeof obj[item]=="object")          //making function recursive for nested objects
            write_datatype(obj[item]);
        else
            obj[item]=typeof obj[item];         //if not nested, assign datatype name as the value
    }
}