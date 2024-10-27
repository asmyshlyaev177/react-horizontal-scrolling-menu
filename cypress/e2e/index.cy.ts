/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable jest/expect-expect */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-nested-callbacks */

const waitShort = 450;

type Cy = Cypress.cy & CyEventEmitter;
type Direction = 'Left' | 'Right';

describe('Scrolling menu', () => {
  it('Scroll forward and backward and check cards and arrows visibility', () => {
    cy.viewport(650, 768);

    cy.visit('/');
    cy.waitUntil(() => cy.contains('test0').should('be.visible'));

    cy.wait(500);

    checkArrow({ cy, direction: 'Left', visible: false });
    checkArrow({ cy, direction: 'Right', visible: true });

    checkCards({ cy, visible: ['0', '1', '2'] });

    scrollNext({ cy });
    checkCards({ cy, visible: ['3', '4', '5'] });

    scrollNext({ cy });
    checkCards({ cy, visible: ['6', '7', '8'] });

    scrollNext({ cy });
    checkCards({ cy, visible: ['7', '8', '9'] });

    cy.log('Last items');

    scrollPrev({ cy });
    checkCards({ cy, visible: ['4', '5', '6'] });

    scrollPrev({ cy });
    checkCards({ cy, visible: ['1', '2', '3'] });

    scrollPrev({ cy });
    checkCards({ cy, visible: ['0', '1', '2'] });

    cy.log('First items');
  });

  describe('menu visibility', () => {
    it('When Menu hidden should not update arrows', () => {
      cy.viewport(650, 768);

      cy.visit('/');
      cy.wait(300);
      cy.waitUntil(() => cy.contains('test0').should('be.visible'));

      checkArrow({ cy, direction: 'Left', visible: false });

      cy.scrollTo(0, 400);

      cy.wait(300);
      checkArrow({ cy, direction: 'Left', visible: false });
    });

    it('should handle scroll when Menu partially hidden', () => {
      cy.viewport(650, 768);

      cy.visit('/');
      cy.waitUntil(() => cy.contains('test0').should('be.visible'));

      cy.wait(300);
      checkArrow({ cy, direction: 'Left', visible: false });

      cy.scrollTo(0, 450);
      cy.wait(300);

      scrollNext({ cy });
      cy.wait(300);

      checkCards({ cy, visible: ['3', '4', '5'] });

      checkArrow({ cy, direction: 'Left', visible: true });
      checkArrow({ cy, direction: 'Right', visible: true });

      scrollNext({ cy });
      cy.wait(300);
      checkCards({ cy, visible: ['6', '7', '8'] });
      checkArrow({ cy, direction: 'Left', visible: true });
      checkArrow({ cy, direction: 'Right', visible: true });

      scrollNext({ cy });
      cy.wait(300);
      checkCards({ cy, visible: ['7', '8', '9'] });
      checkArrow({ cy, direction: 'Left', visible: true });
      checkArrow({ cy, direction: 'Right', visible: false });
    });
  });
});

function scrollPrev({ cy }: { cy: Cy }) {
  return getArrow({ cy, direction: 'Left' }).click();
}

function scrollNext({ cy }: { cy: Cy }) {
  return getArrow({ cy, direction: 'Right' }).click();
}

function checkCards({ cy, visible: _visible }: { cy: Cy; visible: string[] }) {
  cy.log('CHECK_CARDS');
  const visible = _visible.map((id) => `test${id}`);

  cy.get('.card[data-visible=true]').should('have.length', visible.length);
  return cy.waitUntil(() =>
    cy
      .wrap(visible)
      .each((id) => cy.get(`[data-cy=${id}]:contains("visible: true")`)),
  );
}

function checkArrow({
  direction = 'Left',
  visible = true,
  cy,
}: {
  cy: Cy;
  direction: Direction;
  visible: boolean;
}) {
  cy.log('CHECK_ARROWS');
  cy.wait(waitShort);
  return getArrow({ cy, direction })
    .should(`${visible ? '' : 'not.'}be.visible`)
    .should(`${visible ? 'not.' : ''}be.disabled`);
}

function getArrow({
  cy,
  direction = 'Left',
}: {
  cy: Cy;
  direction: Direction;
}) {
  return cy.get(`button:contains("${direction}")`);
}
