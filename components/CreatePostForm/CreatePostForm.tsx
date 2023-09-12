import {
  ComponentState,
  FC,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Image from '@/node_modules/next/image';
import { useRouter } from 'next/navigation';
import SimpleMDE from 'react-simplemde-editor';
import { useUploadImageMutation } from '@/redux/api/uploads.api';
import {
  useCreatePostMutation,
  useEditPostMutation,
} from '@/redux/api/posts.api';
import { iPost } from '@/types';
import './styles.scss';

type CreatePostProps = {
  data?: iPost;
  isLoading?: boolean;
};

const initialState: ComponentState = {
  title: '',
  tags: [],
  text: '',
  imageUrl: '',
};

export const CreatePostForm: FC<CreatePostProps> = ({ data, isLoading }) => {
  const [uploadImage] = useUploadImageMutation();
  const [createPost] = useCreatePostMutation();
  const [postData, setPostData] = useState(initialState);
  const router = useRouter();
  const [editPost] = useEditPostMutation();

  useEffect(() => {
    if (data) {
      setPostData(data);
    }
  }, [isLoading]);

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
        uniqueId: 'MyUniqueID',
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

  const onClickDeleteCover = () => {
    setPostData({ ...postData, imageUrl: '' });
  };

  const handleChangeField = (name: string, event: any) => {
    name == 'tags'
      ? setPostData({
          ...postData,
          [name]: event.target.value.toLowerCase().split(','),
        })
      : setPostData({ ...postData, [name]: event.target.value });
  };

  const handleEditPost = async () => {
    try {
      const editData = {
        id: data?._id,
        title: postData.title,
        text: postData.text,
        tags: postData.tags,
        imageUrl: postData.imageUrl,
      };
      await editPost(editData);
      setPostData(initialState);
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreatePost = async () => {
    try {
      await createPost(postData);
      setPostData(initialState);
      router.back();
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    if (data) {
      handleEditPost();
      return;
    }
    handleCreatePost();
  };

  return (
    <form className="post__create create" onSubmit={onSubmitForm}>
      {postData.imageUrl ? (
        <>
          <Image
            className="create__cover"
            src={postData.imageUrl}
            alt="Uploaded"
            width={1000}
            height={420}
          />
          <button
            className="create__cover--delete secondary-btn"
            onClick={onClickDeleteCover}
          >
            Delete cover
          </button>
        </>
      ) : (
        <label className="create__cover secondary-btn">
          Choose the cover
          <input
            type="file"
            name="imageUrl"
            accept="image/*"
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
      <div className="create__cancel" onClick={() => router.back()}>
        Cancel
      </div>
    </form>
  );
};
