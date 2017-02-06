import { test } from 'ava';

import { sum, asyncSum } from '../scripts/sum';

test('sum', (t) => {
  t.true(sum(1, 2, 3, 4) === 10);
});

test('asyncSum', async (t) => {
  t.true(await asyncSum(1, 2, 3, 4) === 10);
});
