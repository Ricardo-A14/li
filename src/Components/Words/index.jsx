
import './Word.css';

const Word = ({ word, index }) => {
    return (
        <div className='word_c'>
            <div className="word">
                <span>{word.word}</span>
                <span>{word.pronunciation}</span>
                <div className='meaning_word'>
                    <div className='defi'>{word.definition}</div>
                    <div className='index'>{index}</div>
                </div>
            </div>
        </div>
    )
}

export default Word;

