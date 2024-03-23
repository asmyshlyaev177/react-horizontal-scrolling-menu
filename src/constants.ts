export const rootClassName = 'react-horizontal-scrolling-menu';

export const separatorString = '-separator';

export const separatorClassName = `${rootClassName}-${separatorString}`;
export const itemClassName = `${rootClassName}--item`;
export const scrollContainerClassName = `${rootClassName}--scroll-container`;
export const wrapperClassName = `${rootClassName}--wrapper`;

export const innerWrapperClassName = `${rootClassName}--inner-wrapper`;
export const headerClassName = `${rootClassName}--header`;
export const arrowLeftClassName = `${rootClassName}--arrow-left`;
export const arrowRightClassName = `${rootClassName}--arrow-right`;
export const footerClassName = `${rootClassName}--footer`;

export const id = 'itemId';

export const dataKeyAttribute = 'data-key';
export const dataIndexAttribute = 'data-index';

export const events = {
  first: 'first',
  last: 'last',
  onInit: 'onInit',
  onUpdate: 'onUpdate',
} as const;

export const emptyStr = '';

export const emptyRef = { current: null };
