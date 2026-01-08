import { RoleUser } from "./roles.columns";

export const rolesData: RoleUser[] = [
  {
    id: "1",
    name: "Dharam Singh",
    role: "Owner",
    access: [],
    status: "Active",
  },
  {
    id: "2",
    name: "Mala",
    role: "Super Admin",
    access: [],
    status: "Inactive",
  },
  {
    id: "3",
    name: "Ingrid Baum",
    role: "Account Manager",
    access: ["Name of Tab", "Name of Tab", "Name of Tab"],
    status: "Active",
  },
  {
    id: "4",
    name: "Diego Rodriguez",
    role: "Account Manager",
    access: ["Name of Tab", "Name of Tab", "Name of Tab"],
    status: "Inactive",
  },
  {
    id: "5",
    name: "Naomi Singh",
    role: "Account Manager",
    access: ["Name of Tab", "Name of Tab", "Name of Tab"],
    status: "Active",
  },
  
];
