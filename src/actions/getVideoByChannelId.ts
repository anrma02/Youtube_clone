import { Video } from '@prisma/client';
import prisma from '~/vendor/db';

interface GetVideosByChannelIdParams {
     channelId?: string;
}

export const getVideosChannelById = async (
     params: GetVideosByChannelIdParams,
): Promise<Video[]> => {
     try {
          const { channelId } = params;
          const query: any = {};
          if (channelId) {
               query.channelId = channelId;
          }

          const videos = await prisma.video.findMany({
               where: query,
          });
          return videos || [];
     } catch (error: any) {
          throw new Error(error);
     }
};
