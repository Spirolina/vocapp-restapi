export const errorLogger = (error, req, res, next) => {
    console.error(error);
    next(error);
}

export const errorResponder = (error, req, res, next) => {
    if (error.type = 'not-found')
        res
            .status(404)
            .json({
                msg: 'not found'
            })
    else
        next(error);

}