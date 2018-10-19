<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app = new \Slim\App;

//GET suma
$app->get('/api/sumar/{num1}/{num2}', function(Request $request, Response $response, array $args){
    $resultado = $args['num1'] + $args['num2'];
    $response->getBody()->write("Resultado Suma, $resultado");

    return $response;
});

$app->get('/api/restar/{num1}/{num2}', function (Request $request, Response $response, array $args) {
    $resultado = $args['num1'] - $args['num2'];
    $response->getBody()->write("Resultado Suma, $resultado");

    return $response;
});

$app->get('/api/multiplicar/{num1}/{num2}', function (Request $request, Response $response, array $args) {
    $resultado = $args['num1'] * $args['num2'];
    $response->getBody()->write("Resultado Suma, $resultado");

    return $response;
});

$app->get('/api/dividir/{num1}/{num2}', function (Request $request, Response $response, array $args) {
    $resultado = $args['num1'] / $args['num2'];
    $response->getBody()->write("Resultado Suma, $resultado");

    return $response;
});