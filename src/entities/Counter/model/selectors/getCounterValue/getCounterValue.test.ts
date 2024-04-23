import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

const state: DeepPartial<StateSchema> = {
    counter: { value: 10 },
};

describe('getCounterValue.test', () => {
    test('should return counter value', () => {
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
