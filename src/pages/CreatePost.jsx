import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
  const navigate = useNavigate();
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  const generatedImage = async () => {
    if (formData.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch('https://dall-e-dxvh.onrender.com/api/v1/dalle', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: formData.prompt }),
        });

        const data = await response.json();

        setFormData({ ...formData, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        if (error.response) {
          console.log(error.response.status);
          console.log(error.response.data);
        } else {
          alert(error.message);
        }
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Please provide proper prompt!');
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.prompt && formData.photo && !loading) {
      setLoading(true);

      try {
        const response = await fetch('https://dall-e-dxvh.onrender.com/api/v1/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...formData }),
        });

        await response.json();
        navigate('/');
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please generate an image with proper details');
    };
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(formData.prompt);
    setFormData({ ...formData, prompt: randomPrompt });
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666E75] text-[16px] max-w-[500px]">Create imaginative and visually stunning images through DALL-E AI and share them with the community.</p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}      >
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your name"
            type="text"
            name="name"
            placeholder="Insert you name here"
            value={formData.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="A comic book cover of a superhero wearing headphones"
            value={formData.prompt}
            handleChange={handleChange}
            handleSurpriseMe={handleSurpriseMe}
            isSurpriseMe
          />
          <div className="relative bg-gray-500 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
            {formData.photo ? (
              <img
                src={formData.photo}
                alt={formData.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}
            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generatedImage}
            className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {generatingImg ? 'Generating...' : 'Generate'}
          </button>
        </div>
        <div className="mt-10">
          <p className="mt-2 text-[#666E75] text-[14px]">Once you have created the image you want, you can share with others in the community</p>
          {formData.photo && !loading ?
            <button
              type="submit"
              className="mt-3 text-white bg-[#6469FF] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              {loading ? 'Sharing...' : 'Share with the community'}
            </button>
            :
            <button
              type="submit"
              className="mt-3 text-white bg-gray-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center opacity-50"
              disabled
            >
              {loading ? 'Sharing...' : 'Share with the community'}
            </button>
          }
        </div>
      </form>
    </section>
  );
};

export default CreatePost;