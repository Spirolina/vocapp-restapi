import User from '../models/User.js'
import { genPassword, issueJwt, validPassword } from '../modules/AuthModule.js';

export const register = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const { salt, hash } = genPassword(password);
        
        const user = await new User({
            username,
            salt,
            hash
        }).save()

        if (user) {
            const token = issueJwt(user);
            const payload = {
                username: user.username,
                _id: user._id
            }
            res.json({
                msg: 'succesfully created',
                payload,
                token,
            })
        }
        
    } catch (err) {
        next(err);
    }
}

export const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username }, { salt: 1, hash: 1 }
        );
        
        if (!user) {
            res
                .status(404)
                .json({
                    msg: 'user not found!',
                    errorType: 'username'
                });
            return;
        }
        
        const { hash, salt } = user;
        const valid = validPassword(password, hash, salt);

        if (!valid) {
            res
                .status(401)
                .json({
                    msg: 'your password is wrong!',
                    errorType: 'password'
                })
            return;
        }

        const payload = {
            username: user.username,
            _id: user._id
        }
        const token = issueJwt(user);
        res.json({
            msg: 'succesfully logged in',
            payload,
            token,
        });

    } catch (error) {
        next(error);
    }
};