import client from "$lib/prisma_db";
import type { RequestEvent } from "@sveltejs/kit/types/internal";

export async function get() {
    try {
        const users = await client.user.findMany();
        return {
            body: {
                users: users,
            }
        };
    } catch (error) {
        return {
            headers: {
                location: '/'
            }
        };
    }
}

export async function post({ request }: RequestEvent) {

    try {
        const user = await client.user.create({ data: await request.json() });
        if (user) return {
            body: { user }
        };
    } catch (error) {
        console.log(error);
        return { status: 500 };
    }
}





