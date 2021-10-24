import yaml from 'yaml';
import { useMemo } from 'react';

import { Schema } from '../../../types/schema.types';

type SchemaTuple = [schema: Schema, error: Error | null];

export const useSchema = (rawSchema: string): SchemaTuple =>
    useMemo(() => {
        try {
            const schema = yaml.parse(rawSchema) as Schema;
            return [schema, null];
        } catch (error) {
            return [{ layout: 'card', sections: {} }, error as Error];
        }
    }, [rawSchema]);
