import React from 'react';

function SingleTour({ item, removeTour }) {
  
  const [ readMore, setReadMore ] = React.useState(false)

  // sliced description to be shown as default
  const desc = item.info
  const slicedDesc = desc.slice(0, 250) + '...'
  
  const handleClick = (event) => {
      const id = event.target.id
      removeTour(id)
  }
  
  const toggleRead = () => {
    setReadMore(!readMore)
    console.log('toggled read more')
  }

  return (
    <>
      <article className="single-tour">
          <div className="image-container">
            <img
              alt={item.name}
              src={item.image}
            />
          </div>
          <div className="tour-text">
             <p className="tour-name">
              <b>{item.name}</b>
            </p>
            <p className="tour-info">
              {!readMore && slicedDesc}
              {readMore && desc}
            </p>
            {/* If readMore state is false, add the Read more button */}
            {!readMore &&  <button type="button" className="read-more-btn" onClick={toggleRead}>Read more</button>}

            {/* If readMore state is true, add the Read less button */}
            {readMore && <button type="button" className="read-more-btn" onClick={toggleRead}>Read less</button>}
            
            <div className="tour-price">
              <p>{item.price}</p>
            </div>
          </div>

          <button 
          id={item.id}
          type="button" 
          className="btn btn-tour"
          onClick={handleClick}
          >Not interested</button>
        </article>
    </>
  );
}

export default SingleTour;
