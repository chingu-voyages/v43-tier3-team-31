import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

function SidebarItem({
  href,
  children,
  iconName,
}: {
  href: string;
  children: string;
  iconName: IconProp;
}) {
  const router = useRouter();
  const isActive = router.pathname === href;
  return (
    <Link href={href}>
      <button
        className={`flex gap-3 items-center p-2 text-base font-normal text-gray-900 rounded-lg  group ${
          isActive ? "bg-purple-700" : "opacity-50 hover:opacity-100"
        } px-5 rounded-xl`}
      >
        <FontAwesomeIcon icon={iconName} />
        {children}
      </button>
    </Link>
  );
}

export default SidebarItem;
