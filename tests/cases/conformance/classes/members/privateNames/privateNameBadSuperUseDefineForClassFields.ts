// @target: esnext, es2022
// @useDefineForClassFields: true
class B {};
class A extends B {
    #x;
    constructor() {
        void 0; // Error: 'super' call must  come first
        super();
    }
}
