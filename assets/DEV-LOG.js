// 10.24.23
- Backed up the original theme natively as well as on github, my personal machine, and a card thumbdrive. 
- Added some style overrides to "pk-custom.css" to reduce the size of the Tip Quick widget to fit on all screen sizes without scrolling. 
- Reduced the top offset of the dropdown cart on mobile to remove the gap that was there before. 

// 10.26.23
- Header style changes made

// 12.15.23
- New Theme Publish, applied rquested changes to live theme and ported to Dev. Making an official commit here to mark the event. 
- Theme includes:

    - Langugage selector drop down in Header
    - Quick order form implimentation for blended B2B context 
    - New Custom newsletter build. Full width Image. 
    - New home page video hero section. 
    - Home page optimizations. 
    - Update to collection product card pricing. Now shows the price of the top most variant instead of the lowest value in the product. 

// 1.29.24
- New Theme Publish
- Theme Includes:
    - "3 Week Custom Build" option on product page
    - New B2B wholesale form implimentation
    - Linkable Headers
    - Various Requested Style Changes

// 2.26.24
/*
Title Change on Variant Switch  - New Variant Selects method that changes title to public title on switch. 
Product Info Style Updates: 
Reduced margin and padding on most product info elements for better space and balancing. 
Implemented color changes based on insights from A/B test. Variant buttons black/white, gray backdrop for section separation, and stark blue only for items that carry higher significance (reviews,and add to cart).
Reduced title size
Replaced image carousel with number indicator and arrow switches

Sticky add to cart menu - New code watches page position of main add to cart button and activates a slide up sticky menu when main ATC is out of view. The slide up menu is fully dynamic including image, title, and price changes as the variant is changed. 
Refactored “Call when available” feature to be more efficient and update to multiple locations. 
Fixed forced scroll issue on Brake assembly pages.
Optimized the newsletter backdrop with updated liquid code to better pull responsive images and allow for alt image text.
Site wide speed optimizations (home page - emphasis on Core web vitals):
Set key stylesheets to preload and deferred all scripts possible.
Refactored hero section to pull and present responsive images server side.
Set up hero image, banner, and truck icon to high priority preload; decreasing LCP and CLS as a result.
Refactored fonts to pull from our hosting instead of external source. Had to gather up all font files, convert, then pull into our theme. 
Applied lazy loading to all images below the fold. 
Minimized major CSS and Script files
Moved hero CSS to its own file to be preloaded. 
Fixed newsletter backdrop and delivery truck icon to allow for alt image text
Gave links aria-labels to improve accessibility score.
Refactored multiple cart elements to not have the same id.
Increased sizing on search bar and footer menu links to improve tab target coverage (SEO score)
*/

// 5.8.24
- New slide out cart drawer
- Form validation for custom option 
- New collection UX improvments regarding product filters 

// 8.5.24
  /*
- Phone number layout bug fix
- Language drop down bug fix
- Depth and interactivity UX improvements to ATC. ATC button needed some interactivity improvments so the user knows an add to cart action is taking place during the breif time their cart updates. 
  ATC button now pops up using box shadow and "thunks" down when clicked while also replacing the text with a loading spinner. Should now be much more clear that an action has taken place. 
- Refactored mobile menu grid to dynamically accept entries from the nav "Mobile Grid Menu" instead of being hardcoded. I will still need to be informed of any changes to the menu as there are some
 small workaarounds for collections that were giving alternate handles or redirects after their initial creation. 
- All collection product filter grids now have a natural language question associated with them. A/B Test for "Product Filter" VS new questions will be set up after this theme is published.
- Depth and tactile UX improvments for product page variant buttons as well. Using box shadows and scaling to give the impression that the buttons are lifted and press down when clicked. 
   */