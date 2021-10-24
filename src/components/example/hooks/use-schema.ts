import yaml from 'yaml';
import { useMemo } from 'react';

import { Schema } from '../../../types/schema.types';

export const useSchema = (rawSchema: string): Schema =>
    useMemo(() => {
        // TODO: Validate
        return yaml.parse(rawSchema) as Schema;
    }, [rawSchema]);
