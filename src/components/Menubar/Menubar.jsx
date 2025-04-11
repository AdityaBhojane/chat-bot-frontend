import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import { useNavigate } from "react-router-dom";

export default function Menubar() {
  const navigate = useNavigate()

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="capitalize border border-[#ccc] light:text-black"
        >
          Recent Chats
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Multiple selection example"
        variant="flat"
        closeOnSelect={false}
        disallowEmptySelection
        selectionMode="multiple"
        className=""
      >
        <DropdownItem
          onClick={() => {
            navigate("/home")
          }}
          key="text"
          className="mb-1"
        >
          Menu
        </DropdownItem>

        <DropdownItem
          onClick={() => {
            localStorage.clear();
            navigate("/signin")
          }}
          key="delete"
          color="danger"
          className="border border-red-700 mt-3"
        >
          logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
