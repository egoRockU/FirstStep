import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "../components/ui/dropdown-menu";
import { Button } from "../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { ModeToggle } from "../components/ui/mode-toggle";
import { useDispatch } from "react-redux";
import { logoutAdmin } from "@/slice/userSlice";

export default function UserNav() {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const dispatch = useDispatch();

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };

  const openAdminProfilePage = () => {
    setShowProfile(false);
    navigate("/adminprofile");
  };

  const logout = () => {
    dispatch(logoutAdmin());
    navigate("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="mt-1">
          <Button
            variant="ghost"
            className="relative h-10 w-10 rounded-full"
            onClick={handleProfileClick}
          >
            <Avatar className="h-10 w-10">
              <AvatarImage src={"https://github.com/shadcn.png"} alt={""} />
              <AvatarFallback>hello</AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={openAdminProfilePage}>
            Profile
            <DropdownMenuShortcut></DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>
          Log out
          <DropdownMenuShortcut></DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
      <ModeToggle></ModeToggle>
    </DropdownMenu>
  );
}
