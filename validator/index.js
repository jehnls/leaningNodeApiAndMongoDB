exports.createPostValidator = (req, res, next) => {
    
    req.check('title', "write a title").notEmpty();
    req.check('title',"Title must be between 4 to 150 characters").isLength({
        min: 4,
        max: 150
    });

    req.check('body', "write a body").notEmpty()
    req.check('body',"Body must be between 4 to 2000 characters").isLength({
        min: 4,
        max: 150
    });
    
    // check for errors
    const errors = req.validationErrors();
    console.log(errors);

    //if error show the first one as they happer
    if(errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError});
    }

    //proceed to next middleware
    next();
};
