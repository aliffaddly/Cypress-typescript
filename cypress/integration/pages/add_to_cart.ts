export class AddToCart{
    add_cart_btn = "#add-to-cart-sauce-labs-backpack";
    badge = ".shopping_cart_badge"
    remove_cart = "[data-test='remove-sauce-labs-backpack']"

    addCart(){
        cy.get(this.add_cart_btn).first().click();
    }
    
    // assert after click add to cart
    assertAddCart(){
        cy.get(this.badge).should('be.visible');
    }

    removeCart(){
        cy.get(this.remove_cart).click();
    }

    assertRemoveCart(){
        cy.get(this.badge).should('not.exist');
    }
}
