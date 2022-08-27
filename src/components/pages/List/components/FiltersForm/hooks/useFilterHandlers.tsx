import { ArrayHelpers } from 'formik';

type UseFilterHandlerArgsType = {
  push: ArrayHelpers['push'];
  remove: ArrayHelpers['remove'];
};

export default (args: UseFilterHandlerArgsType) => {
  const { remove, push } = args;

  const handleAddFilter = () => {
    push({ name: '', value: '' });
  };

  const handleRemoveFilter = (index: number) => {
    remove(index);
  };

  return {
    handleAddFilter,
    handleRemoveFilter,
  };
};
