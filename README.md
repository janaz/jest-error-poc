#### reproducing issue with jest 16

https://github.com/facebook/jest/issues/1866

#### to reproduce

```bash
npm install
npm run test-one-worker  # will execute jest -w 1
# no summary is displayed, test runner exits with error

npm run test-two-workers # will execute jest -w 1
# no summary is displayed, test runner exits with error
