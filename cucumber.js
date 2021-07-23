const common = [
  '--require-module ts-node/register',
];

const api = [
  ...common,
  'src/__test__/features/**/*.feature',
  '--require src/__test__/features/steps_definition/*.steps.ts',
].join(' ');

module.exports = {
  api,
};
