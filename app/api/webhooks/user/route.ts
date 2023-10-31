// steps
// 1. SVIx will send the headers from the server.
// secretkey for webhook: "whsec_IWe7ZaE3dFAvuuXNId5VkNCYzFajV2OD"

import prisma from '@/prisma';
import { IncomingHttpHeaders } from 'http';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

import { Webhook, WebhookRequiredHeaders } from 'svix';

// Headers type
// const headers = {
//   "svix-id": "msg_p5jXN8AQM9LWM0D4loKWxJek",
//   "svix-timestamp": "1614265330",
//   "svix-signature": "v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE=",
// };

const webhoookSecret = process.env.WEBHOOK_SECRET || '';

type Event = {
  data: Record<string, string | number>;
  object: 'event';
  type: EventType;
};
type EventType = 'user.created' | 'user.updated' | '*';

async function handler(request: Request) {
  const payload = await request.json();
  const headersList = headers();

  const heads = {
    'svix-id': headersList.get('svix-id'),
    'svix-timestamp': headersList.get('svix-timestamp'),
    'svix-signature': headersList.get('svix-signature'),
  };

  const wh = new Webhook(webhoookSecret);
  let evt: Event | null = null;

  try {
    evt = wh.verify(
      JSON.stringify(payload),
      heads as IncomingHttpHeaders & WebhookRequiredHeaders,
    ) as Event;
  } catch (err) {
    console.log((err as Error).message);
    return NextResponse.json({}, { status: 400 });
  }

  const eventType: EventType = evt.type;

  if (eventType === 'user.created') {
    const { id, ...attributes } = evt.data;
    console.log(id);
    console.log(attributes);

    await prisma.user.create({
      data: {
        name: 'Rich',
        email: 'hello@prisma.com',
        posts: {
          create: {
            title: 'My first post',
            body: 'Lots of really interesting stuff',
            slug: 'my-first-post',
          },
        },
      },
    });

    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
      },
    });
    console.dir(allUsers, { depth: null });
  }

  if (eventType === 'user.updated') {
    const { id, ...attributes } = evt.data;
    console.log(id);
    console.log(attributes);
    await prisma.post.update({
      where: {
        slug: 'my-first-post',
      },
      data: {
        comments: {
          createMany: {
            data: [
              { comment: 'Great post!' },
              { comment: "Can't wait to read more!" },
            ],
          },
        },
      },
    });
    const posts = await prisma.post.findMany({
      include: {
        comments: true,
      },
    });

    console.dir(posts, { depth: Infinity });
  }
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
