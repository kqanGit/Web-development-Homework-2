import { useEffect, useState } from "react";
import { getUserProfile } from "@/services/api";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        setLoading(true);
        const data = await getUserProfile();
        setProfile(data);
      } catch (err) {
        setError("Failed to load profile");
        console.error("Profile error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="text-xl text-gray-600 dark:text-gray-400">
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="text-xl text-red-600 dark:text-red-400">{error}</div>
      </div>
    );
  }

  if (!profile) return null;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Profile
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Your account information
          </p>
        </div>

        {/* Profile Information */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            {/* ID */}
            <div className="flex items-center border-b border-gray-200 dark:border-gray-700 pb-4">
              <span className="w-32 text-sm font-semibold text-gray-600 dark:text-gray-400">
                ID:
              </span>
              <span className="text-gray-900 dark:text-white">
                {profile.id}
              </span>
            </div>

            {/* Username */}
            <div className="flex items-center border-b border-gray-200 dark:border-gray-700 pb-4">
              <span className="w-32 text-sm font-semibold text-gray-600 dark:text-gray-400">
                Username:
              </span>
              <span className="text-gray-900 dark:text-white">
                {profile.username}
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center border-b border-gray-200 dark:border-gray-700 pb-4">
              <span className="w-32 text-sm font-semibold text-gray-600 dark:text-gray-400">
                Email:
              </span>
              <span className="text-gray-900 dark:text-white">
                {profile.email}
              </span>
            </div>

            {/* Phone */}
            <div className="flex items-center border-b border-gray-200 dark:border-gray-700 pb-4">
              <span className="w-32 text-sm font-semibold text-gray-600 dark:text-gray-400">
                Phone:
              </span>
              <span className="text-gray-900 dark:text-white">
                {profile.phone}
              </span>
            </div>

            {/* Date of Birth */}
            <div className="flex items-center border-b border-gray-200 dark:border-gray-700 pb-4">
              <span className="w-32 text-sm font-semibold text-gray-600 dark:text-gray-400">
                Date of Birth:
              </span>
              <span className="text-gray-900 dark:text-white">
                {new Date(profile.dob).toLocaleDateString()}
              </span>
            </div>

            {/* Role */}
            <div className="flex items-center border-b border-gray-200 dark:border-gray-700 pb-4">
              <span className="w-32 text-sm font-semibold text-gray-600 dark:text-gray-400">
                Role:
              </span>
              <span className="text-gray-900 dark:text-white capitalize">
                {profile.role}
              </span>
            </div>

            {/* Created At */}
            <div className="flex items-center border-b border-gray-200 dark:border-gray-700 pb-4">
              <span className="w-32 text-sm font-semibold text-gray-600 dark:text-gray-400">
                Created At:
              </span>
              <span className="text-gray-900 dark:text-white">
                {new Date(profile.created_at).toLocaleString()}
              </span>
            </div>

            {/* Updated At */}
            <div className="flex items-center">
              <span className="w-32 text-sm font-semibold text-gray-600 dark:text-gray-400">
                Updated At:
              </span>
              <span className="text-gray-900 dark:text-white">
                {new Date(profile.updated_at).toLocaleString()}
              </span>
            </div>
          </div>
          <div className="mt-8 flex gap-4">
            <Link to="/edit-profile">
              <Button variant="outline">Edit Profile</Button>
            </Link>
            <Link to="/favorites">
              <Button variant="outline" className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30">
                Favorite Movies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
