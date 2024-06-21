<?php
/**
 * Devuelve un array con los primeros n números primos.
 *
 * @param int $n El número de números primos a devolver.
 * @return array Un array con los primeros n números primos.
 */
function primerosNumerosPrimos($n) {
    // Aca Inicializo variables
    $primos = [];
    $contador = 0;
    $num = 2;

    // Este ciclo encuentra los primeros n números primos
    while ($contador < $n) {
        if (esPrimo($num)) {
            $primos[] = $num;
            $contador++;
        }
        $num++;
    }

    return $primos;
}

/**
 * Verifica si un número es primo.
 *
 * @param int $num El número a verificar.
 * @return bool Verdadero si el número es primo, falso en caso contrario.
 */
function esPrimo($num) {
    if ($num < 2) {
        return false;
    }
    for ($i = 2; $i <= sqrt($num); $i++) {
        if ($num % $i == 0) {
            return false;
        }
    }
    return true;
}

// Ejemplo de uso
$n = 10;
$primos = primerosNumerosPrimos($n);
echo "Los primeros $n números primos son: " . implode(', ', $primos);
?>
