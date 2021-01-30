import type { IApi } from '@umijs/types';
import { setOptions } from '../../context';

export default (api: IApi) => {
  api.describe({
    key: 'dark',
    config: {
      default: false,
      schema(joi) {
        return joi.alternatives(joi.string(), joi.boolean());
      },
      onChange: api.ConfigChangeType.regenerateTmpFiles,
    },
  });

  // share config with other source module via context
  api.modifyConfig(memo => {
    setOptions('dark', memo.dark);

    return memo;
  });
};
