/// <reference types="vite/client" />

declare module "gsap/SplitText" {
  export class SplitText {
    constructor(target: any, vars?: any);
    chars: any;
    words: any;
    lines: any;
    revert(): void;
  }
}

declare module "gsap/ScrollSmoother" {
  export class ScrollSmoother {
    constructor(target: any, vars?: any);
    static create(vars: any): any;
    scrollTop(value: number): void;
    paused(value: boolean): void;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
    static refresh(force?: boolean): void;
  }
}
