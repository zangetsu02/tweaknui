import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  rules: {
    'node/prefer-global/process': 'off',
  },
})
