'use client'
import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import styles from '../../styles/All.module.scss';

// Define the props to be stricted
interface CardProps {
  cardIndex: number;
  avatarUrl: string;
  username: string;
  photoUrl: string;
}

const Card: React.FC<CardProps> = ({ cardIndex, avatarUrl, username, photoUrl }) => {
  const [isLiked, setIsLiked] = useState(false); //State to change the heart value

  useEffect(() => {
    const savedLikedCards = localStorage.getItem('likedCards'); //retrive the values for the likedCards array
        if (savedLikedCards) { //check if any data saved in savedLikedCards parse it in the array
      const likedCardsArray: number[] = JSON.parse(savedLikedCards);
      setIsLiked(likedCardsArray.includes(cardIndex));
    }
  }, [cardIndex]);

  const handleHeartClick = () => { //function to toogle the heart state
    const newIsLiked = !isLiked;
    setIsLiked(newIsLiked);

    let likedCardsArray: number[] = [];
    const savedLikedCards = localStorage.getItem('likedCards');
    if (savedLikedCards) {
      likedCardsArray = JSON.parse(savedLikedCards);
    }

    if (newIsLiked) { //if liked and if it included in the array push it by the card index
      if (!likedCardsArray.includes(cardIndex)) {
        likedCardsArray.push(cardIndex);
      }
    } else {
      const indexToRemove = likedCardsArray.indexOf(cardIndex);
      if (indexToRemove !== -1) {
        likedCardsArray.splice(indexToRemove, 1);
      }

    }

    localStorage.setItem('likedCards', JSON.stringify(likedCardsArray));
  };

  return (
    <div className={styles.card}>
      <div className={styles.avatar}>
        <img src={avatarUrl} alt="A" />
        <span>{username}</span>
      </div>
      <div className={styles.photoContainer}>
        <img src={photoUrl} alt="Photo" />
        <div className={styles.spansContainer}>
          <div className={styles.leftSpans}>
            <span>Nicklace</span>
            <span className={styles.price}>AED 100</span>
          </div>
          <div className={styles.rightSpan}>
            <span>
              <FaHeart
                style={{
                  color: isLiked ? 'red' : 'black',
                  
                  cursor: 'pointer',
                }}
                onClick={handleHeartClick}
              />
            </span>
          </div>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <span className={styles.likesCount}><FaHeart style={{ marginRight: '5px'}} />42 Likes</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>#iphone #cases #mobile #phones</p>
        <span>View 12 Comments</span>
      </div>
    </div>
  );
};

export default Card;
