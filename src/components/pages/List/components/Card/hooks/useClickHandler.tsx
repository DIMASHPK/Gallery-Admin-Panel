import { useNavigate } from 'react-router-dom';
import { ROUTES } from '~/data';
import { replaceRoutesParams } from '~/utils/pathReplacer';

export default (id: number) => {
  const navigate = useNavigate();

  const handleRoute = () => {
    const { PATH } = ROUTES.LIST_DETAILS;

    const replacedString = replaceRoutesParams(PATH, { ':id': id });

    navigate(replacedString);
  };

  return { handleRoute };
};
