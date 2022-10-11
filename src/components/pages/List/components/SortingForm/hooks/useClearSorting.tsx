import { useFormikContext } from 'formik';
import { ToolsFormType } from '~/components/pages/List/types';

export default () => {
  const { setFieldValue } = useFormikContext<ToolsFormType>();

  const handleClear = () => {
    setFieldValue('changeableValues.sorting', { value: '', order: '' });
  };

  return { handleClear };
};
