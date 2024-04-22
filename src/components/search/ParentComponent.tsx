// import React, { useState } from 'react';
// import { TripSearch, searchTripsByText } from '@/api/searchAxios';
// import SearchInput from './Search';

// const ParentComponent = () => {
//   const [searchResults, setSearchResults] = useState<TripSearch[]>([]);

//   const handleSearch = async (text: string) => {
//     try {
//       const results = await searchTripsByText(text, 1, 10, 'createdAt', true);
//       setSearchResults(results);
//     } catch (error) {
//       console.error('Error searching trips:', error);
//     }
//   };

//   return (
//     <div>
//       <SearchInput placeholder="검색어를 입력하세요" onSearch={handleSearch} />
//       {/* 검색 결과 표시 */}
//       <div>
//         {searchResults.map((result) => (
//           <div key={result.id}>
//             <h3>{result.title}</h3>
//             <p>{result.content}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ParentComponent;
