/// <reference types="jest" />

import { Label } from '../label';

// Mock browser APIs that aren't available in Node.js
global.Path2D = jest.fn().mockImplementation((path) => ({ path }));

describe('Label', () => {
    test('constructor sets default values', () => {
        const label = new Label('Test Text');

        expect(label.text).toBe('Test Text');
        expect(label.textAlign).toBeDefined();
        expect(label.font).toBeDefined();
        expect(label.color).toBeDefined();
    });
});
