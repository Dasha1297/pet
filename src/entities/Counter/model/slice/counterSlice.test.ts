import { CounterSchema } from 'entities/Counter';
import { counterActions, counterReducer } from './counterSlice';

const state: CounterSchema = {
    value: 10,
};

describe('counterSlice.test', () => {
    test('decrement', () => {
        expect(counterReducer(state, counterActions.decrement())).toEqual({
            value: 9,
        });
    });
    test('increment', () => {
        expect(counterReducer(state, counterActions.increment())).toEqual({
            value: 11,
        });
    });
    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.decrement())).toEqual({
            value: -1,
        });
    });
});
