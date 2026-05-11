# Commentary HTML Core Fixture Branch

This branch exercises safe static HTML rendering, `.html` and `.htm` extension detection, useful inline CSS, safe inline SVG, tables, lists, links, and repository image references.

Expected Commentary behavior:

- `.html` files open in the rendered review workspace.
- Preview mode renders the static HTML in a sandboxed/restricted surface.
- Raw mode shows the original source.
- Comments can attach to rendered headings, sections, paragraphs, lists, tables, and table rows.
- No special Commentary IDs, custom tags, or `data-commentary-*` attributes are required.

Commentary URLs after publishing:

- PR review: `/review/github/commentary-dev/commentary-html-core-fixtures/pull/1?file=public%2Findex.html`
- Direct document: `/review/github/commentary-dev/commentary-html-core-fixtures/document?branch=fixture%2Fcore-html&file=public%2Findex.html`
- Table page: `/review/github/commentary-dev/commentary-html-core-fixtures/document?branch=fixture%2Fcore-html&file=public%2Ftable.html`
- HTM page: `/review/github/commentary-dev/commentary-html-core-fixtures/document?branch=fixture%2Fcore-html&file=public%2Flegacy.htm`
