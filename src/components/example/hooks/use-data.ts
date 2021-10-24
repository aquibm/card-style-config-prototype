import { useMemo } from 'react';
import { Data } from '../../../types/data.types';

export const useData = (rawData: string): Data[] =>
    useMemo<Data[]>(() => JSON.parse(rawData), [rawData]);
