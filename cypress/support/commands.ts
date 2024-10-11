/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

import 'cypress-wait-until';

// Cypress.on('window:before:load', (window) => {
//   window.document.head.insertAdjacentHTML(
//     'beforeend',
//     `
//     <style>
//       /* Disable CSS transitions. */
//       *, *::before, *::after { -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important; }
//       /* Disable CSS animations. */
//       *, *::before, *::after { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; }
//     </style>
//   `,
//   );
// });
