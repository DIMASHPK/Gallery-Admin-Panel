import { useFormikContext } from 'formik';
import { TOOLS_FORM_VALUES_KEYS } from '~/components/pages/List/constants';
import {
  ToolsFormChipsListType,
  ToolsFormType,
} from '~/components/pages/List/types';
import {
  handleConditionDelete,
  handleFilterDelete,
  handleSortDelete,
} from '~/components/pages/List/components/ToolsChip/helpers/deleteHelpers';

type UseDeleteHandlerArgsType = Omit<ToolsFormChipsListType, 'label'> & {
  index: number;
};

export default (args: UseDeleteHandlerArgsType) => {
  const { index, filterValue, type } = args;

  const {
    values: { chipsList, changeableValues, currentValues },
    setValues,
  } = useFormikContext<ToolsFormType>();

  const valuesDeleteHandlers = {
    [TOOLS_FORM_VALUES_KEYS.FILTER]: handleFilterDelete,
    [TOOLS_FORM_VALUES_KEYS.SORT]: handleSortDelete,
    [TOOLS_FORM_VALUES_KEYS.FILTER_CONDITION]: handleConditionDelete,
  };

  const handleDelete = () => {
    const deletedData = valuesDeleteHandlers[type]({
      changeableValues,
      currentValues,
      filterValue,
    });

    setValues({
      chipsList: chipsList.filter(
        ({ type: chipListItemType }, i: number) =>
          (i !== index &&
            chipListItemType !== TOOLS_FORM_VALUES_KEYS.FILTER_CONDITION) ||
          (chipListItemType === TOOLS_FORM_VALUES_KEYS.FILTER_CONDITION &&
            deletedData.currentValues.filters.length > 1)
      ),
      ...deletedData,
    });
  };

  return { handleDelete };
};
