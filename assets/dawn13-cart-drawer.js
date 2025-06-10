class CartDrawer extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('keyup', (evt) => evt.code === 'Escape' && this.close());
    this.querySelector('#CartDrawer-Overlay').addEventListener('click', this.close.bind(this));
    this.setHeaderCartIconAccessibility();
  }

  
  setHeaderCartIconAccessibility() {
    const cartLink = document.querySelector('#cart-icon-bubble');
    cartLink.setAttribute('role', 'button');
    cartLink.setAttribute('aria-haspopup', 'dialog');
    cartLink.addEventListener('click', (event) => {
      event.preventDefault();
      this.open(cartLink);
    });
    cartLink.addEventListener('keydown', (event) => {
      if (event.code.toUpperCase() === 'SPACE') {
        event.preventDefault();
        this.open(cartLink);
      }
    });
  }
  

  setHeaderCartIconAccessibility() {
    const cartLink = document.querySelectorAll('#dawn13-cart-icon-bubble');
    cartLink.forEach((btn) => {
    btn.setAttribute('role', 'button');
    btn.setAttribute('aria-haspopup', 'dialog');
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      this.open(btn)
    });
    btn.addEventListener('keydown', (event) => {
      if (event.code.toUpperCase() === 'SPACE') {
        event.preventDefault();
        this.open(btn);
      }
    });
      
    });
  }
  
open(triggeredBy) {
  if (triggeredBy) this.setActiveElement(triggeredBy);

  const cartDrawerNote = this.querySelector('[id^="Details-"] summary');
  if (cartDrawerNote && !cartDrawerNote.hasAttribute('role')) {
    this.setSummaryAccessibility(cartDrawerNote);
  }

  // Ensure animation triggers properly
  setTimeout(() => {
    this.classList.add('animate', 'active');
  }, 10);

  this.addEventListener(
    'transitionend',
    () => {
      const containerToTrapFocusOn = this.classList.contains('is-empty')
        ? this.querySelector('.drawer__inner-empty')
        : document.getElementById('CartDrawer');

      const focusElement =
        this.querySelector('.drawer__inner') ||
        this.querySelector('.drawer__close');

      if (containerToTrapFocusOn && focusElement) {
        trapFocus(containerToTrapFocusOn, focusElement);
      }
    },
    { once: true }
  );

  document.body.classList.add('overflow-hidden');
}


  close() {
    this.classList.remove('active');
    removeTrapFocus(this.activeElement);
    document.body.classList.remove('overflow-hidden');
  }

  setSummaryAccessibility(cartDrawerNote) {
    cartDrawerNote.setAttribute('role', 'button');
    cartDrawerNote.setAttribute('aria-expanded', 'false');

    if (cartDrawerNote.nextElementSibling.getAttribute('id')) {
      cartDrawerNote.setAttribute('aria-controls', cartDrawerNote.nextElementSibling.id);
    }

    cartDrawerNote.addEventListener('click', (event) => {
      event.currentTarget.setAttribute('aria-expanded', !event.currentTarget.closest('details').hasAttribute('open'));
    });

    cartDrawerNote.parentElement.addEventListener('keyup', onKeyUpEscape);
  }


 
  
  renderContents(parsedState) {

    //console.log('IN cart drawer re-render')
    
    this.querySelector('.drawer__inner').classList.contains('is-empty') &&
      this.querySelector('.drawer__inner').classList.remove('is-empty');
    this.productId = parsedState.id;
    this.getSectionsToRender().forEach((section) => {
      //console.log(`Section Element: ${section.selector}`)
      const sectionElement = section ? document.querySelector(section.selector) : document.getElementById(section.id);
      //console.log("Section Element")
      //console.log(sectionElement)
      sectionElement.innerHTML = this.getSectionInnerHTML(parsedState.sections[section.id], section.selector);
    });

    if(document.querySelector('.cart-drawer-call-expert-phone') && window.chosen_expert != undefined){
          let expertLinkContainer = document.querySelector('.cart-drawer-call-expert-phone');
          let expertImage = document.querySelector('#expert_popup img');
          let expertButton = document.querySelector('.cart-drawer-call-expert-text');
        
          expertLinkContainer.href = `tel:${window.chosen_expert.phone.replace(/[()\-\s]/g, '').trim()}`
          expertImage.src = window.chosen_expert.image
          expertButton.innerHTML = `CART DRAWER Click to call ${window.chosen_expert.name} <span style="white-space:nowrap;">${window.chosen_expert.phone}</span>`
        }

    

    setTimeout(() => {
      this.querySelector('#CartDrawer-Overlay').addEventListener('click', this.close.bind(this));
      this.open();
    });
  }

  getSectionInnerHTML(html, selector = '.shopify-section') {
    return new DOMParser().parseFromString(html, 'text/html').querySelector(selector).innerHTML;
  }

  getSectionsToRender() {
    return [
      {
        id: 'dawn13-cart-drawer',
        selector: '#dawn13-CartDrawer',
      },
     
    ];
  }

  getSectionDOM(html, selector = '.shopify-section') {
    return new DOMParser().parseFromString(html, 'text/html').querySelector(selector);
  }

  setActiveElement(element) {
    this.activeElement = element;
  }
}

customElements.define('dawn13-cart-drawer', CartDrawer);

class CartDrawerItems extends CartItems {
  getSectionsToRender() {
    return [
      {
        id: 'dawn13-CartDrawer',
        section: 'dawn13-cart-drawer',
        selector: '.dawn13-drawer__inner',
      },
      {
        id: 'dawn13-cart-icon-bubble',
        section: 'dawn13-cart-icon-bubble',
        selector: '.shopify-section',
      },
    ];
  }
}

customElements.define('cart-drawer-items', CartDrawerItems);