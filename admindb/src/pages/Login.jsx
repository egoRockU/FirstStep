import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import logo from "../images/logo.png";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-[450px] bg-white rounded-lg p-6 shadow-lg">
        <img src={logo} alt="Logo" className="w-15 h-16 mb-8 mx-auto" />
        <div className="grid gap-6 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-balance text-muted-foreground"></p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="text" placeholder="Username" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="p assword"
              placeholder="Password"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
