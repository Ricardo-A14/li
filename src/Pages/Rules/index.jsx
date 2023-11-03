import "./Rules.css";

const Rules = () => {
  return (
    <div className="rules">

      <div className="rule_container verbs">
        <h1>Verbos</h1>
        <p>
          Son palabras que describen una acción, ejemplo: Caminar, Aprender.
        </p>
        <ul>
          <li>
            <span>-</span> Me gusta <span>nadar </span>, donde <span>nadar</span> es el verbo.
          </li>
        </ul>
      </div>

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

      <div className="rule_container adverb">
        <h1>Adverbios</h1>
        <p>
          Son palabras que no varían en género y número, son invariables y
          complementan el significado de otras palabras, ejemplo:
        </p>

        <ul>
          <li>
            <span>-</span> Voy mañana, donde <span>mañana</span> no varía en
            género (mañano) ni en número (mañanas).
          </li>
          <li>
            <span>-</span> Muy bien, donde <span>muy</span> no varía en genero
            (muya) ni en número (muys).
          </li>
        </ul>

        <h2>Adverbios de lugar</h2>

        <ul>
          <li>
            <span>-</span> Aquí, allí, ahí, allá, arriba, abajo, cerca, lejos,
            dentro, fuera, delante, alrededor.
          </li>
        </ul>

        <h2>Adverbios de tiempo</h2>

        <ul>
          <li>
            <span>-</span> Hoy, luego, ahora, despues, ayer, mañana, entonces,
            ahora, antes, tarde, pronto.
          </li>
        </ul>

        <h2>Adverbios de modo</h2>

        <ul>
          <li>
            <span>-</span> Bien, mal, así, despacio, deprisa, gratis.
          </li>
        </ul>

        <h2>Adverbios de cantidad</h2>

        <ul>
          <li>
            <span>-</span> Mucho, poco, bastante, más, menos, muy, demasiado,
            casi, medio, nada, algo.
          </li>
        </ul>

        <h2>Adverbios de afirmación</h2>

        <ul>
          <li>
            <span>-</span> Sí, claro, ciertamente, también, cierto,
            efectivamente.
          </li>
        </ul>

        <h2>Adverbios de negación</h2>

        <ul>
          <li>
            <span>-</span> No, tampoco, nunca, jamas.
          </li>
        </ul>

        <h2>Adverbios de duda</h2>

        <ul>
          <li>
            <span>-</span> Quizás, tal vez, acaso, probablemente.
          </li>
        </ul>
      </div>

      <div className="rule_container conjunction">
        <h1>Conjunciones</h1>
        <p>
          Son palabras que unen palabras o grupos de palabras que expresan ideas
          semejantes, ejemplo:
        </p>
        <ul>
          <li>
            <span>-</span> Rey y reina, donde <span>y</span> es la conjunción.
          </li>
          <li>
            Rey = sustantivo <br />
            y = CONJUNCIÓN <br />
            reina = sustantivo
          </li>
        </ul>

        <h2>Copulativas</h2>
        <ul>
          <li>
            <span>-</span> y, e, ni.
          </li>
        </ul>

        <h2>Disyuntivas</h2>
        <ul>
          <li>
            <span>-</span> o, u.
          </li>
        </ul>

        <h2>Adversativas</h2>
        <ul>
          <li>
            <span>-</span> pero, sino.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rules;
