

$("button").click(function() {
    var $num = $("input").val();
    $(".roman").text(roman($num));  
});

function roman(num) {
    var arr = [], roman = [];
    var arr1 = [];
    var j;

    
    var rom = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX',
     10: 'X', 20: 'XX', 30: 'XXX', 40: 'XL', 50: 'L', 60: 'LX', 70: 'LXX', 80: 'LXXX', 90: 'XC', 
     100: 'C', 200: 'CC', 300: 'CCC', 400: 'CD', 500: 'D', 600: 'DC', 700: 'DCC', 800: 'DCCC', 900: 'CM', 
     1000: 'M', 2000: 'MM', 3000: 'MMM', 4000: 'MMMM', 5000: 'MMMMM', 6000: 'MMMMMM', 7000: 'MMMMMMM',
     8000: 'MMMMMMMM', 9000: 'MMMMMMMMM' };
    

    while (num > 0) {
        var i = 1;
        arr.push((num % 10) * i);
        num = Math.floor(num / 10);
        i *= 10
    }

    j = 1;
    for(i = 0; i < arr.length; i++) {
        arr1.push(arr[i]*j);
        j *= 10;
    }
    arr1.reverse();

    for(i = 0; i < arr1.length; i++) {
        for (var key in rom) {
            if( key === arr1[i]+"") {
                roman[i] = rom[key];                 
            }              
        }        
    }
    return roman.join("");
}

