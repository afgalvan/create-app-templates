const common = [
  '--require-module ts-node/register',
];

const api = [
  ...common,
  '__test__/features/**/*.feature',
  '--require __test__/features/steps_definition/*.steps.ts',
].join(' ');

module.exports = {
  api,
};
