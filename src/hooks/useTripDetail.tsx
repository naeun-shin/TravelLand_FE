// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { TripDetail } from '@/api/interfaces/reviewInterface';

// export const useTripDetail = (tripId: number) => {
//   const [tripDetail, setTripDetail] = useState<TripDetail | null>(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<Error | null>(null);

//   useEffect(() => {
//     const fetchTripDetails = async () => {
//       try {
//         setIsLoading(true);
//         const response = await axios.get<TripDetail>(`/v1/trips/${tripId}`);
//         setTripDetail(response.data);
//       } catch (error: unknown) {
//         if (error instanceof Error) {
//           setError(error);
//         } else {
//           setError(new Error('An unknown error occurred'));
//         }
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchTripDetails();
//   }, [tripId]);

//   return { tripDetail, isLoading, error };
// };
