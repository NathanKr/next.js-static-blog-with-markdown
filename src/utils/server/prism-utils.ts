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
      // Extract language, if none exists, use 'plaintext' as fallback
      const languageClass = codeBlock.className.match(/language-(\w+)/);
      const language = languageClass ? languageClass[1] : "plaintext";
  
      if (!languages[language]) {
        console.warn(`Warning: The language "${language}" is not recognized.`);
        return;
      }
  
      const code = codeBlock.textContent!.trim();
      const highlightedCode = highlight(code, languages[language], language);
      codeBlock.innerHTML = highlightedCode;
    });
  
    return dom.serialize();
  };
  