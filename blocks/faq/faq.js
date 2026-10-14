import { moveInstrumentation } from '../../scripts/scripts.js';

/**
 * FAQ: each row (one FAQ item) becomes a <details> element.
 * <details>/<summary> open and close without any JavaScript and are
 * keyboard- and screen-reader-friendly out of the box.
 */
export default function decorate(block) {
  [...block.children].forEach((row) => {
    const [questionCell, answerCell] = row.children;

    // The item: keep its Universal Editor attributes on the new element,
    // so authors can still select and edit it.
    const details = document.createElement('details');
    details.className = 'faq-item';
    moveInstrumentation(row, details);

    // The question: the clickable line.
    const summary = document.createElement('summary');
    summary.className = 'faq-question';
    moveInstrumentation(questionCell, summary);
    summary.append(...questionCell.childNodes);

    // The answer: reuse its cell as is (it keeps its own attributes).
    answerCell.className = 'faq-answer';

    details.append(summary, answerCell);
    row.replaceWith(details);
  });
}
