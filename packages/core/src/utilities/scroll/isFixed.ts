import {getWindow} from '@stringke/dnd-kit-utilities';

export function isFixed(
  node: HTMLElement,
  computedStyle: CSSStyleDeclaration = getWindow(node).getComputedStyle(node)
): boolean {
  return computedStyle.position === 'fixed';
}
