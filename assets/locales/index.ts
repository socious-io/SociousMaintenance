/* eslint-disable @typescript-eslint/no-var-requires */
import {R} from '../value';

const en_US = require('./en/string.json');
const ja_JP = require('./ja/string.json');
export const resources = {
  [R.strings.KEY_LANGUAGE_ENGLISH]: en_US,
  [R.strings.KEY_LANGUAGE_JAPAN]: ja_JP,
};
