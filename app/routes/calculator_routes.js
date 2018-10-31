module.exports = function(app) {
    app.get('/sum/:num1/:num2', (req, res) => {
        const num1 = req.params.num1;
        const num2 = req.params.num2;
        var result = num1 * num2
        res.send(`Result: ${result}`)
    });

    app.get('/res/:num1/:num2', (req, res) => {
        const num1 = req.params.num1;
        const num2 = req.params.num2;
        var result = num1 - num2
        res.send(`Result: ${result}`)
    });

    app.get('/mul/:num1/:num2', (req, res) => {
        const num1 = req.params.num1;
        const num2 = req.params.num2;
        var result = num1 * num2
        res.send(`Result: ${result}`)
    });

    app.get('/div/:num1/:num2', (req, res) => {
        const num1 = req.params.num1;
        const num2 = req.params.num2;
        var result = num1 / num2
        res.send(`Result: ${result}`)
    });
};