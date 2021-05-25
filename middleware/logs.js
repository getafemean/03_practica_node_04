let logs = [];

exports.createLog = (req, res, next) => {
    if (req.body.nombre !== undefined) {
        logs.push({fecha: new Date(), nombre: req.body.nombre})
    } 
    console.log(logs);
    next();
}