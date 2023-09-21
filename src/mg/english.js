
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
    { word: 'At', pronunciation: 'at', definition: 'En' },
    { word: 'Automation', pronunciation: 'oro-meichen', definition: 'Automatización' },
    { word: 'Avalanche', pronunciation: 'ava-lantsh', definition: 'Avalancha' },
    { word: 'Away', pronunciation: 'e-uey', definition: 'Lejos' },
    { word: 'Axe', pronunciation: 'aks', definition: 'Hacha' },

    { word: 'Backpack', pronunciation: 'bak-pak', definition: 'Mochila' },
    { word: 'Breakfast', pronunciation: '', definition: 'Desayuno' },
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
    { word: 'characteristic', pronunciation: '', definition: 'Caracterìstica' },
    { word: 'Cartographer', pronunciation: 'kartagrefer', definition: 'Cartógrafo' },
    { word: 'Cartography', pronunciation: 'kartagrefi', definition: 'Cartografía' },
    { word: 'Case', pronunciation: 'kes', definition: 'Caso' },
    { word: 'Charger', pronunciation: 'charyer', definition: 'Cargador' },
    { word: 'City', pronunciation: 'siti', definition: 'Ciudad' },
    { word: 'Cliff', pronunciation: 'klif', definition: 'Acantilado' },
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

    { word: 'Dinner', pronunciation: 'diner', definition: 'Cena' },
    { word: 'Data', pronunciation: 'deira', definition: 'Datos' },
    { word: 'Database', pronunciation: 'dara-beis', definition: 'Base de datos' },
    { word: 'Datum', pronunciation: 'dadem', definition: 'Dato' },
    { word: 'Day', pronunciation: 'dey', definition: 'Día' },
    { word: 'Deal', pronunciation: 'dill', definition: 'Trato' },
    { word: 'Dehydration', pronunciation: 'dijai-dreichen', definition: 'Deshidratación' },
    { word: 'deployment', pronunciation: 'deploiment', definition: 'Despliegue' },
    { word: 'Desert', pronunciation: 'desert', definition: 'Desierto' },
    { word: 'Desk', pronunciation: 'desk', definition: 'Escritorio' },
    { word: 'Device', pronunciation: 'devais', definition: 'Dispositivo' },
    { word: 'Different', pronunciation: 'di-frent', definition: 'Diferente' },
    { word: 'Direction', pronunciation: '', definition: 'Dirección' },
    { word: 'Disaster', pronunciation: 'desaster', definition: 'Desastre' },
    { word: 'Down', pronunciation: 'daun', definition: 'Abajo' },

    { word: 'Earthquake', pronunciation: 'erz-cueic', definition: 'Terremoto' },
    { word: 'East', pronunciation: 'ist', definition: 'Este' },
    { word: 'Electronic', pronunciation: 'elek-tranik', definition: 'Electrónica' },
    { word: 'Elevation', pronunciation: 'eleveichen', definition: 'Elevación' },
    { word: 'Earth', pronunciation: 'Erz', definition: 'Arena' },
    { word: 'Email', pronunciation: 'imel', definition: 'Correo' },
    { word: 'Emergency', pronunciation: 'emerjensi', definition: 'Emergencia' },
    { word: 'Egg', pronunciation: 'eg', definition: 'Huevo' },
    { word: 'End', pronunciation: 'end', definition: 'Fin' },
    { word: 'Engine', pronunciation: 'enjen', definition: 'Motor' },
    { word: 'Early', pronunciation: 'erly', definition: 'Temprano' },
    { word: 'Every', pronunciation: 'ebri', definition: 'Cada' },
    { word: 'Even', pronunciation: 'iven', definition: 'Incluso' },
    { word: 'Eyes', pronunciation: 'ai', definition: 'Ojo' },

    { word: 'Fact', pronunciation: 'fakt', definition: 'Hecho' },
    { word: 'Far', pronunciation: 'far', definition: 'Lejos' },
    { word: 'Farm', pronunciation: 'farm', definition: 'Granja' },
    { word: 'Few', pronunciation: 'fiu', definition: 'Pocos' },
    { word: 'feature', pronunciation: 'ficher', definition: 'caracterìstica' },
    { word: 'Fire', pronunciation: 'faier', definition: 'Fuego' },
    { word: 'Firewall', pronunciation: 'faier-wol', definition: 'Cortafuegos' },
    { word: 'First', pronunciation: 'ferst', definition: 'Primero' },
    { word: 'First aid', pronunciation: 'ferst-eid', definition: 'Primeros auxilios' },
    { word: 'First-aid kit', pronunciation: 'ferst-eid kit', definition: 'Kit de primeros auxilios' },
    { word: 'Fish', pronunciation: 'fich', definition: 'Pez' },
    { word: 'Fishing bait', pronunciation: 'fiching beit', definition: 'Cebo de pesca' },
    { word: 'Flares', pronunciation: 'flers', definition: 'Bengalas' },
    { word: 'Flashlight', pronunciation: 'flach-lait', definition: 'Linterna' },
    { word: 'Flood', pronunciation: 'flod', definition: 'Inundación' },
    { word: 'Food', pronunciation: 'fud', definition: 'Comida' },
    { word: 'For', pronunciation: 'for', definition: 'Por' },
    { word: 'Forage', pronunciation: 'for-ech', definition: 'Forraje' },
    { word: 'Forecast', pronunciation: 'for-kast', definition: 'Pronóstico' },
    { word: 'Four', pronunciation: 'for', definition: 'Cuatro' },
    { word: 'Friend', pronunciation: 'fren', definition: 'Amigo' },
    { word: 'From', pronunciation: 'from', definition: 'De - Desde' },
    { word: 'Food', pronunciation: 'Fud', definition: 'Comida' },
    { word: 'Family', pronunciation: 'femly', definition: 'Familia' },



    { word: 'Game', pronunciation: 'gueim', definition: 'Juego' },
    { word: 'Gear', pronunciation: 'guir', definition: 'Engranaje' },
    { word: 'geographer', pronunciation: 'yia-grefer', definition: 'Geógrafo' },
    { word: 'geographic', pronunciation: 'yio-grafic', definition: 'Gegráfico' },
    { word: 'geography', pronunciation: 'yia-grefi', definition: 'Geografía' },
    { word: 'geologic', pronunciation: 'yio-loyic', definition: 'Geológico' },
    { word: 'geology', pronunciation: 'yia-leyi', definition: '' },
    { word: 'Glacier', pronunciation: 'glei-cher', definition: 'Glaciar' },
    { word: 'Gloves', pronunciation: 'globs', definition: 'Guantes' },
    { word: 'Good', pronunciation: 'gud', definition: 'Bien - Bueno' },
    { word: 'government', pronunciation: 'gaverment', definition: 'Gobierno' },
    { word: 'Great', pronunciation: 'greit', definition: 'Excelente' },
    { word: 'Grid', pronunciation: 'gred', definition: 'Red - Cuadrícula' },




    { word: 'Height', pronunciation: 'jait', definition: 'Altura' },
    { word: 'Harness', pronunciation: 'arnes', definition: 'Arnés' },
    { word: 'Hook', pronunciation: 'jok', definition: 'Gancho' },
    { word: 'Helmet', pronunciation: 'elmet', definition: 'Casco' },

    { word: 'In', pronunciation: 'in', definition: 'En' },

    { word: 'Juice', pronunciation: '', definition: 'Jugo' },

    { word: 'Kookie', pronunciation: 'kuki', definition: 'Galleta' },

    { word: 'Late', pronunciation: 'leit', definition: 'Tarde' },
    { word: 'Lighter', pronunciation: 'lairer', definition: 'Encendedor' },
    { word: 'Line', pronunciation: 'lain', definition: 'Línea' },
    { word: 'Lunch', pronunciation: 'lanch', definition: 'Almuerzo' },

    { word: 'My', pronunciation: 'may', definition: 'Mi' },
    { word: 'Mistake', pronunciation: 'mesteik', definition: 'Error' },
    { word: 'Meat', pronunciation: 'mit', definition: 'Carne' },
    { word: 'Meeting', pronunciation: 'mit', definition: 'Carne' },

    { word: 'Night', pronunciation: 'nait', definition: 'Noche' },

    { word: 'Orange', pronunciation: 'oranch', definition: 'Naranja' },
    { word: 'of', pronunciation: 'of', definition: 'De' },
    { word: 'On', pronunciation: 'an', definition: 'En' },

    { word: 'Reach', pronunciation: 'ruich', definition: 'Alcanzar' },
    { word: 'Response', pronunciation: 'ris-pans', definition: 'Respuesta' },
    { word: 'Rice', pronunciation: 'raiz', definition: 'Arroz' },
    { word: 'Rope', pronunciation: 'rop', definition: 'Soga' },

    { word: 'Sometimes', pronunciation: 'somtaims', definition: 'A veces' },
    { word: 'Shower', pronunciation: 'shouer', definition: 'Ducha' },
    { word: 'Study', pronunciation: '', definition: 'Estudiar' },
    { word: 'Soda', pronunciation: 'soda', definition: 'Gaseosa' },

    { word: 'To', pronunciation: 'tu', definition: '' },
    { word: 'Train', pronunciation: 'trein', definition: 'Entrenar - Tren' },
    { word: 'Time', pronunciation: 'Taim', definition: 'Tiempo' },

    { word: 'Until', pronunciation: 'antil', definition: 'Hasta' },

    { word: 'Video', pronunciation: 'vidio', definition: 'Video' },

    { word: 'With', pronunciation: 'uit', definition: 'Con' },
    { word: 'Without', pronunciation: 'uit-out', definition: 'Sin' },


];

const regularVerbs = [];
const irregularVerbs = [];
const phrasalVerbs = [];


const findWord = words.map((element) => {
    return element.word.toLowerCase();
})

const FindRepeatedWords = () => {

    var word = 'characteristic';
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

// console.log(`Number of words: ${findWord.length}`);


export { words };











