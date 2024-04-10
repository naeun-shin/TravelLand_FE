import { deletePlan } from '@/api/planAxios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

// 삭제하기 mutation
export const useDeleteMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: deletePlan,
    onSuccess: () => {
      alert('삭제가 완료 되었습니다.');
      navigate('/planList');
    },
    onError: () => {
      alert('삭제하기에 에러가 발생했습니다.');
    },
  });
};
