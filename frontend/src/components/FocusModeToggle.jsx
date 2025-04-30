import React, { useContext } from "react";
import { Switch } from "@/components/ui/switch";
import { FocusMode } from "@/contexts/FocusModeContext";
import { Label } from "./ui/label";

const FocusModeToggle = () => {
  const { focusMode, setFocusMode } = useContext(FocusMode);
  return (
    <div className="flex items-center gap-2">
      <Switch
        id="focus-mode"
        checked={focusMode}
        onCheckedChange={() => setFocusMode((prev) => !prev)}
      />
      <Label htmlFor="focus-mode" className={"text-white font-semibold"}>
        Focus Mode
      </Label>
    </div>
  );
};

export default FocusModeToggle;
