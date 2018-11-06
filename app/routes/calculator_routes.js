module.exports = function(app) {
    app.get(/^\/sum\/(.+)/, (req, res) => {
        var result = 0;
        var numbersArray = req.params[0].split("/")
        for (var current in numbersArray) {
            result = result + Number(numbersArray[current])
        }
        res.send(`Result: ${result}`)
    });

    app.get('/res/:num1/:num2', (req, res) => {
        const num1 = req.params.num1;
        const num2 = req.params.num2;
        var result = num1 - num2
        res.send(`Result: ${result}`)
    });

    app.get(/^\/mul\/(.+)/, (req, res) => {
        var result = 1;
        var numbersArray = req.params[0].split("/").filter(val => val)
        for (var current in numbersArray) {
            result = result * Number(numbersArray[current])
        }
        res.send(`Result: ${result}`)
    });

    app.get('/div/:num1/:num2', (req, res) => {
        const num1 = req.params.num1;
        const num2 = req.params.num2;
        var result = num1 / num2
        res.send(`Result: ${result}`)
    });
};