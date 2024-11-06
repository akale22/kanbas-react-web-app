import { useSelector } from "react-redux";
export default function ProtectedContentModification({
  role,
  children,
}: {
  role: string;
  children: any;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  if (currentUser.role === role) {
    return children;
  } else {
    return <></>;
  }
}
