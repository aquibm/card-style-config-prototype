import { useMemo } from 'react';
import { Data } from '../../../types/data.types';

type DataTuple = [data: Data[], error: Error | null];

export const useData = (rawData: string): DataTuple =>
    useMemo<DataTuple>(() => {
        try {
            const data = JSON.parse(rawData) as Data[];
            return [data, null];
        } catch (error) {
            return [[], error as Error];
        }
    }, [rawData]);
