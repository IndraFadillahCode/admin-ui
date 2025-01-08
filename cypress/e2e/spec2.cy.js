describe('Login with Various Input Conditions', () => {
  it('Should show an error message when email is in an invalid format', () => {
    // 1. Buka halaman login
    cy.visit('http://localhost:5173/login');

    // 2. Input email yang tidak valid (tanpa tanda @)
    cy.get('input#email')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'hello@example.com')
      .type('helloexample.com')
      .should('have.value', 'helloexample.com');

    // 3. Input password yang valid
    cy.get('input#password')
      .should('be.visible')
      .and('have.attr', 'placeholder', '*************')
      .type('123456')
      .should('have.value', '123456');

    // 4. Klik tombol "Login"
    cy.get('button').contains('Login').click();

    // 5. Verifikasi bahwa pesan error "Invalid email address format" ditampilkan
    cy.get('div')
      .contains('Invalid email address format')
      .should('be.visible');
  });

  it('Should allow user to log in with valid credentials', () => {
    // 1. Buka halaman login
    cy.visit('http://localhost:5173/login');

    // 2. Input email yang valid
    cy.get('input#email')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'hello@example.com')
      .type('hello@example.com')
      .should('have.value', 'hello@example.com');

    // 3. Input password yang valid
    cy.get('input#password')
      .should('be.visible')
      .and('have.attr', 'placeholder', '*************')
      .type('123456')
      .should('have.value', '123456');

    // 4. Klik tombol "Login"
    cy.get('button').contains('Login').click();

    // 5. Verifikasi bahwa user berhasil login dan diarahkan ke dashboard
    cy.url().should('include', '/');
    cy.get('nav').should('be.visible');
    cy.get('header').should('be.visible');
  });
});