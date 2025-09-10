/// <reference types="jest" />

import { PinPropertyParser } from '../../parser/pin-property.parser';

describe('PinPropertyParser - serializeAsSinglePrecisionFloat', () => {
    let parser: PinPropertyParser;

    beforeEach(() => {
        parser = new PinPropertyParser();
    });

    test('PinPropertyParser can parse bSerializeAsSinglePrecisionFloat=True', () => {
      const propertyData = 'PinId=7E57DA7A000000000000000000000000,PinName="TestPinTrue",PinType.PinCategory="float",PinType.bSerializeAsSinglePrecisionFloat=True';
      const pinProperty = parser.parse(propertyData, 'TestNode');

      expect(pinProperty).toBeDefined();
      expect(pinProperty.serializeAsSinglePrecisionFloat).toBe(true);
    });

    test('PinPropertyParser can parse bSerializeAsSinglePrecisionFloat=False', () => {
      const propertyData = 'PinId=7E57DA7A000000000000000000000000,PinName="TestPinFalse",PinType.PinCategory="float",PinType.bSerializeAsSinglePrecisionFloat=False';
      const pinProperty = parser.parse(propertyData, 'TestNode');

      expect(pinProperty).toBeDefined();
      expect(pinProperty.serializeAsSinglePrecisionFloat).toBe(false);
    });
  });
