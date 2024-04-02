// import React from 'react'

import ReviewCard from '@/components/commons/cards/ReviewCard';
import ReviewDetailHeader from '@/components/commons/user/TravelReview/ReviewDetail';
import ReviewContent from '@/components/commons/user/TravelReview/ReviewDetailContent';
import ReviewDetailList from '@/components/commons/user/TravelReview/ReviewDetailList';
import Header from '@/components/layouts/Header';

const TravelDetailPage = () => {
  return (
    <>
      <Header />
      <ReviewDetailHeader />
      <ReviewDetailList />
      <ReviewContent />
      <ReviewCard />
    </>
  );
};

export default TravelDetailPage;
