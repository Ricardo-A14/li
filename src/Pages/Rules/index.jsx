import "./Rules.css";

const Rules = () => {
  return (
    <div className="rules">
      <div className="rule_container noun">
        <h1>Sustantivo</h1>
        <p>
          Son palabras que nombran a personas, animales, cosas, lugares,
          sentimientos e ideas, ejemplo:
        </p>
        <ul>
          <li>
            <span>-</span> El rey, donde <span>rey</span> es el sustantivo al
            cual podemos asignarle los articulos <span>el, un</span>: un rey /
            el rey.
          </li>
          <li>
            <span>-</span> Las sillas, donde <span>sillas</span> es el
            sustantivo y <span>las</span> un articulo.
          </li>
        </ul>
      </div>

      <div className="rule_container article">
        <h1>Artículo</h1>
        <p>Palabra que anuncia la presencia de un sustantivo, ejemplo:</p>
        <ul>
          <li>
            <span>-</span> El auto, donde <span>auto</span> es el sustantivo que
            va acompañado por el artículo <span>el</span>.
          </li>
        </ul>
        <h2>Artículos definidos</h2>
        <ul>
          <li>
            <span>-</span> El, la, los, las.
          </li>
        </ul>
        <h2>Artículos indefinidos</h2>
        <ul>
          <li>
            <span>-</span> Un, una, unos, unas.
          </li>
        </ul>
      </div>

      <div className="rule_container adjective">
        <h1>Adjetivo</h1>
        <p>
          Palabra que acompaña a un sustantivo y describe una cualidad o estado,
          ejemplo:
        </p>
        <ul>
          <li>
            <span>-</span> El auto rojo, donde <span>rojo</span> es el adjetivo.
          </li>
        </ul>
        <ul>
          <li>
            el = artículo <br />
            auto = sustantivo <br />
            rojo = <span>adjetivo</span>
          </li>
        </ul>
        <p>El adjetivo concuerda en género y número con el sustantivo:</p>
        <ul>
          <li>
            <span>-</span> Avión amarillo.
          </li>
        </ul>
      </div>

      <div className="rule_container preposition">
        <h1>Preposición</h1>
        <p>
          Son palabras que unen o relacionan palabras o grupos de palabras,
          ejemplo:
        </p>
        <ul>
          <li>
            <span>-</span> la vela está en la mesa, donde <span>en</span> es la
            preposicíon.
          </li>
        </ul>
        <ul>
          <li>
            la = artículo <br />
            vela = sustantivo <br />
            está = verbo <br />
            en = <span>PREPOSOCÍON</span> <br />
            la = artículo
            <br />
            mesa = sustantivo
            <br />
          </li>
        </ul>
        <p>Otras preposiciones son:</p>
        <ul>
          <li>
            <span>-</span> A, ante, bajo, cabe, con, contra, de, desde, durante,
            en, entre, hacia, hasta, mediante, para, por, según, sin, sobre,
            tras, versus.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rules;
