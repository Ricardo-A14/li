
import { allWords } from "./dictionaries";


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
    { word: 'About', pronunciation: 'abaut', definition: 'Acerca de' },
    { word: 'Advertisement', pronunciation: 'advertuaisment', definition: 'anuncio' },
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
    { word: 'Anything', pronunciation: 'eniting', definition: 'Cualquier cosa' },
    { word: 'Anywhere', pronunciation: 'eniuer', definition: 'En cualquier lugar' },
    { word: 'Appear', pronunciation: 'apir', definition: 'Aparecer' },
    { word: 'Application', pronunciation: 'aplikeichon', definition: 'Aplicación - Solicitud' },
    { word: 'Are', pronunciation: 'ar', definition: 'Son' },
    { word: 'Area', pronunciation: '', definition: 'Área' },
    { word: 'Artificial', pronunciation: 'arde-fishol', definition: 'Artificial' },
    { word: 'As', pronunciation: 'as', definition: 'Como' },
    { word: 'Abide', pronunciation: 'abaid', definition: 'cumplir' },
    { word: 'Aspect', pronunciation: 'aspect', definition: 'Aspecto' },
    { word: 'At', pronunciation: 'at', definition: 'Aspecto' },
    { word: 'Automation', pronunciation: 'oro-meichen', definition: 'Automatización' },
    { word: 'Avalanche', pronunciation: 'ava-lantsh', definition: 'Avalancha' },
    { word: 'Away', pronunciation: 'e-uey', definition: 'Lejos' },
    { word: 'Axe', pronunciation: 'aks', definition: 'Hacha' },
    { word: 'Backpack', pronunciation: 'bak-pak', definition: 'Mochila' },
    { word: 'Backup', pronunciation: 'bak-up', definition: 'Respaldo' },
    { word: 'Bandage', pronunciation: 'bendich', definition: 'Vendaje' },
    { word: 'Bread', pronunciation: 'bred', definition: 'Pan' },
    { word: 'Boxing', pronunciation: 'boxing', definition: 'Boxeo' },
    { word: 'Bear', pronunciation: 'ber', definition: 'Oso' },
    { word: 'Because', pronunciation: 'bicos', definition: 'Porque' },
    { word: 'Before', pronunciation: 'befor', definition: 'antes' },
    { word: 'Between', pronunciation: 'be-tuin', definition: 'Entre' },
    { word: 'Big', pronunciation: 'big', definition: 'Grande' },
    { word: 'Binoculars', pronunciation: 'banakiulers', definition: 'Binoculares' },
    { word: 'Boots', pronunciation: 'buts', definition: 'Botas' },
    { word: 'Bottle', pronunciation: '', definition: 'Botella' },
    { word: 'Budget', pronunciation: 'bayet', definition: 'Presupuesto' },
    { word: 'Bug net', pronunciation: 'bag-net', definition: 'Toldillo' },
    { word: 'But', pronunciation: 'bat', definition: 'Pero' },
    { word: 'By', pronunciation: 'bay', definition: 'Por - Mediante - Según - Junto a' },
    { word: 'Camera', pronunciation: '', definition: 'Cámara' },
    { word: 'Campfire', pronunciation: 'camp-faier', definition: 'Hoguera - Fogata' },
    { word: 'Coffee', pronunciation: 'cofi', definition: 'Café' },
    { word: 'Chocolate', pronunciation: '', definition: 'Chocolate' },
    { word: 'Chicken', pronunciation: 'chiken', definition: 'Pollo' },
    { word: 'Canyon', pronunciation: 'kanien', definition: 'Cañón' },
    { word: 'Car', pronunciation: 'car', definition: 'Carro' },
    { word: 'Carabiner', pronunciation: 'karabiner', definition: 'Mosquetón' },
    { word: 'Cartographer', pronunciation: 'kartagrefer', definition: 'Cartógrafo' },
    { word: 'Cartography', pronunciation: 'kartagrefi', definition: 'Cartografía' },
    { word: 'Case', pronunciation: 'kes', definition: 'Caso' },
    { word: 'Charger', pronunciation: 'charyer', definition: 'Cargador' },
    { word: 'City', pronunciation: 'siti', definition: 'Ciudad' },
    { word: 'Cliff', pronunciation: 'klif', definition: 'Acantilado' },
    { word: 'Harness', pronunciation: 'arnes', definition: 'Arnés' },
    { word: 'Helmet', pronunciation: 'elmet', definition: 'Casco' },
    { word: 'Rope', pronunciation: 'rop', definition: 'Soga' },
    { word: 'Clothes', pronunciation: 'klotz', definition: 'Ropa' },
    { word: 'Cloud', pronunciation: 'kloud', definition: 'Nube' },
    { word: 'Code', pronunciation: 'koud', definition: 'Código' },
    { word: 'Collaboration', pronunciation: 'colaboreichen', definition: 'Colaboración' },
    { word: 'Company', pronunciation: 'campani', definition: 'Compañía' },
    { word: 'Compass', pronunciation: 'kampes', definition: 'Brújula' },
    { word: 'Computer', pronunciation: 'kampiurer', definition: 'Computador' },
    { word: 'Conferece', pronunciation: 'kanfrens', definition: 'Conferencia' },
    { word: 'Container', pronunciation: 'kenteiner', definition: 'Contenedor' },
    { word: 'Content', pronunciation: 'kanten', definition: 'Contenido' },
    { word: 'Contour', pronunciation: 'kan-tor', definition: 'Contorno' },
    { word: 'Coordinates', pronunciation: 'coordenets', definition: 'Coordenadas' },
    { word: 'Cost', pronunciation: 'cost', definition: 'Costo' },
    { word: 'Course', pronunciation: 'kors', definition: 'Curso' },
    { word: 'Data', pronunciation: 'deira', definition: 'Datos' },
    { word: 'Database', pronunciation: 'dara-beis', definition: 'Base de datos' },
    { word: 'Datum', pronunciation: 'dadem', definition: 'Dato' },
    { word: 'Day', pronunciation: 'dey', definition: 'Día' },


    { word: 'Reach', pronunciation: 'ruich', definition: 'Alcanzar' },
    { word: 'Early', pronunciation: 'erly', definition: 'Temprano' },
    { word: 'Every', pronunciation: 'ebri', definition: 'Cada' },
    { word: 'Late', pronunciation: 'leit', definition: 'Tarde' },
    { word: 'Shower', pronunciation: 'shouer', definition: 'Ducha' },
    { word: 'My', pronunciation: 'may', definition: 'Mi' },
    { word: 'Breakfast', pronunciation: '', definition: 'Desayuno' },
    { word: 'Egg', pronunciation: 'eg', definition: 'Huevo' },
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
    { word: 'Soda', pronunciation: 'soda', definition: 'Gaseosa' },
    { word: 'of', pronunciation: 'of', definition: 'De' },
    { word: 'Rice', pronunciation: 'raiz', definition: 'Arroz' },
    { word: 'Until', pronunciation: 'antil', definition: 'Hasta' },
    { word: 'Train', pronunciation: 'trein', definition: 'Entrenar - Tren' },
    { word: 'Dinner', pronunciation: 'diner', definition: 'Cena' },
    { word: 'Video', pronunciation: 'vidio', definition: 'Video' },
    { word: 'Game', pronunciation: 'gueim', definition: 'Juego' },
    { word: 'Time', pronunciation: 'Taim', definition: 'Tiempo' },
    { word: 'With', pronunciation: 'uit', definition: 'Con' },
    { word: 'Without', pronunciation: 'uit-out', definition: 'Sin' },
    { word: 'Family', pronunciation: 'femly', definition: 'Familia' },
    { word: 'Friend', pronunciation: 'fren', definition: 'Amigo' },
    { word: 'Sometimes', pronunciation: 'somtaims', definition: 'A veces' },
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

    var word = 'day';
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

// FindRepeatedWords();

// console.log(`Number of words: ${findWord.length}`);


export { words };











