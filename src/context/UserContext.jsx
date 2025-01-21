
import { createContext, useContext, useState } from 'react';
import { mockUsers } from '../data/mockData';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('name');

  const addUser = (newUser) => {
    setUsers([...users, { 
      ...newUser, 
      id: Date.now(),
      goals: []
    }]);
  };

  const addGoal = (userId, goal) => {
    setUsers(users.map(user => {
      if (user.id === userId) {
        return {
          ...user,
          goals: [...user.goals, { ...goal, id: Date.now() }]
        };
      }
      return user;
    }));
  };

  const updateGoal = (userId, goalId, updatedGoal) => {
    setUsers(users.map(user => {
      if (user.id === userId) {
        return {
          ...user,
          goals: user.goals.map(goal => 
            goal.id === goalId ? { ...goal, ...updatedGoal } : goal
          )
        };
      }
      return user;
    }));
  };

  const deleteGoal = (userId, goalId) => {
    setUsers(users.map(user => {
      if (user.id === userId) {
        return {
          ...user,
          goals: user.goals.filter(goal => goal.id !== goalId)
        };
      }
      return user;
    }));
  };

  const getFilteredUsers = () => {
    return users
      .filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => a[sortField].localeCompare(b[sortField]));
  };

  const value = {
    users: getFilteredUsers(),
    searchTerm,
    setSearchTerm,
    sortField,
    setSortField,
    addUser,
    addGoal,
    updateGoal,
    deleteGoal
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
