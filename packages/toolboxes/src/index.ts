import { add as _add } from '@doritokit/helpers';
import type { N } from './types';

export const add = (a: N, b: N) => {
  return _add(a.value, b.value);
};
