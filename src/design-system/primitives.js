import system from 'styled-system'

export const Box = system(
  // core
  'space',
  'width',
  'color',
  'fontSize',
  // typography
  'textAlign',
  // borders
  'borders',
  'borderColor',
  'borderRadius',
  // layout
  'display',
  'maxWidth',
  'minWidth',
  'height',
  'maxHeight',
  'minHeight',
  // flexbox
  'alignItems',
  'alignContent',
  'justifyContent',
  'flexWrap',
  'flexDirection',
  'flex',
  'flexBasis',
  'justifySelf',
  'alignSelf',
  'order',
  // position
  'position',
  'zIndex',
  'top',
  'right',
  'bottom',
  'left',
);
Box.displayName = 'Box';

export const Text = system(
  {
    is: 'p',
    fontSize: 2,
    color: 'dark-gray',
    fontFamily: 'sansSerif',
  },
  // core
  'space',
  'width',
  'color',
  'fontSize',
  // typography
  'fontFamily',
  'textAlign',
  'lineHeight',
  'fontWeight',
  'letterSpacing',
);
Text.displayName = 'Text';

export const Heading = system(
  {
    is: 'h1',
    m: 0,
    fontSize: 6,
    color: 'dark-gray',
    fontFamily: 'sansSerif',
  },
  // core
  'space',
  'width',
  'color',
  'fontSize',
  // typography
  'fontFamily',
  'textAlign',
  'lineHeight',
  'fontWeight',
  'letterSpacing',
);
Heading.displayName = 'Heading';

export const Avatar = system(
  {
    is: 'img',
    p: 2,
    border: 1,
    borderColor: 'lightGray',
    borderRadius: '100%',
  },
  'width',
  'height',
);
Avatar.displayName = 'Avatar';

export const Card = system(
  {
    p: 3,
    border: 1,
    borderColor: 'lightGray',
    borderRadius: 2,
    bg: 'white',
  },
  // core
  'space',
  'width',
  'color',
  'fontSize',
  // borders
  'borders',
  'borderColor',
  'borderRadius',
  // typography
  'textAlign',
  // layout
  'display',
  'maxWidth',
  'minWidth',
  'height',
  'maxHeight',
  'minHeight',
  // flexbox
  'alignItems',
  'alignContent',
  'justifyContent',
  'flexWrap',
  'flexDirection',
  'flex',
  'flexBasis',
  'justifySelf',
  'alignSelf',
  'order',
).extend`
  box-sizing: border-box
`;
Card.displayName = 'Card';
