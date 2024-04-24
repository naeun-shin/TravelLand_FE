import {
  cancelLikePlan,
  cancelScrapPlan,
  createLikePlan,
  createPlanList,
  createScrapPlan,
  deletePlan,
} from '@/api/planAxios';
import {
  cancelLikeTrip,
  cancelScrapTrip,
  createLikeTrip,
  createScrapTrip,
} from '@/api/reviewAxios';
import { checkVote, createVote } from '@/api/voteAxios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

// 작성하기 mutation
export const useCreatePlanMutaton = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: createPlanList,
    onSuccess: () => {
      alert('작성이 완료되었습니다.');
      navigate('/planList');
    },
    onError: (error) => {
      alert('등록하기 에러가 발생했습니다.');
      console.log(error.message);
    },
  });
};
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

// 투표 생성하기
export const useCreateVoteMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: createVote,
    onSuccess: () => {
      alert('투표 생성이 완료되었습니다.');
      navigate('/user/myPage');
    },
    onError: () => {
      alert('투표 생성하기에 에러가 발생했습니다.');
    },
  });
};

// 투표하기
export const useCheckVoteMutation = () => {
  // const queryClient = useQueryClient();
  // const navigate = useNavigate();
  return useMutation({
    // mutationKey: ['VOTE_KEY'],
    mutationFn: checkVote,
    onSuccess: () => {
      alert('투표가 완료되었습니다.');
      // navigate('/planList');
      // queryClient.invalidateQueries({ queryKey: ['VOTE_KEY'] });
    },
    onError: () => {
      alert('투표하기에 에러가 발생했습니다.');
    },
  });
};

//플랜 좋아요 등록
export const useCreateLikePlanMutation = () => {
  return useMutation({
    mutationFn: createLikePlan,
    onSuccess: () => {
      alert('좋아요를 클릭하셨습니다.');
    },
    onError: () => {
      alert('좋아요 기능에 에러가 발생했습니다.');
    },
  });
};
// 좋아요 취소
export const useCancelLikePlanMutation = () => {
  return useMutation({
    mutationFn: cancelLikePlan,
    onSuccess: () => {
      alert('좋아요를 취소하셨습니다.');
    },
    onError: () => {
      alert('좋아요 취소 기능에 에러가 발생했습니다.');
    },
  });
};

// 플랜 스크랩 등록
export const useCreateScrapPlanMutation = () => {
  return useMutation({
    mutationFn: createScrapPlan,
    onSuccess: () => {
      alert('플랜을 스크랩하셨습니다.');
    },
    onError: () => {
      alert('스크랩 기능에 에러가 발생했습니다.');
    },
  });
};

// 스크랩 취소
export const useCancelScrapPlanMutation = () => {
  return useMutation({
    mutationFn: cancelScrapPlan,
    onSuccess: () => {
      alert('스크랩을 취소하셨습니다.');
    },
    onError: () => {
      alert('스크랩 취소 기능에 에러가 발생했습니다.');
    },
  });
};

// 여행 정보
//여행 정보 좋아요 등록
export const useCreateLikeTripMutation = () => {
  return useMutation({
    mutationFn: createLikeTrip,
    onSuccess: () => {
      alert('좋아요를 클릭하셨습니다.');
    },
    onError: () => {
      alert('좋아요 기능에 에러가 발생했습니다.');
    },
  });
};
//여행 정보 좋아요 취소
export const useCancelLikeTripMutation = () => {
  return useMutation({
    mutationFn: cancelLikeTrip,
    onSuccess: () => {
      alert('좋아요를 취소하셨습니다.');
    },
    onError: () => {
      alert('좋아요 취소 기능에 에러가 발생했습니다.');
    },
  });
};

//여행 정보 스크랩 등록
export const useCreateScrapTripMutation = () => {
  return useMutation({
    mutationFn: createScrapTrip,
    onSuccess: () => {
      alert('여행정보를 스크랩하셨습니다.');
    },
    onError: () => {
      alert('스크랩 기능에 에러가 발생했습니다.');
    },
  });
};

// 여행 정보 스크랩 취소
export const useCancelScrapTripMutation = () => {
  return useMutation({
    mutationFn: cancelScrapTrip,
    onSuccess: () => {
      alert('스크랩을 취소하셨습니다.');
    },
    onError: () => {
      alert('스크랩 취소 기능에 에러가 발생했습니다.');
    },
  });
};
