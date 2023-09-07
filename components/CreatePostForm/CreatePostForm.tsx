'use client';
import { FC, useCallback, useMemo, useState } from 'react';
import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';
import SimpleMDE from 'react-simplemde-editor';
import { useUploadImageMutation } from '@/redux/api/uploads.api';
import './styles.scss';
import { useCreatePostMutation } from '@/redux/api/posts.api';

export const CreatePostForm: FC = () => {
  const [uploadImage] = useUploadImageMutation();
  const [createPost] = useCreatePostMutation();
  const [postData, setPostData] = useState({
    title: '',
    tags: [],
    text: '',
    imageUrl: '',
  });

  const onChange = useCallback(
    (value: string) => {
      setPostData({ ...postData, text: value });
    },
    [postData]
  );

  const options = useMemo(
    () => ({
      spellChecker: false,
      autofocus: true,
      placeholder: 'Enter the text...',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    []
  );

  const handleChangeFile = async (event: any) => {
    try {
      const formData = new FormData();
      formData.append('image', event.target.files[0]);
      const { data } = await uploadImage(formData);
      setPostData({
        ...postData,
        imageUrl: `http://localhost:4444${data.url}`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeField = (name: string, event: any) => {
    name == 'tags'
      ? setPostData({ ...postData, [name]: event.target.value.split(',') })
      : setPostData({ ...postData, [name]: event.target.value });
  };

  const onSubmitForm = async (event: any) => {
    event.preventDefault();
    try {
      await createPost(postData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="post__create create" onSubmit={onSubmitForm}>
      {postData.imageUrl ? (
        <Image
          className="create__cover"
          src={postData.imageUrl}
          alt="Uploaded"
          width={1000}
          height={420}
        />
      ) : (
        <label className="create__cover secondary-btn">
          Choose the cover
          <input
            type="file"
            accept="image/*"
            required
            hidden
            onChange={handleChangeFile}
          />
        </label>
      )}
      <input
        className="create__heading"
        type="text"
        value={postData.title}
        onChange={(event) => handleChangeField('title', event)}
        placeholder="Article heading"
        required
      />
      <input
        className="create__tags"
        type="text"
        value={postData.tags}
        onChange={(event) => handleChangeField('tags', event)}
        placeholder="Tags"
      />
      <SimpleMDE
        className="create__text"
        value={postData.text}
        onChange={onChange}
        options={options}
      />
      <button className="create__publish primary-btn" type="submit">
        Publish
      </button>
      <Link className="create__cancel" href="/">
        Cancel
      </Link>
    </form>
  );
};
