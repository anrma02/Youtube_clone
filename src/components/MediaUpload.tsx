'use client';

import { CldUploadWidget } from 'next-cloudinary';
import React from 'react';

declare global {
     var cloudinary: any;
}

interface MediaUploadProps {
     onChange: (value: string) => void;
}

const MediaUpload: React.FC<React.PropsWithChildren<MediaUploadProps>> = ({
     children,
     onChange,
}) => {
     const handleUpload = (result: any) => {
          onChange(result.info.secure_url);
     };

     return (
          <CldUploadWidget
               onUpload={handleUpload}
               uploadPreset="ixy9qlrm"
               options={{ maxFiles: 1 }}
          >
               {({ open }) => {
                    return (
                         <div onClick={() => open && open()} className="inline-block">
                              {children}
                         </div>
                    );
               }}
          </CldUploadWidget>
     );
};

export default MediaUpload;
