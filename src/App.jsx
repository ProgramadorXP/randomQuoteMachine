import "./app.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faTumblr, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useFetch } from "./useFetch";
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState({
    quote: "Life isn't about getting and having, it's about giving and being.",
    author: "Kevin Kruse",
  });
  const [color, setColor] = useState("");
  var colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  const { quotes } = useFetch(
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
  );

  const clickButton = () => {
    getQuote();
  };
  const getQuote = () => {
    //GUARDAMOS QUOTE EN UNA VARIABLE LOCAL
    let select = getRandomQuote();
    //GUARDAMOS VALORES EN LOS ESTADOS
    setQuote(select);
    setColor(Math.floor(Math.random() * colors.length));
  };
  const getRandomQuote = () => {
    /*OBTENEMOS UN QUOTE DEL ARREGLO DE QUOTES AL AZAR CON EL METODO RANDOM Y HACEMOS PISO(REDONDEAR) CON ESE VALOR POR SI ES DECIMAL
    Y RETORNAMOS EL VALOR PARA PASARLO A LA FUNCION getQuote*/
    return quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)];
  };

  return (
    <div
      className="root"
      style={{backgroundColor: colors[color], color: colors[color]}}
    >
      <div id="quote-box" className="quote-box">
        <div className="quote-text">
          <p className="quote-box__text" id="text">
            <span className="quote-box__icon">
              <FontAwesomeIcon icon={faQuoteLeft} />
            </span>
            {quote.quote}
          </p>
        </div>
        <div className="author-box">
          <p id="author">- {quote.author}</p>
        </div>
        <div className="buttons-box">
          <div className="button-left">
            <a
              style={{ backgroundColor: colors[color]}}
              id="tweet-quote"
              href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
              encodeURIComponent('"' + quote.quote + '" ' + quote.author)}
              target="_blank"
              className="button-left__link"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              style={{ backgroundColor: colors[color] }}
              id="tumblr-quote"
              href={"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" + encodeURIComponent(quote.author) + "&content=" +
              encodeURIComponent(quote.quote) +
              "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"}
              target="_blank"
              className="button-left__link"
            >
              <FontAwesomeIcon icon={faTumblr} />
            </a>
          </div>
          <div className="button-right">
            <button
              style={{ backgroundColor: colors[color]}}
              onClick={clickButton}
              type="button"
              id="new-quote"
              className="button-right__button"
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
      <p className="copyright">by Jonhatan - `ProgramadorXP`</p>
    </div>
  );
}

export default App;
