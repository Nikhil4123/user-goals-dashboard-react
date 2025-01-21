
import { useUser } from '../context/UserContext';

export default function Summary() {
  const { users } = useUser();
  
  const totalUsers = users.length;
  const totalGoals = users.reduce((acc, user) => acc + user.goals.length, 0);
  const completedGoals = users.reduce((acc, user) => 
    acc + user.goals.filter(goal => goal.status === 'completed').length, 0
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold">Total Users</h3>
        <p className="text-2xl">{totalUsers}</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold">Total Goals</h3>
        <p className="text-2xl">{totalGoals}</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold">Completed Goals</h3>
        <p className="text-2xl">{completedGoals}</p>
      </div>
    </div>
  );
}