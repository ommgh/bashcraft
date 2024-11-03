"use cleint";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_AUTH_REDIRECT } from "@/routes";
export const Social = () => {
  const onClick = (provider: "github" | "google") => {
    signIn(provider, { callbackUrl: DEFAULT_AUTH_REDIRECT });
  };
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full bg-black border-white border-1 hover:border-[#40C057] hover:border-2 hover:bg-black"
        variant="outline"
        onClick={() => onClick("google")}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full bg-black border-white border-1 hover:border-[#40C057] hover:border-2 hover:bg-black"
        variant="outline"
        onClick={() => onClick("github")}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};