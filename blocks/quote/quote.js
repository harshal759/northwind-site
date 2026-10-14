export default function decorate(block) {
  const [quoteWrapper] = block.children;

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent.trim();
  // Replace what's inside the row, not the row itself: the row keeps the
  // Universal Editor's data-aue-* attributes, so the block stays editable.
  quoteWrapper.replaceChildren(blockquote);
}
