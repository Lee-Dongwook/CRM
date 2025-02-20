import { Suspense } from "react";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import {
  CoinsIcon,
  Contact,
  DollarSignIcon,
  FactoryIcon,
  HeartHandshakeIcon,
  LandmarkIcon,
  UserIcon,
  Users2Icon,
} from "lucide-react";

import { getDictionary } from "@/dictionaries";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) return null;

  const userId = session?.user?.id;

  const lang = session?.user?.userLanguage;

  const dict = await getDictionary(lang as "en");

  return <></>;
};
