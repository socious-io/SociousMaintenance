import Loupe from './source/loupe.svg';
import Plush from './source/plus.svg';
import ArrowDown from './source/arrowDown.svg';
import ArrowUp from './source/arrowUp.svg';
import HorizontalDots from './source/horizontalDots.svg';
import Logo from './source/logo.svg';
import FullLogo from './source/fullLogo.svg';
import NewLogo from './source/newLogo.svg';

export const SvgComponent = {
  loupe: Loupe,
  plus: Plush,
  arrowUp: ArrowDown,
  arrowDown: ArrowUp,
  horizontalDots: HorizontalDots,
  logo: Logo,
  fullLogo: FullLogo,
  newLogo: NewLogo,
};
export type SvgIconTypes = keyof typeof SvgComponent;
