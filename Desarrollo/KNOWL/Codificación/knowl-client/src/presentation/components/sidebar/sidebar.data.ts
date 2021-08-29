import * as icons from "@material-ui/icons";
import { Routes } from "../../../application/utils/enums";
export interface SidebarItem {
  icon: keyof typeof icons;
  sidebarItem: string;
  route: string;
}

export const sidebarItems: SidebarItem[] = [
  // { icon: "Dashboard", sidebarItem: "Principal", route: Routes.PRINCIPAL },
  { icon: "Person", sidebarItem: "Perfil", route: Routes.PROFILE },
  { icon: "Code", sidebarItem: "Formación", route: Routes.FORMATION },
  { icon: "Timeline", sidebarItem: "Experiencia", route: Routes.EXPERIENCE },
  { icon: "Edit", sidebarItem: "Editar Perfil", route: Routes.SETTINGS },
];
