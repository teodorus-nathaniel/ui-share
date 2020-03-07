import React from 'react';
import PostPreview from '../post-preview/post-preview.component';
import './post-preview-container.styles.scss';

export default function PostPreviewContainer (){
  const dummyData = Array.from({ length: 50 });

  return (
    <div className='post-preview-container'>
      {dummyData.map((_, idx) => <PostPreview key={idx} />)}
    </div>
  );
}
