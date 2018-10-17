# Installation 

## Qoukka requirement: 
`npm install -g ts-node` 
`npm install -g tsconfig-paths`

## Jest library install:
`yarn add --dev jest` or install it globally `npm i -g jest` and init jest project with `jest --init`

## Using Babel with Jest

run this command `yarn add --dev babel-jest babel-core regenerator-runtime`

`babel.rc` example:

``` 
{
  "presets": ["env", "react"]
}
```
## Typescript With Jest

Run this command 
1. `yarn add --dev jest typescript` if you has install it globally just run second command
2. `yarn add --dev ts-jest @types/jest`
3. `yarn ts-jest config:init`
4. add test script and run `yarn jest`


## Tsconfig example
```
{
    "compilerOptions": {
      "module": "commonjs",
      "target": "es6",
      "noImplicitAny": true,
      "strictNullChecks": true,
      "moduleResolution": "node",
      "sourceMap": true,
      "outDir": "dist",
      "baseUrl": "./",
      "paths": {
        "*": [
          "node_modules/*"
        ]
      }
    },
    "include": [
      "src/**/*", "1.ts"
    ]
  }
```

## Tslint example

```
{
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended"
    ],
    "jsRules": {},
    "rules": {
        "eofline": false,
        "quotemark": [
            true,
            "double"
        ]
    },
    "rulesDirectory": []
}
```