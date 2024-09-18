import { highlight, languages } from "prismjs";
import { JSDOM } from "jsdom";

/**
 * Function to highlight code blocks within an HTML string
 * @param htmlString : html element with pre , code and language code class e.g.
  <pre><code class="language-php">
    $greeting = 'Hello, world!';
    echo $greeting;
  </code></pre> 
 * @returns highlighted code
 */
export const highlightCodeInHTMLString = (htmlString: string): string => {
  const dom = new JSDOM(htmlString);
  const codeBlocks = dom.window.document.querySelectorAll(
    "pre code"
  ) as NodeListOf<HTMLElement>;

  codeBlocks.forEach((codeBlock: HTMLElement) => {
    const language = codeBlock.className.replace("language-", "");
    const code = codeBlock.textContent!.trim();
    const highlightedCode = highlight(code, languages[language], language);
    codeBlock.innerHTML = highlightedCode;
  });

  return dom.serialize();
};