import DashboarAllPages from "../components/DashboarAllPages";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DashboarAllPages>{children}</DashboarAllPages>
    </>
  );
}
