import Word from "../models/Word.js";
import User from '../models/User.js'

export const addWord = async (req, res, next) => {
    const _id = req.user._id;
    try {
        const { word,
        partOfSpeech,
        definition,
        examples,
        imageUri,
        } = req.body;

        const myWord = await new Word({
            word,
            partOfSpeech,
            definition,
            examples,
            imageUri
        }).save();

        if (myWord) {
          const result = await User.findOneAndUpdate({ _id, },
                {
                $push: {words: myWord}
              })
            
            if (!result) {
                res
                    .status(400)
                    .json({
                        msg: 'Word did not added!'
                    })
                return;
            }
            
            
            res.json({
            msg: 'Your word added successfully.'
        })
        };
    }
    catch (error) {
        next(error)
    };
}

export const getWords = async (req, res, next) => {
    try {
        const _id = req.user._id;
        const user = await User.findById(_id, { words: 1 })
            .populate('words');
        const userWords = user.words;
        if (!userWords) {
            res.json({
                msg: 'there is no word!'
            })
            return;
        }

        res.json({
            words: userWords
        })
    } catch (error) {
        next(error);
    }
}

export const deleteWord = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await Word.deleteOne({ _id: id });
        if (!result.deletedCount) {
            res.
                status(404)
                .json({ msg: 'Word is not found!' })
            return;
        }

        res
        .json({ msg: 'Word deleted successfully!' });

    } catch (err) {
        next(err);
    }
}