import { useNavigate } from 'react-router-dom';
import { ROUTES } from '~/data';

export default (id: number) => {
  const navigate = useNavigate();

  const handleRoute = () => {
    const { PATH } = ROUTES.LIST_DETAILS;

    const replacedString = PATH.replace(':id', id.toString());

    navigate(replacedString);
  };

  return { handleRoute };
};
