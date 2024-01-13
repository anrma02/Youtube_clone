/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useRouter } from 'next/navigation';
import { useContext, useEffect, useMemo, useState } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import Button from '~/components/Button';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import toast from 'react-hot-toast';

import UploadVideoModal from '~/components/Layout/Modal/UploadVideoModal';
import VideoPreview from '~/components/studio/upload/VideoPreview';
import VideoUploadForm from '~/components/studio/upload/VideoUploadForm';
import { UploadVideoModelContext } from '~/context/UploadVideoModalContext';
import { useProtectedRouter } from '~/hooks/useProtectedRouter';

function UploadPage() {
     useProtectedRouter();

     const uploadVideoModal = useContext(UploadVideoModelContext);
     const [isLoading, setIsLoading] = useState(false);
     const router = useRouter();

     useEffect(() => {
          uploadVideoModal?.onOpen();
     }, []);

     const {
          register,
          handleSubmit,
          formState: { errors },
          watch,
          setValue,
     } = useForm<FieldValues>({
          defaultValues: {
               title: '',
               description: '',
               thumbnailSrc: '',
               videoSrc: '',
          },
     });

     const videoId = useMemo(() => {
          const buffer = Buffer.alloc(12);
          return uuid({}, buffer).toString('hex');
     }, []);

     const thumbnailSrc: string = watch('thumbnailSrc');
     const videoSrc: string = watch('videoSrc');

     const changeValue = (id: string, value: string) => {
          setValue(id, value, {
               shouldValidate: true,
               shouldDirty: true,
               shouldTouch: true,
          });
     };

     const onSubmit: SubmitHandler<FieldValues> = (data) => {
          setIsLoading(true);

          axios.post('/api/videos', data)
               .then(() => {
                    toast.success('Video published successfully');
                    router.push('/studio');
               })
               .catch(() => toast.error('Could not publish video'))
               .finally(() => setIsLoading(false));
     };

     return (
          <>
               {uploadVideoModal?.isOpen && (
                    <UploadVideoModal onUpload={(value) => changeValue('videoSrc', value)} />
               )}
               <div className="flex flex-col px-8 pt-4">
                    <div className="flex justify-between">
                         <h1 className="text-2xl "> Video details </h1>
                         <span className="flex gap-4 ">
                              <Button
                                   type={'secondary'}
                                   onClick={() => {
                                        router.back();
                                   }}
                              >
                                   Cancel
                              </Button>
                              <Button type={'box'} onClick={handleSubmit(onSubmit)}>
                                   Save
                              </Button>
                         </span>
                    </div>
                    <div className="mt-6 flex flex-col md:flex-row gap-6 md:gap-2">
                         <VideoUploadForm
                              register={register}
                              errors={errors}
                              changeValue={changeValue}
                              thumbnailSrc={thumbnailSrc}
                              isLoading={isLoading}
                         />
                         <VideoPreview videoSrc={videoSrc} videoId={videoId} />
                    </div>
               </div>
          </>
     );
}

export default UploadPage;
