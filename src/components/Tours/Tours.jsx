import React from 'react'
import SingleTour from '../SingleTour'

function Tours({ toursData, removeTour }) {


  return (
    <>
    <section className="tours container">
      {toursData?.map((item) => {
        return <SingleTour item={item} key={item.id} removeTour={removeTour} />
      })}
    </section>
    </>
  );
}

export default Tours;
