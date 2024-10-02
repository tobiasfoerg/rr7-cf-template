import { createRequestHandler } from "react-router";

declare module "react-router" {
	interface AppLoadContext {
		env: Env;
	}
}

export default {
	async fetch(request, env, ctx) {
		// @ts-expect-error - no types
		const build = await import("virtual:react-router/server-build");
		const handler = createRequestHandler(build, import.meta.env.MODE);

		return await handler(request, {
			env,
		});
	},
} satisfies ExportedHandler<Env>;
