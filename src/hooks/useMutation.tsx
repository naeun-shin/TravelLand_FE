import { UpdateWholePlan } from '@/api/interfaces/planInterface';
import {
  cancelLikePlan,
  cancelScrapPlan,
  createLikePlan,
  createPlanList,
  createScrapPlan,
  deletePlan,
  updatePlan,
} from '@/api/planAxios';
import {
  cancelLikeTrip,
  cancelScrapTrip,
  createLikeTrip,
  createScrapTrip,
} from '@/api/reviewAxios';
import { updateNickname } from '@/api/userAxios';
import { checkVote, createVote } from '@/api/voteAxios';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

export interface ErrorResponse {
  message: string;
}

export interface PlanResponse {
  planId: number;
}
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

export const useUpdatePlanMutation = () => {
  const navigate = useNavigate();
  return useMutation<PlanResponse, AxiosError<ErrorResponse>, UpdateWholePlan>({
    mutationFn: updatePlan,
    onSuccess: (data) => {
      alert('수정이 완료됬습니다.');
      navigate(`/planDetail/${data.planId}`);
    },
    onError: (error: AxiosError) => {
      const errorMessage =
        (error.response?.data as ErrorResponse).message ||
        '알 수 없는 에러가 발생했습니다.';
      alert('수정하기 에러가 발생했습니다:' + errorMessage);
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
    // onError: () => {
    //   alert('좋아요 기능에 에러가 발생했습니다.');
    // },
  });
};
// 좋아요 취소
export const useCancelLikePlanMutation = () => {
  return useMutation({
    mutationFn: cancelLikePlan,
    onSuccess: () => {
      alert('좋아요를 취소하셨습니다.');
    },
    // onError: () => {
    //   alert('좋아요 취소 기능에 에러가 발생했습니다.');
    // },
  });
};

// 플랜 스크랩 등록
export const useCreateScrapPlanMutation = () => {
  return useMutation({
    mutationFn: createScrapPlan,
    onSuccess: () => {
      alert('플랜을 스크랩하셨습니다.');
    },
    // onError: () => {
    //   alert('스크랩 기능에 에러가 발생했습니다.');
    // },
  });
};

// 스크랩 취소
export const useCancelScrapPlanMutation = () => {
  return useMutation({
    mutationFn: cancelScrapPlan,
    onSuccess: () => {
      alert('스크랩을 취소하셨습니다.');
    },
    // onError: () => {
    //   alert('스크랩 취소 기능에 에러가 발생했습니다.');
    // },
  });
};

// 여행 정보 좋아요
export const useCreateLikeTripMutation = () => {
  return useMutation({
    mutationFn: createLikeTrip,
    onSuccess: () => {
      alert('좋아요를 클릭하셨습니다.');
    },
    onError: (error: AxiosError) => {
      const errorMessage =
        (error.response?.data as ErrorResponse).message ||
        '알 수 없는 에러가 발생했습니다.';
      alert(`좋아요 등록 실패! 오류: ${errorMessage}`);
    },
  });
};
// 여행 정보 좋아요 취소
export const useCancelLikeTripMutation = () => {
  return useMutation({
    mutationFn: cancelLikeTrip,
    onSuccess: () => {
      alert('좋아요를 취소하셨습니다.');
    },
    onError: (error: AxiosError) => {
      // error.response?.data를 ErrorResponse 타입으로 단언
      const errorMessage =
        (error.response?.data as ErrorResponse).message ||
        '알 수 없는 에러가 발생했습니다.';
      alert(`좋아요 취소 실패! 오류: ${errorMessage}`);
    },
  });
};
// 여행 정보 스크랩 등록
export const useCreateScrapTripMutation = () => {
  return useMutation({
    mutationFn: createScrapTrip,
    onSuccess: () => {
      alert('여행정보를 스크랩하셨습니다.');
    },
    onError: (error: AxiosError) => {
      // 에러 메시지 추출, 없으면 기본 메시지 사용
      const errorMessage =
        (error.response?.data as ErrorResponse)?.message ||
        '스크랩 등록에 실패했습니다.';
      alert(`스크랩 등록 실패! 오류: ${errorMessage}`);
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
    onError: (error: AxiosError) => {
      // 에러 메시지 추출, 없으면 기본 메시지 사용
      const errorMessage =
        (error.response?.data as ErrorResponse)?.message ||
        '스크랩 취소에 실패했습니다.';
      alert(`스크랩 취소 실패! 오류: ${errorMessage}`);
    },
  });
};

// 닉네임 변경
export const useUpdateNickname = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (newNickname: string) => updateNickname(newNickname),
    onSuccess: () => {
      alert('닉네임이 성공적으로 변경되었습니다.');
      navigate('/userProfile');
    },
    onError: () => {
      alert('닉네임 변경에 실패했습니다!');
    },
  });
};
