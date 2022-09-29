export const errorLogger = (error, req, res, next) => {
    console.error(error);
    next(error);
}

export const errorResponder = (error, req, res, next) => {
    // duplicate key
    if (error.code === 11000) { 
        res
            .status(400)
            .json({
                msg: 'this username is already taken',
                errorType: 'username'
            });
        return;
    }
  
    
    next(error)


}