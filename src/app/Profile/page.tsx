"use client";
import React, { useState } from "react";

// Define TypeScript interfaces for our user data
interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  location: string;
  website: string;
  joinDate: string;
}

interface UserProfileProps {
  user: User;
  onUpdateUser: (updatedUser: User) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, onUpdateUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<User>({ ...user });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onUpdateUser(editedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedUser({ ...user });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
          <div className="relative">
            <img
              src={isEditing ? editedUser.avatar : user.avatar}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
            />
            {isEditing && (
              <button className="absolute bottom-2 right-2 bg-indigo-600 text-white text-xs py-1 px-3 rounded-full shadow-md hover:bg-indigo-700 transition-colors">
                Change
              </button>
            )}
          </div>

          <div className="text-center md:text-left flex-1">
            {isEditing ? (
              <input
                name="name"
                value={editedUser.name}
                onChange={handleInputChange}
                className="text-3xl font-bold text-gray-800 bg-gray-50 rounded-xl px-4 py-3 mb-2 w-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            ) : (
              <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
            )}
            <p className="text-gray-500 text-sm mt-1">Joined {user.joinDate}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-xl">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Email</h3>
            {isEditing ? (
              <input
                name="email"
                type="email"
                value={editedUser.email}
                onChange={handleInputChange}
                className="w-full bg-white rounded-lg px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-800 text-lg">{user.email}</p>
            )}
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Bio</h3>
            {isEditing ? (
              <textarea
                name="bio"
                value={editedUser.bio}
                onChange={handleInputChange}
                className="w-full bg-white rounded-lg px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                rows={3}
              />
            ) : (
              <p className="text-gray-800 text-lg">
                {user.bio || "No bio provided"}
              </p>
            )}
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Location</h3>
            {isEditing ? (
              <input
                name="location"
                value={editedUser.location}
                onChange={handleInputChange}
                className="w-full bg-white rounded-lg px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-800 text-lg">
                {user.location || "Not specified"}
              </p>
            )}
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Website</h3>
            {isEditing ? (
              <input
                name="website"
                value={editedUser.website}
                onChange={handleInputChange}
                className="w-full bg-white rounded-lg px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-800 text-lg">
                {user.website ? (
                  <a
                    href={user.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 hover:underline transition-colors"
                  >
                    {user.website}
                  </a>
                ) : (
                  "Not specified"
                )}
              </p>
            )}
          </div>
        </div>

        <div className="mt-10 flex gap-4 justify-center md:justify-start">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg font-medium"
              >
                Save Changes
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-xl hover:bg-gray-300 transition-colors font-medium"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg font-medium"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Example usage with a parent component
const UserProfilePage: React.FC = () => {
  const [user, setUser] = useState<User>({
    id: 1,
    name: "Jane Doe",
    email: "jane.doe@example.com",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    bio: "Frontend developer passionate about creating beautiful user interfaces with React and TypeScript.",
    location: "San Francisco, CA",
    website: "https://jane-doe-portfolio.com",
    joinDate: "January 2022",
  });

  const handleUpdateUser = (updatedUser: User) => {
    setUser(updatedUser);
    console.log("User updated:", updatedUser);
  };

  return <UserProfile user={user} onUpdateUser={handleUpdateUser} />;
};

export default UserProfilePage;
