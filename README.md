# ava-typescript-nyc

```
yarn test
```

does

- Transpile TypeScript sources to JavaScript: `scripts` → `build/dist`
- Transpile TypeScript tests to JavaScript: `tests` → `build/test`
- Run test using AVA
- Take coverage using nyc
- Report AVA test result in xUnit format: `build/test/reports`
- Report coverage result in HTML and Cobertura formats: `build/test/coverage`

## Todo

- Avoid creating unnecessary `coverage` directory by nyc
