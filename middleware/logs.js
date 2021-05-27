let logs = [];

exports.createLog = (req, res, next) => {
    if (req.body.role !== undefined && req.body.user !== undefined) {
        logs.push({
            fecha: new Date(), 
            user: req.body.user,
            role: req.body.role
        })
    } 
    console.log(logs);
    next();
}