"use client";
import TableComponent, { UserData } from "@/Components/ui/table";
import React, { useEffect, useState } from "react";

const PageComponent: React.FC = () => {
  const [userData, setUserData] = useState<UserData[] | null>(null); // Set initial state to null

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://techc2.be/user/topUser");
      const data = await response.json();
      console.log("Data fetched:", data); // Debugging statement
      setUserData(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>User Data</h1>
      {userData !== null ? (
        <TableComponent
          data={userData}
          headers={Object.keys(userData[0]) as (keyof UserData)[]} // Cast the keys as keyof UserData
          title="User Data"
        />
      ) : (
        <p>Loading...</p> // Display a loading message while data is being fetched
      )}
    </div>
  );
};

export default PageComponent;
