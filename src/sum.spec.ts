import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
    it('should add two positive numbers correctly', () => {
        expect(sum(1, 2)).toBe(3);
        expect(sum(5, 7)).toBe(12);
        expect(sum(100, 200)).toBe(300);
    });

    it('should handle negative numbers', () => {
        expect(sum(-1, -2)).toBe(-3);
        expect(sum(-5, 3)).toBe(-2);
        expect(sum(10, -7)).toBe(3);
    });

    it('should handle zero', () => {
        expect(sum(0, 0)).toBe(0);
        expect(sum(0, 5)).toBe(5);
        expect(sum(-3, 0)).toBe(-3);
    });

    it('should handle decimal numbers', () => {
        expect(sum(1.5, 2.7)).toBeCloseTo(4.2);
        expect(sum(-1.2, 3.4)).toBeCloseTo(2.2);
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    });
});
