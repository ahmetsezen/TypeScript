/// <reference path='fourslash.ts' />

// Should give completions for relative references to ts files only when allowJs is false.

// @Filename: test0.ts
//// /// <reference path="/*0*/
//// /// <reference path=".//*1*/
//// /// <reference path="./f/*2*/

// @Filename: f1.ts
////
// @Filename: f1.js
////
// @Filename: f1.d.ts
////
// @Filename: f1.tsx
////
// @Filename: f1.js
////
// @Filename: f1.jsx
////
// @Filename: f1.cs
////

verify.completions({
    marker: test.markers(),
    exact: ["f1.d.ts", "f1.ts", "f1.tsx"],
    isNewIdentifierLocation: true,
});
