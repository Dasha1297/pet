import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

const state: DeepPartial<StateSchema> = {
    counter: { value: 10 },
};

describe('getCounter', () => {
    test('should return counter value', () => {
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
