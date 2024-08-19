/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable jest/expect-expect */
const items: string[] = Array(10)
  .fill(1)
  .map((_el, index) => `test${index}`);

const waitShort = 450;

describe('Scrolling menu', () => {
  it('Scroll forward and bacward and check cards and arrows visibility', () => {
    cy.viewport(650, 768);

    cy.visit('/');
    cy.waitUntil(() => cy.contains('test0').should('be.visible'));

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

  it('When Menu hidden should not update arrows', () => {
    cy.viewport(650, 768);

    cy.visit('/');
    cy.waitUntil(() => cy.contains('test0').should('be.visible'));

    checkArrow({ cy, direction: 'Left', visible: false });

    cy.scrollTo(0, 400);

    cy.wait(300);
    checkArrow({ cy, direction: 'Left', visible: false });
  });
});

function scrollPrev({ cy }) {
  return getArrow({ cy, direction: 'Left' }).click();
}

function scrollNext({ cy }) {
  return getArrow({ cy, direction: 'Right' }).click();
}

function checkCards({ cy, visible: _visible }) {
  cy.log('CHECK_CARDS');
  const visible = _visible.map((id) => `test${id}`);
  const firstVisibleInd = items.findIndex((id) => visible[0] === id);
  const lastVisibleInd = items.findIndex((id) => visible.slice(-1)[0] === id);
  const before = items.slice(0, firstVisibleInd);
  const after = items.slice(lastVisibleInd + 1);

  cy.waitUntil(() =>
    cy
      .wrap(before)
      .each((id) => cy.get(`[data-cy=${id}]:contains("visible: false")`)),
  );
  cy.waitUntil(() =>
    cy
      .wrap(after)
      .each((id) => cy.get(`[data-cy=${id}]:contains("visible: false")`)),
  );
  return cy.waitUntil(() =>
    cy
      .wrap(visible)
      .each((id) => cy.get(`[data-cy=${id}]:contains("visible: true")`)),
  );
}

function checkArrow({ direction = 'Left', visible = true, cy }) {
  cy.log('CHECK_ARROWS');
  // TODO: waitUntil
  cy.wait(waitShort);
  return getArrow({ cy, direction })
    .should(`${visible ? '' : 'not.'}be.visible`)
    .should(`${visible ? 'not.' : ''}be.disabled`);
}

function getArrow({ cy, direction = 'Left' }) {
  return cy.get(`button:contains("${direction}")`);
}
