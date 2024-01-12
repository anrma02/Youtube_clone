import { NextResponse } from 'next/server';

import getCurrentUser from '~/actions/getCurrentUser';
import prisma from '~/vendor/db';

export async function POST(request: any) {
     const currentUser = await getCurrentUser();
     if (!currentUser) {
          return NextResponse.error();
     }
     const { name, handle, imageSrc } = await request.json();
     const channel = await prisma.channel.create({
          data: {
               name,
               handle,
               imageSrc,
               userId: currentUser.id,
          },
     });
     return NextResponse.json(channel);
}