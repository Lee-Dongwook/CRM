import { getModules } from "@/actions/get-modules";

import ModuleMenu from "./ModuleMenu";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getDictionary } from "@/dictionaries";

const SideBar = async ({ build }: { build: number }) => {
  const session = await getServerSession(authOptions);

  if (!session) return null;

  const modules = await getModules();

  if (!modules) return null;

  const lang = session.user.userLanguage;

  const dict = await getDictionary(lang as "en");

  if (!dict) return null;

  return <ModuleMenu modules={modules} dict={dict} build={build} />;
};

export default SideBar;
