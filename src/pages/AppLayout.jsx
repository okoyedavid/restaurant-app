import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <h1> heres the container</h1>

      <Outlet />
    </div>
  );
}

export default AppLayout;
