import React from 'react';

import RecipeReviewCard from '../components/book/RecipeReviewCard'
import ControlledAccordions from '../components/LandingPage/sideBar'

export default function LandingPage() {
  return (
    <div>
      <h1>
      Are you done with the subject? Pass your book to someone who needs it then!
      </h1>
      <sidebar><ControlledAccordions /></sidebar>
      <RecipeReviewCard />
    </div>
  );
}
