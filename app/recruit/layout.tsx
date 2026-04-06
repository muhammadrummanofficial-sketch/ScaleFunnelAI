import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Our Team — Now Recruiting High-Performing Agents",
  description:
    "We are looking for driven motivated agents ready to build a serious income. Apply now and take the first step toward building the career you actually want.",
};

export default function RecruitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
