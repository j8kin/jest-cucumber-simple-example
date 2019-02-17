import { defineFeature, loadFeature } from 'jest-cucumber';
import { sum } from '../src/sum';
 
const feature = loadFeature('./tests/features/sumtest.feature');
 
defineFeature(feature, test => {
    test('Simple scenario', ({ given }) => {
        given(/^sum of (\d+) and (\d+) is equal (\d+)$/, (arg0: number, arg1: number, arg2: number) => {
			let res: number = Number(arg0)+Number(arg1);
			expect(res).toBe(Number(arg2));
        });
    });
	
    test('Simple scenario2', ({ given }) => {
        given(/^sum of (\d+) and (\d+) is equal (\d+)$/, (arg0: number, arg1: number, arg2: number) => {
			let res: number = Number(arg0)+Number(arg1);
			expect(res).toBe(Number(arg2));
        });
    });	
});