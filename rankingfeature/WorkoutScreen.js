import React, { useEffect } from 'react';
import { useUser } from './UserContext';
import { firestore } from 'firebase-config';

export default function WorkoutScreen() {
  const { userId, updateUser } = useUser();

  useEffect(() => {
    if (userId) {
      // Log user activity on a new day using the userId
      logUserActivity(userId);
    }
  }, [userId]);

  const logUserActivity = async (userId) => {
    try {
      const currentDate = new Date().toISOString().split('T')[0]; // Get the current date
      // Check if the user already has an entry for the current date
      const userActivityRef = firestore.collection('userActivity').doc(userId);
      const userActivityDoc = await userActivityRef.get();

      if (userActivityDoc.exists) {
        const userActivityData = userActivityDoc.data();
        // Check if the user has already logged in today
        if (userActivityData.lastActivity !== currentDate) {
          // Update the lastActivity field for the user
          await userActivityRef.update({ lastActivity: currentDate });
          // Add logic to increment streaks, update rankings, etc.
          updateStreaksAndRankings(userId);
        }
      } else {
        // If there's no entry for the user, create one
        await userActivityRef.set({ lastActivity: currentDate });
        // Add logic to handle the first activity log (e.g., start streaks)
        handleFirstActivity(userId);
      }
    } catch (error) {
      console.error('Error logging user activity:', error);
    }
  };

  const updateStreaksAndRankings = async (userId) => {
    try {
      const userRef = firestore.collection('accounts').doc(userId);
      const userDoc = await userRef.get();

      if (userDoc.exists) {
        const userData = userDoc.data();

        // Increment streaks ('streaks' field in the user's document)
        const updatedStreaks = (userData.streaks || 0) + 1;
        // Update the user's document with the incremented streaks
        await userRef.update({ streaks: updatedStreaks });
        // Update rankings ('rankings' field in the user's document)
        const updatedRankings = (userData.rankings || 0) + 1;
        // Update the user's document with the incremented rankings
        await userRef.update({ rankings: updatedRankings });

        console.log('Streaks and rankings updated successfully for user:', userId);
      } else {
        console.error('User document not found for user:', userId);
      }
    } catch (error) {
      console.error('Error updating streaks and rankings:', error);
    }
  };

  const handleFirstActivity = async (userId) => {
      try {
        const userRef = firestore.collection('accounts').doc(userId);
        const userDoc = await userRef.get();
    
        if (userDoc.exists) {
          const userData = userDoc.data();
          // Check if the user is logging activity for the first time
          if (!userData.streaks) {
            // If streaks field is not present, initialize it with a starting value
            const initialStreaks = 1;
            // Update the user's document with the initial streaks
            await userRef.update({ streaks: initialStreaks });
    
            console.log('Streaks initialized for user:', userId);
          }
        } else {
          console.error('User document not found for user:', userId);
        }
      } catch (error) {
        console.error('Error handling first activity:', error);
      }
    };
    
}
