import { Avatar, AvatarIcon, Navbar, NavbarBrand, NavbarContent, Switch } from "@nextui-org/react";
import { SunIcon } from "../themeSwitch/SunIcon";
import { MoonIcon } from "../themeSwitch/MoonIcon";
import { useTheme } from "next-themes";
import Menubar from "../Menubar/Menubar";

function NavigationBar() {
  const { theme, setTheme } = useTheme();
  return (
    <Navbar className="dark:bg-[#484848] border border-[#ccc] dark:border-black">
      <NavbarContent>
        <NavbarBrand>
          <p className="text-inherit text-xl">Gemini Ai</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <Menubar />
        <Switch
          defaultSelected
          size="lg"
          color="secondary"
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <SunIcon className={className} />
            ) : (
              <MoonIcon className={className} />
            )
          }
        ></Switch>
        <div className="flex items-center">
          <Avatar
            icon={<AvatarIcon />}
            classNames={{
              base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
              icon: "text-black/80 ",
            }}
          />
        </div>
      </NavbarContent>
    </Navbar>
  );
}

export default NavigationBar;
