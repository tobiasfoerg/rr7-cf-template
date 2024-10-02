import { Outlet } from "react-router";

import type * as T from "./+types.route";

export function loader({ request, context }: T.LoaderArgs) {
	return null;
}

export default function Component({ loaderData }: T.ComponentProps) {
	return <Outlet />;
}
