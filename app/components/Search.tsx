import { Input } from "@/components/ui/input";
import { useState } from "react";

export const Search = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("eg.. cafe, restaurant, ")

  return (
    <div>
      <Input
        className="min-w-2xl"
        placeholder="Test"
        disabled={loading}
        value={value}
      ></Input>
    </div>
  );
};
