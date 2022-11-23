<?php

function intToRoman($x){
    $x = intval($x);
    $hasil = '';
    $array = array(
        array('M', 1000),
        array('CM', 900),
        array('D', 500),
        array('CD', 400),
        array('C', 100),
        array('XC', 90),
        array('L', 50),
        array('XL', 40),
        array('X', 10),
        array('IX', 9),
        array('V', 5),
        array('IV', 4),
        array('I', 1)
    );

    for ($i = 0; $i <= 12; $i++){
        $temp = intval($x/$array[$i][1]);
        for($j = 0; $j < $temp; $j++){
            $hasil .= $array[$i][0];
        }
        $x %= $array[$i][1];
    }
 
    return $hasil;
}

echo intToRoman(58);
echo '<br>';
echo intToRoman(1994);

?>