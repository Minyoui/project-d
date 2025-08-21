import { useState, useEffect, } from 'react';
import './reviews.css';
import profileicon1 from '../../../../assets/vector/georgia familar 1.png';
import profileicon2 from '../../../../assets/vector/joymica ferrer.png';
import profileicon3 from '../../../../assets/vector/raymond de vera lachica.png';
import star from '../../../../assets/icons/Star.png';


function Reviews () {
    const reviewsData = [
            {
                id: 'review1',
                profileIcon: profileicon1,
                profileName: 'Georgia Familar',
                comment: "They provide a relaxing experience. This branch makes sure you are pampered and comfortable. The place is also clean. I had an amazing massage by Ma'am Maris! She really did a great job! I am pleased with my every visit. Thank you so much Blissful Kawit Branch.",
            },
            {
                id: 'review2',
                profileIcon: profileicon2,
                profileName: 'Joymica Ferrer',
                comment: "My go-to massage place! Welcoming and accommodating ang staff at palaging beri good ang experience :D thankful also that they are open until 12AM! Still able to accommodate me despite minor changes sa sched. Thank you always, Blissful Bali Massage Spa!",
            },
            {
                id: 'review3',
                profileIcon: profileicon3,
                profileName: 'Raymond De Vera Lachica',
                comment: "A Highly Recommended Massage Experience: Blissful Bali Massage Spa - Kawit Branch If you’re looking for the ultimate relaxation and rejuvenation, I highly recommend a visit to Blissful Bali Massage Spa, where every detail is designed to melt away stress and tension.",
            },
        ];
    
    
    const [activeReviewId, setActiveReviewId] = useState('review1');

    // Find the currently active service object from the data array
    const activeReview = reviewsData.find(review => review.id === activeReviewId);

    return (
        <>
            {/* REVIEWS SECTION */}
                        <div className="reviews-section" id="reviews">
                                <div className="reviews-container">
                                <div className="reviews-header">
                                    <h1>CLIENT FEEDBACK & REVIEWS</h1>
                                    <p>what our client's say</p>
                                </div>
                                <div className="reviews-box">
                                    <div className="reviews-details">
                                        {activeReview && (
                                            <div className="reviews-content active">
                                                <img src={activeReview.profileIcon} className="reviews-profile-icon"></img>
                                                <h3 className="reviews-profile-name">{activeReview.profileName}</h3>
                                                <div className="reviews-rating">
                                                    <img src={star}/>
                                                    <img src={star}/>
                                                    <img src={star}/>
                                                    <img src={star}/>
                                                    <img src={star}/>
                                                </div>
                                                <p className="reviews-comment">{activeReview.comment}</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className="review-low-bar">
                                            <ul className="review-nav">
                                                {reviewsData.map((review) => (
                                                    <li
                                                        key={review.id} // Important for React list rendering
                                                        className={`review-nav-item ${activeReviewId === review.id ? 'active' : ''}`}
                                                        onClick={() => setActiveReviewId(review.id)} // Update state on click
                                                        >
                                                    </li>
                                                ))}
                                            </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
            
        </>
    );
}

export default Reviews;