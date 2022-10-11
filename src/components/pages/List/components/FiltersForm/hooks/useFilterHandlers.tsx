import { ArrayHelpers, useFormikContext } from 'formik';
import { ToolsFormType } from '~/components/pages/List/types';

type UseFilterHandlerArgsType = {
  push: ArrayHelpers['push'];
  remove: ArrayHelpers['remove'];
};

export default (args: UseFilterHandlerArgsType) => {
  const { remove, push } = args;

  const {
    values: {
      changeableValues: { filtersCondition, filters },
    },
    setFieldValue,
  } = useFormikContext<ToolsFormType>();

  const handleAddFilter = () => {
    push({ name: '', value: '' });
  };

  const handleRemoveFilter = (index: number) => {
    if (filtersCondition.length && filters.length < 3) {
      setFieldValue('changeableValues.filtersCondition', '');
    }

    remove(index);
  };

  return {
    handleAddFilter,
    handleRemoveFilter,
  };
};
