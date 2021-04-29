var k=97;
for (var i = 1; i <= 4; ++i) {			//external loop for lines

    for(var j=4;j>=i;--j){			//internal loop for spaces
        process.stdout.write(" ");
    }

    for(j=0;j<i;++j){			//internal loop for printing
        process.stdout.write(String.fromCharCode(k)+i + " ");
        k++;    
    }
    console.log();
}
return 0;