// // import { useEffect, useState } from 'react';
// import * as S from './Vote.style';

// interface PlanVotes {
//   planVoteId: number;
//   planAId: number;
//   planBId: number;
//   planACount: number;
//   planBCount: number;
//   isClosed: boolean;
//   title: string;
//   planVoteDuration: string;
//   createdAt: string;
//   modifiedAt: string;
//   nickname: string;
//   profileImage: string;
// }
// interface VoteResultProps {
//   voteData: PlanVotes[];
// }

// export const VoteResult: React.FC<VoteResultProps> = ({ voteData }) => {
//   return (
//     <>
//       <S.CheckVoteContainer>
//         <div>
//           <div>
//             {/* {!selectedVote.isClosed ? '플랜 투표 중' : '플랜 투표 마감'} */}
//           </div>
//           <S.VoteTitleContent>
//             <img
//               // src={selectedVote.profileImage || '/assets/paris.jpg'}
//               alt="Profile"
//             />
//             <S.VoteTitle>
//               {/* <div>{selectedVote.nickname || '익명'}</div> */}
//               {/* <div>{selectedVote.title}</div> */}
//             </S.VoteTitle>
//           </S.VoteTitleContent>
//           <S.VoteButtonBox>
//             <S.VoteChoiceBox>
//               <S.VoteContentBox></S.VoteContentBox>
//             </S.VoteChoiceBox>
//             <S.VoteChoiceBox>
//               <S.VoteContentBox></S.VoteContentBox>
//             </S.VoteChoiceBox>
//           </S.VoteButtonBox>
//         </div>
//       </S.CheckVoteContainer>
//     </>
//   );
// };
