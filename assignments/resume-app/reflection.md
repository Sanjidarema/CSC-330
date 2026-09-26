# Assignment 1 Reflection

## Organizing Views into Partials
I learned that EJS partials make it easier to reuse the same layout across multiple pages. I placed the shared page structure in `header.ejs`, navigation in `nav.ejs`, and the footer in `footer.ejs`. Each main view can include these partials instead of repeating the same HTML.

## Advantages of Modular Layout Elements
The main advantages are consistency and easier maintenance. If navigation or another shared element needs to change, it can be updated in one partial rather than editing every page separately. This also keeps the individual view files shorter and easier to understand.

## Bug / Error and Resolution
While completing `views/partials/nav.ejs`, I needed the active navigation link to change depending on the current route. The problem was that the template needs access to `currentPath`; without that variable, the active-class expression cannot determine which link is active. I resolved it by passing `currentPath: req.path` from each route in `app.js` and then using conditions such as `currentPath === '/projects'` in `nav.ejs`.

Before submitting, I verified the final line number of this fix in my local project and updated this reflection if needed.
