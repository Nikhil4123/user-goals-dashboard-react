
import { useUser } from '../context/UserContext';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function UserDetails() {
  const { users, addGoal, updateGoal, deleteGoal } = useUser();
  const { userId } = useParams();
  const navigate = useNavigate();
  const user = users.find(u => u.id === parseInt(userId));
  
  const [newGoal, setNewGoal] = useState({ title: '', deadline: '', status: 'pending' });

  if (!user) {
    return <div>User not found</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addGoal(user.id, newGoal);
    setNewGoal({ title: '', deadline: '', status: 'pending' });
  };

  const handleStatusChange = (goalId, newStatus) => {
    updateGoal(user.id, goalId, { status: newStatus });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <button
        onClick={() => navigate('/')}
        className="mb-4 text-blue-600 hover:text-blue-800"
      >
        ← Back to Users
      </button>
      
      <h2 className="text-2xl font-bold mb-4">{user.name}'s Goals</h2>
      <p className="text-gray-600 mb-6">{user.email}</p>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Goal title"
            value={newGoal.title}
            onChange={(e) => setNewGoal({...newGoal, title: e.target.value})}
            className="p-2 border rounded flex-1"
            required
          />
          <input
            type="date"
            value={newGoal.deadline}
            onChange={(e) => setNewGoal({...newGoal, deadline: e.target.value})}
            className="p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Goal
          </button>
        </div>
      </form>

      <div className="space-y-4">
        {user.goals.map(goal => (
          <div key={goal.id} className="border p-4 rounded">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{goal.title}</h3>
                <p className="text-sm text-gray-600">Due: {goal.deadline}</p>
              </div>
              <div className="flex gap-2">
                <select
                  value={goal.status}
                  onChange={(e) => handleStatusChange(goal.id, e.target.value)}
                  className="p-2 border rounded"
                >
                  <option value="pending">Pending</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
                <button
                  onClick={() => deleteGoal(user.id, goal.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}