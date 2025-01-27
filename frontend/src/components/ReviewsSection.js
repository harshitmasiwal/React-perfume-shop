import React, { useState } from 'react';
import axios from 'axios';

function ReviewsSection({ productId, reviews }) {
  const [username, setUsername] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [localReviews, setLocalReviews] = useState(reviews || []);
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:5000/api/products/${productId}/reviews`, {
        username,
        rating,
        comment,
      })
      .then((response) => {
        setLocalReviews([...localReviews, response.data]);
        setUsername('');
        setRating(5);
        setComment('');
        setMessage({ type: 'success', text: 'Review added successfully!' });
      })
      .catch((error) => {
        console.error('Error adding review:', error);
        setMessage({ type: 'error', text: 'Failed to add review.' });
      });
  };

  const handleRatingChange = (rate) => {
    setRating(rate);
  };

  return (
    <div className="bg-zinc-900 text-white p-6 rounded-lg shadow-lg">
      <h3 className="text-3xl text-emerald-300 font-extrabold tracking-tight leading-none mb-4">Reviews From Our Customers</h3>

      {/* Success/Error Message */}
      {message && (
        <div
          className={`mb-4 px-4 py-2 rounded ${
            message.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Reviews and Add Review Form Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-[1px] border-zinc-700 rounded-lg p-5">
        {/* Review List Section */}
        <div>
          <div className="space-y-4 mb-6">
            {localReviews.length > 0 ? (
              localReviews.map((review) => (
                <div
                  key={review._id}
                  className="bg-zinc-800 border-[1px] p-4 rounded-lg shadow-md"
                >
                  <div className="flex justify-between items-center">
                    
                    <strong className="text-lg">{review.username}</strong>
                    <span className="text-emerald-400 font-bold">
                      {review.rating} / 5
                    </span>
                  </div>
                  <p className="text-gray-300 mt-2">{review.comment}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-400">No reviews yet. Be the first to review!</p>
            )}
          </div>
        </div>

        {/* Add Review Form Section */}
        <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
          <h4 className="text-xl  text-emerald-300 font-extrabold tracking-tight leading-none mb-4">Add a Review</h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Input */}
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full bg-zinc-900 text-white border border-zinc-700 rounded-lg px-4 py-2"
              />
            </div>

            {/* Star Rating Selector */}
            <div>
              <label className="block text-sm font-medium mb-1">Rating</label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    onClick={() => handleRatingChange(star)}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-6 h-6 cursor-pointer ${
                      rating >= star ? 'text-yellow-400' : 'text-gray-500'
                    } hover:text-yellow-400 transition-colors`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M12 17.27l4.88 2.73-1.26-5.19 3.84-3.73-5.21-.45L12 2 9.75 10.63l-5.21.45 3.84 3.73-1.26 5.19L12 17.27z"
                    />
                  </svg>
                ))}
              </div>
            </div>

            {/* Comment Textarea */}
            <div>
              <label className="block text-sm font-medium mb-1">Comment</label>
              <textarea
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full bg-zinc-900 text-white border border-zinc-700 rounded-lg px-4 py-2"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600 transition"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReviewsSection;
