import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";

const DarkModeToggle = () => {
  const { setTheme, theme } = useTheme();
  return (
    <div className='flex justify-between p-[1px] pt-5'>
      <h6 className='dropDownMenuItem darkModeToggle'>Interface</h6>
      <Switch
        onClick={
          theme === "light" ? () => setTheme("dark") : () => setTheme("light")
        }
      />
    </div>
  );
};

export default DarkModeToggle;
