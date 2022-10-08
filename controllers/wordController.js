import Word from "../models/Word.js";

export const addWord = async (req, res, next) => {
    try {
        const { word,
        partOfSpeech,
        definition,
        examples,
        imageData,
        imageContentType } = req.body;
    
    
    const myWord = await new Word({
        word, 
        partOfSpeech,
        definition,
        examples, 
        image: {
            data: imageData,
            contentType: imageContentType
        }
    }).save()
        
        if (myWord) {
            console.log('success')
            res.json({
            msg: 'Your word added successfully.'
        })
    }
        
    }
    catch (error) {
        next(error)
    }


}