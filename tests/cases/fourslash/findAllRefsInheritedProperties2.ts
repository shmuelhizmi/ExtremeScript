/// <reference path='fourslash.ts'/>

//// interface interface1 extends interface1 {
////    [|[|{| "isDefinition": true, "contextRangeIndex": 0 |}doStuff|](): void;|]   // r0
////    [|[|{| "isDefinition": true, "contextRangeIndex": 2 |}propName|]: string;|]  // r1
//// }
////
//// var v: interface1;
//// v.[|doStuff|]();  // r2
//// v.[|propName|];   // r3

const [r0Def, r0, r1Def, r1, r2, r3] = test.ranges();
verify.singleReferenceGroup("(method) interface1.doStuff(): void", [r0, r2]);
verify.singleReferenceGroup("(property) interface1.propName: string", [r1, r3]);
