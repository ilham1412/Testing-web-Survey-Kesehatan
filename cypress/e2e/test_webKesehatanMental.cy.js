describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://project-uiux-fe.vercel.app/')
    cy.get('a[href="index.html"]').click();
    cy.get('a[href="TentangKami.html"]').click();
    cy.get('a[href="FAQ.html"]').click();
    cy.get('div:nth-child(2) button.accordion').click();
    cy.get('button.active').click();
    cy.get('div:nth-child(3) i.fa-solid').click();
    cy.get('button.active').click();
    cy.get('div:nth-child(4) i.fa-solid').click();
    cy.get('button.active i.fa-solid').click();
    cy.get('div:nth-child(5) button.accordion').click();
    cy.get('button.active i.fa-solid').click();
    cy.get('a.button-link').click();
    cy.get('input[type="text"]').click();
    cy.get('input[type="text"]').type('tes');
    cy.get('input[type="password"]').click();
    cy.get('input[type="password"]').type('tes');
    cy.get('button.btn').click();
    cy.get('a[href="register.html"]').click();
    cy.get('input[type="email"]').click();
    cy.get('input[type="email"]').type('tes@g');
    cy.get('input[type="text"]').click();
    cy.get('input[type="text"]').type('12');
    cy.get('input[type="password"]').click();
    cy.get('input[type="password"]').type('123');
    cy.get('button.btn').click();
    cy.get('a').click();
    cy.visit('https://project-uiux-fe.vercel.app/')
    cy.get('button.start-button').click();

    function jawabSampaiBisaSubmit() {
      cy.get('#submit-button').then(($btn) => {
        if ($btn.is(':disabled')) {
          cy.get('#question-box div.red').click();
          jawabSampaiBisaSubmit();
        }
      });
    }

    cy.get('button.start-button').click();

    jawabSampaiBisaSubmit();

    cy.wait(3000);
    cy.get('#submit-button').click({});
    cy.wait(3000);
    cy.get('button.start-button').click();
  })
})