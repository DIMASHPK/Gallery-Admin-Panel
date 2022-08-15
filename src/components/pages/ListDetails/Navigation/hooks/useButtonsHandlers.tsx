import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '~/data';

export default () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const handleRoute = (replacedValue: string) => {
    const { PATH } = ROUTES.LIST_DETAILS;

    const replacedString = PATH.replace(':id', replacedValue);

    navigate(replacedString);
  };

  const handleNextClick = () => {
    const replacedValue = (parseInt(id as string, 10) + 1).toString();

    handleRoute(replacedValue);
  };

  const handlePreviousClick = () => {
    const replacedValue = (parseInt(id as string, 10) - 1).toString();

    handleRoute(replacedValue);
  };

  return {
    handleNextClick,
    handlePreviousClick,
  };
};
