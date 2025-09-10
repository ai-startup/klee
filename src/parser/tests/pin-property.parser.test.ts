/// <reference types="jest" />

import { PinPropertyParser } from '../../parser/pin-property.parser';
import { PinDirection } from '../../data/pin/pin-direction';

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

describe('PinPropertyParser - SubPins', () => {
    let parser: PinPropertyParser;

    beforeEach(() => {
        parser = new PinPropertyParser();
    });

    test('PinPropertyParser can parse SubPins property', () => {
      const propertyData = 'PinId=123,PinName="TestPin",SubPins=(Node1 ABC,Node2 DEF,)';
      const pinProperty = parser.parse(propertyData, 'TestNode');

      expect(pinProperty).toBeDefined();
      expect(pinProperty.subPins).toBe('(Node1 ABC,Node2 DEF,)');
    });

    test('PinPropertyParser can parse empty SubPins', () => {
      const propertyData = 'PinId=456,PinName="TestPin",SubPins=()';
      const pinProperty = parser.parse(propertyData, 'TestNode');

      expect(pinProperty).toBeDefined();
      expect(pinProperty.subPins).toBe('()');
    });
});

describe('PinPropertyParser - ParentPin', () => {
    let parser: PinPropertyParser;

    beforeEach(() => {
        parser = new PinPropertyParser();
    });

    test('PinPropertyParser can parse ParentPin property', () => {
      const propertyData = 'PinId=123,PinName="TestPin",ParentPin="ParentPinName"';
      const pinProperty = parser.parse(propertyData, 'TestNode');

      expect(pinProperty).toBeDefined();
      expect(pinProperty.parentPin).toBe('ParentPinName');
    });

    test('PinPropertyParser can parse empty ParentPin', () => {
      const propertyData = 'PinId=456,PinName="TestPin",ParentPin=""';
      const pinProperty = parser.parse(propertyData, 'TestNode');

      expect(pinProperty).toBeDefined();
      expect(pinProperty.parentPin).toBe('');
    });
});

describe('PinPropertyParser - DesiredPinDirection', () => {
    let parser: PinPropertyParser;

    beforeEach(() => {
        parser = new PinPropertyParser();
    });

    test('PinPropertyParser can parse DesiredPinDirection=EGPD_Output', () => {
      const propertyData = 'PinName="Context",PinType=(PinCategory="object"),DesiredPinDirection=EGPD_Output';
      const pinProperty = parser.parse(propertyData, 'TestNode');

      expect(pinProperty).toBeDefined();
      expect(pinProperty.direction).toBe(PinDirection.EGPD_Output);
    });

    test('PinPropertyParser can parse DesiredPinDirection=EGPD_Input', () => {
      const propertyData = 'PinName="InputPin",PinType=(PinCategory="object"),DesiredPinDirection=EGPD_Input';
      const pinProperty = parser.parse(propertyData, 'TestNode');

      expect(pinProperty).toBeDefined();
      expect(pinProperty.direction).toBe(PinDirection.EGPD_Input);
    });
});
