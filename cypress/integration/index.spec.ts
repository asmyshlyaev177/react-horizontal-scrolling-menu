const items: string[] = Array(10)
  .fill(1)
  .map((_el, index) => `test${index}`);

const visibleItemsCount = 3;
const waitShort = 450;
const waitLong = 900;

type direction = 'Left' | 'Right';

describe('Scrolling menu', () => {
  it('Scroll forward and bacward and check cards and arrows visibility', () => {
    cy.viewport(650, 768);

    const w = new SlidingWindow({
      items: items,
      position: 0,
      length: visibleItemsCount,
    });

    cy.visit('/').wait(waitLong * 3);

    checkArrow({ cy, direction: 'Left', visible: false });
    checkArrow({ cy, direction: 'Right', visible: true });

    checkCards({ cy, ...w.status() });

    scrollNext({ cy, w });

    scrollNext({ cy, w });

    scrollNext({ cy, w });

    cy.log('Last items');

    scrollPrev({ cy, w });

    scrollPrev({ cy, w });

    scrollPrev({ cy, w });

    cy.log('First items');
  });
});

function scrollPrev({ cy, w }: { cy: Cypress.cy; w: SlidingWindow }) {
  getArrow({ cy, direction: 'Left' }).click().wait(waitLong);

  w.prev();

  const { before, visible, after } = w.status();

  checkCards({ cy, before, visible, after });

  checkArrow({ cy, direction: 'Left', visible: !!before.length });
  checkArrow({ cy, direction: 'Right', visible: true });
}

function scrollNext({ cy, w }: { cy: Cypress.cy; w: SlidingWindow }) {
  getArrow({ cy, direction: 'Right' }).click().wait(waitLong);

  w.next();

  const { before, visible, after } = w.status();

  checkCards({ cy, before, visible, after });

  checkArrow({ cy, direction: 'Left', visible: true });
  checkArrow({ cy, direction: 'Right', visible: !!after.length });
}

function checkCards({
  cy,
  before,
  visible,
  after,
}: {
  cy: Cypress.cy;
  before: string[];
  visible: string[];
  after: string[];
}) {
  cy.wrap(before).each((id) => checkCard({ cy, id, visible: false }));
  cy.wrap(visible).each((id) => checkCard({ cy, id, visible: true }));
  cy.wrap(after).each((id) => checkCard({ cy, id, visible: false }));
}

function checkArrow({
  cy,
  direction = 'Left',
  visible = true,
}: {
  cy: Cypress.cy;
  direction: direction;
  visible: boolean;
}) {
  cy.wait(waitShort);
  return getArrow({ cy, direction })
    .should(`${visible ? '' : 'not.'}be.visible`)
    .should(`${visible ? 'not.' : ''}be.disabled`);
}

function getArrow({
  cy,
  direction = 'Left',
}: {
  cy: Cypress.cy;
  direction: direction;
}) {
  return cy.get('button').filter(`:contains("${direction}")`).eq(0);
}

function checkCard({ cy, id, visible = true, selected = false }) {
  return cy
    .get(`[data-cy=${id}]`)
    .find('.card-header')
    .should('exist')
    .should(`${visible ? '' : 'not.'}to.be.visible`)
    .invoke('text')
    .then((text) => {
      expect(text.includes(`visible: ${visible}`)).to.be.true;
      expect(text.includes(`selected: ${selected}`)).to.be.true;
    });
}

class SlidingWindow {
  items: string[];
  position: number;
  length: number;

  constructor(props: { items: string[]; position: number; length: number }) {
    this.items = props.items || [];
    this.position = props.position || 0;
    this.length = props.length || 3;
  }

  public prev() {
    const newPosition = this.decPos();

    const position = this.posAfterStart(newPosition)
      ? newPosition
      : this.startPos();

    this.position = position;

    return this.status();
  }

  public next() {
    const newPosition = this.incPos();

    const position = this.posBeforeEnd(newPosition)
      ? newPosition
      : this.endPos();

    this.position = position;

    return this.status();
  }

  public status() {
    const start = this.position;
    const end = this.position + this.length;

    const visible = [...this.items].slice(start, end);
    const before = [...this.items].slice(0, start);
    const after = [...this.items].slice(end);

    return { before, visible, after };
  }

  incPos() {
    return this.position + this.length;
  }

  decPos() {
    return this.position - this.length;
  }

  posBeforeEnd(pos = 0) {
    return pos <= this.endPos();
  }

  posAfterStart(pos = 0) {
    return pos >= 0;
  }

  endPos() {
    return this.items.length - this.length;
  }

  startPos() {
    return 0;
  }
}
