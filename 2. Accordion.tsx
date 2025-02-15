import { useState } from "react";

export default function Accordion() {
  const [accordionHtml, setAccordionHtml] = useState(false);
  const [accordionCSS, setAccordionCSS] = useState(false);
  const [accordionJS, setAccordionJS] = useState(false);

  return (
    <div>
      <div>
        <button onClick={() => setAccordionHtml(!accordionHtml)}>
          HTML <span aria-hidden={true} className="accordion-icon" />
        </button>
        {accordionHtml && (
          <div>
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
          </div>
        )}
      </div>
      <div>
        <button onClick={() => setAccordionCSS(!accordionCSS)}>
          CSS <span aria-hidden={true} className="accordion-icon" />
        </button>
        {accordionCSS && (
          <div>
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML.
          </div>
        )}
      </div>
      <div>
        <button onClick={() => setAccordionJS(!accordionJS)}>
          JavaScript <span aria-hidden={true} className="accordion-icon" />
        </button>
        {accordionJS && (
          <div>
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS.
          </div>
        )}
      </div>
    </div>
  );
}
