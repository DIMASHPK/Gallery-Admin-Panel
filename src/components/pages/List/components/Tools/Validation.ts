import { array, object, string } from 'yup';
import { TOOLS_FORM_VALUES_KEYS } from '~/components/pages/List/constants';
import {
  conditionLengthChecker,
  filtersLengthChecker,
  sortOrderCheck,
  valueOrderCheck,
} from '~/components/pages/List/components/Tools/helpers/validators';

export const ToolsFormSchema = object({
  changeableValues: object({
    [TOOLS_FORM_VALUES_KEYS.FILTER]: array().of(
      object({
        name: string().test({
          name: 'name',
          message: 'required',
          test: filtersLengthChecker,
        }),
        value: string().test({
          name: 'value',
          message: 'required',
          test: filtersLengthChecker,
        }),
      })
    ),
    [TOOLS_FORM_VALUES_KEYS.FILTER_CONDITION]: string().test({
      name: 'filtersCondition',
      message: 'required',
      test: conditionLengthChecker,
    }),
    [TOOLS_FORM_VALUES_KEYS.SORT]: object({
      order: string().test({
        test: sortOrderCheck,
        name: 'order',
        message: 'required',
      }),
      value: string().test({
        test: valueOrderCheck,
        name: 'value',
        message: 'required',
      }),
    }),
  }),
});
