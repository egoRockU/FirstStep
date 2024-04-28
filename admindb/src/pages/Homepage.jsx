import React from "react";
import { NavigationMenu } from "../components/ui/navigation-menu";
import { Button } from "../components/ui/button";
import { Calendar } from "../components/ui/calendar";
import { Overview } from "../components/ui/overview";
const Homepage = () => {
  return (
    <div>
      <div className="bg-indigo-900 py-4 flex justify-center">
        <NavigationMenu>
          <ul className="flex space-x-4 text-white">
            <li><a href="#" className="hover:text-indigo-300">Home</a></li>
            <li><a href="#" className="hover:text-indigo-300">Profile</a></li>
            <li><a href="#" className="hover:text-indigo-300">Applicant</a></li>
            <li><a href="#" className="hover:text-indigo-300">Employee</a></li>
          </ul>
        </NavigationMenu>
      </div>
      <div className="flex justify-center text-white mt-4">
        <Button>Here</Button>
      </div>
      <div className="flex justify-center text-black mt-4">
        <Calendar></Calendar>
        <Overview></Overview>
      </div>
    </div>
  );
}

export default Homepage;
