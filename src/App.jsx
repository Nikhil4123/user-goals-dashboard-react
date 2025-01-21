
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Navigation from './components/Navigation';
import Summary from './components/Summary';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';

export default function App() {
  return (
    <Router>
      <UserProvider>
        <div className="min-h-screen bg-gray-100">
          <Navigation />
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Summary />
                    <UserList />
                  </>
                }
              />
              <Route path="/user/:userId" element={<UserDetails />} />
            </Routes>
          </div>
        </div>
      </UserProvider>
    </Router>
  );
}
