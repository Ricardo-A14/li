
import allWords from "./dictionaries";


const words = [
    { word: 'I', pronunciation: 'ai', definition: 'Yo' },
    { word: 'You', pronunciation: 'iú', definition: 'Tú' },
    { word: 'He', pronunciation: 'ji', definition: 'Él' },
    { word: 'She', pronunciation: 'shi', definition: 'Ella' },
    { word: 'We', pronunciation: 'uí', definition: 'Nosotros' },
    { word: 'They', pronunciation: 'Dei', definition: 'Ellos' },
    { word: 'Them', pronunciation: 'dem', definition: 'Ellos' },
    { word: 'Him', pronunciation: 'him', definition: 'Él' },
    { word: 'Her', pronunciation: 'ger', definition: 'Ella' },
    { word: 'Then', pronunciation: 'den', definition: 'Entonces' },
    { word: 'Act', pronunciation: 'act', definition: 'Actuar' },
    { word: 'Add', pronunciation: 'ad', definition: 'Agregar' },
    { word: 'About', pronunciation: 'abaut', definition: 'Acerca de' },
    { word: 'Admire', pronunciation: 'edmaier', definition: 'Admirar' },
    { word: 'Admite', pronunciation: 'edmit', definition: 'Admitir' },
    { word: 'Advertisement', pronunciation: 'advertuaisment', definition: 'anuncio' },
    { word: 'Advise', pronunciation: 'edvais', definition: 'Aconsejar' },
    { word: 'Accept', pronunciation: 'aksept', definition: 'Aceptar' },
    { word: 'Access', pronunciation: 'akses', definition: 'Acceso' },
    { word: 'Aerial', pronunciation: 'er-ial', definition: 'Aéreo' },
    { word: 'After', pronunciation: 'after', definition: 'Despues' },
    { word: 'Agile', pronunciation: 'ayol', definition: 'Ágil' },
    { word: 'A', pronunciation: 'a', definition: 'un - uno - una' },
    { word: 'An', pronunciation: 'an', definition: 'un - uno - una' },
    { word: 'And', pronunciation: '', definition: 'Y' },
    { word: 'Again', pronunciation: 'eguen', definition: 'Otra vez' },
    { word: 'Against', pronunciation: 'eguenst', definition: 'En contra' },
    { word: 'Agreement', pronunciation: 'agriment', definition: 'Acuerdo' },
    { word: 'Aim', pronunciation: 'em', definition: 'Apuntar' },
    { word: 'Air', pronunciation: 'er', definition: 'Aire' },
    { word: 'Algorithm', pronunciation: 'algridem', definition: 'Algoritmo' },
    { word: 'All', pronunciation: 'oll', definition: 'Todo - todos' },
    { word: 'Allergy', pronunciation: 'aleryi', definition: 'Alergia' },
    { word: 'Allow', pronunciation: 'alau', definition: 'Permitir' },
    { word: 'Also', pronunciation: 'olso', definition: 'También' },
    { word: 'Although', pronunciation: 'oldo', definition: 'Aunque' },
    { word: 'Always', pronunciation: 'olwis', definition: 'Siempre' },
    { word: 'America', pronunciation: 'america', definition: 'America' },
    { word: 'Ammunition', pronunciation: 'emiunichen', definition: 'Munición' },
    { word: 'Analgesic', pronunciation: 'enal-yisik', definition: 'Analgésico' },
    { word: 'Analysis', pronunciation: 'enalisis', definition: 'Análisis' },
    { word: 'Analytics', pronunciation: 'enalidiks', definition: 'Análitica' },
    { word: 'Animal', pronunciation: 'enemel', definition: 'Animal' },
    { word: 'Answer', pronunciation: 'enser', definition: 'Respuesta' },
    { word: 'Antiseptic', pronunciation: 'entiseptik', definition: 'Antiséptico' },
    { word: 'Any', pronunciation: 'eny', definition: 'Cualquier' },
    { word: 'Anyone', pronunciation: 'eni-uan', definition: 'Alguien' },


    { word: 'Day', pronunciation: 'dey', definition: 'Día' },
    { word: 'Reach', pronunciation: 'ruich', definition: 'Alcanzar' },
    { word: 'Early', pronunciation: 'erly', definition: 'Temprano' },
    { word: 'Every', pronunciation: 'ebri', definition: 'Cada' },
    { word: 'Late', pronunciation: 'leit', definition: 'Tarde' },
    { word: 'Abide', pronunciation: 'abaid', definition: 'cumplir' },
    { word: 'Shower', pronunciation: 'shouer', definition: 'Ducha' },
    { word: 'My', pronunciation: 'may', definition: 'Mi' },
    { word: 'Breakfast', pronunciation: '', definition: 'Desayuno' },
    { word: 'Egg', pronunciation: 'eg', definition: 'Huevo' },
    { word: 'Coffee', pronunciation: 'cofi', definition: 'Café' },
    { word: 'Chocolate', pronunciation: '', definition: 'Chocolate' },
    { word: 'Bread', pronunciation: 'bred', definition: 'Pan' },
    { word: 'Orange', pronunciation: 'oranch', definition: 'Naranja' },
    { word: 'Juice', pronunciation: '', definition: 'Jugo' },
    { word: 'Kookie', pronunciation: 'kuki', definition: 'Galleta' },
    { word: 'Study', pronunciation: '', definition: 'Estudiar' },
    { word: 'From', pronunciation: 'from', definition: 'De - Desde' },
    { word: 'To', pronunciation: 'tu', definition: '' },
    { word: 'Lunch', pronunciation: 'lanch', definition: 'Almuerzo' },
    { word: 'Food', pronunciation: 'Fud', definition: 'Comida' },
    { word: 'Meat', pronunciation: 'mit', definition: 'Carne' },
    { word: 'Fish', pronunciation: 'fish', definition: 'Pez' },
    { word: 'Chicken', pronunciation: 'chiken', definition: 'Pollo' },
    { word: 'Soda', pronunciation: 'soda', definition: 'Gaseosa' },
    { word: 'of', pronunciation: 'of', definition: 'De' },
    { word: 'Rice', pronunciation: 'raiz', definition: 'Arroz' },
    { word: 'Until', pronunciation: 'antil', definition: 'Hasta' },
    { word: 'Train', pronunciation: 'trein', definition: 'Entrenar - Tren' },
    { word: 'Boxing', pronunciation: 'boxing', definition: 'Boxeo' },
    { word: 'Climb', pronunciation: 'claim', definition: 'Escalar' },
    { word: 'Dinner', pronunciation: 'diner', definition: 'Cena' },
    { word: 'Video', pronunciation: 'vidio', definition: 'Video' },
    { word: 'Game', pronunciation: 'gueim', definition: 'Juego' },
    { word: 'Time', pronunciation: 'Taim', definition: 'Tiempo' },
    { word: 'With', pronunciation: 'uit', definition: 'Con' },
    { word: 'Without', pronunciation: 'uit-out', definition: 'Sin' },
    { word: 'Family', pronunciation: 'femly', definition: 'Familia' },
    { word: 'Friend', pronunciation: 'fren', definition: 'Amigo' },
    { word: 'Sometimes', pronunciation: 'somtaims', definition: 'A veces' },
    { word: 'Camp', pronunciation: 'camp', definition: 'Acampar - campamento - campo' },
    { word: 'On', pronunciation: 'an', definition: 'En' },
    { word: 'In', pronunciation: 'in', definition: 'En' },
    { word: 'Night', pronunciation: 'nait', definition: 'Noche' },


];

const regularVerbs = [];
const irregularVerbs = [];
const phrasalVerbs = [];


const findWord = words.map((element) => {
    return element.word.toLowerCase();
})

const FindRepeatedWords = () => {

    var word = 'and';
    let repeatedPosition;

    const repeatedWord = findWord.filter((element) => {
        return element === word.toLowerCase();
    });

    console.log(repeatedWord);

    if (repeatedWord.length > 1) {
        repeatedPosition = findWord.indexOf(word)
    } else {
        repeatedPosition = null;
    }
    console.log(`¿Does the word exist? ${findWord.includes(word)}`);

    console.log(`Repeated position: ${repeatedPosition}`);
}

FindRepeatedWords();

console.log(`Number of words: ${findWord.length}`);


export { words };











