import DashboardLayout from "@/components/layouts/DashboardLayout";
import { auth, storage } from "@/utils/firebaseClient";
import { FileInput, Label, Progress } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const CreatePost = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [progress, setProgress] = useState(0);

  const [userLogged, setUserLogged] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserLogged(user);
      }
    });
  }, []);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !title || !location || !description || !tags) {
      alert("Please fill all fields and upload an image.");
      return;
    }

    const parsedTags = tags.split(",").map((tag) => tag.trim());

    await handlePost(
      image,
      title,
      location,
      description,
      parsedTags,
      setProgress,
      setImage
    );
  };

  const handlePost = async (
    image,
    title,
    location,
    description,
    tags,
    setProgress,
    setImage
  ) => {
    const storage = getStorage();
    const db = getFirestore();
    const storageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    // const tagsArray = tags.split(",");
    console.log(tags);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      async () => {
        try {
          const url = await getDownloadURL(storageRef);
          await addDoc(collection(db, "posts"), {
            timestamp: serverTimestamp(),
            title: title,
            location: location,
            description: description,
            imgUrl: url,
            tags: tags,
            uid: userLogged.uid,
          });
          setImage(null);
          setImagePreview(null);
          setProgress(0);
          setTitle("");
          setLocation("");
          setDescription("");
          setTags("");
          //   alert("Post created successfully.");
          toast.success("Post created successfully", {
            position: toast.POSITION.TOP_RIGHT,
          });
        } catch (error) {
          console.log(error);
        }
      }
    );
  };
  return (
    <DashboardLayout>
      <div className="w-full flex shadow-md mt-2 py-10 px-14">
        <ToastContainer />
        <div className="flex flex-col gap-3 py-32 justify-center items-center flex-[0.5]">
          <svg
            className="h-7 w-7"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.5 18.9996C4.5 20.8561 5.2375 22.6366 6.55025 23.9493C7.86301 25.2621 9.64349 25.9996 11.5 25.9996H18.5V31.1716L15.914 28.5856C15.5368 28.2212 15.0316 28.0197 14.5072 28.0242C13.9828 28.0288 13.4812 28.2391 13.1104 28.6099C12.7395 28.9807 12.5292 29.4824 12.5247 30.0068C12.5201 30.5312 12.7217 31.0364 13.086 31.4136L19.086 37.4136C19.4611 37.7885 19.9697 37.9991 20.5 37.9991C21.0303 37.9991 21.5389 37.7885 21.914 37.4136L27.914 31.4136C28.2783 31.0364 28.4799 30.5312 28.4753 30.0068C28.4708 29.4824 28.2605 28.9807 27.8896 28.6099C27.5188 28.2391 27.0172 28.0288 26.4928 28.0242C25.9684 28.0197 25.4632 28.2212 25.086 28.5856L22.5 31.1716V25.9996H27.5C28.7335 25.9988 29.9536 25.7446 31.0847 25.2526C32.2158 24.7606 33.2337 24.0413 34.0752 23.1394C34.9167 22.2376 35.5638 21.1724 35.9764 20.0099C36.3889 18.8475 36.5582 17.6127 36.4735 16.3821C36.3889 15.1516 36.0523 13.9515 35.4845 12.8565C34.9166 11.7615 34.1298 10.7949 33.1728 10.0167C32.2158 9.23855 31.109 8.66538 29.9212 8.33283C28.7334 8.00028 27.49 7.91543 26.268 8.08356C26.0318 7.04073 25.5891 6.05579 24.9659 5.18691C24.3427 4.31803 23.5518 3.58281 22.6398 3.02466C21.7278 2.46652 20.7132 2.09677 19.6559 1.93724C18.5986 1.77771 17.5201 1.83164 16.484 2.09584C15.4479 2.36004 14.4753 2.82916 13.6235 3.4755C12.7717 4.12183 12.0581 4.93228 11.5247 5.859C10.9913 6.78571 10.649 7.8099 10.518 8.87109C10.387 9.93228 10.47 11.009 10.762 12.0376C9.04272 12.2198 7.45172 13.0319 6.29553 14.3174C5.13933 15.6028 4.49975 17.2706 4.5 18.9996ZM22.5 25.9996H18.5V15.9996C18.5 15.4691 18.7107 14.9604 19.0858 14.5853C19.4609 14.2103 19.9696 13.9996 20.5 13.9996C21.0304 13.9996 21.5391 14.2103 21.9142 14.5853C22.2893 14.9604 22.5 15.4691 22.5 15.9996V25.9996Z"
              fill="#9CA3AF"
            />
          </svg>
          <p>Upload a image</p>
          {/* <p className="mb-6">Max. Time Length: 30s</p> */}
          <div>
            <div id="fileUpload">
              <FileInput onChange={handleImageChange} id="file" />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="preview"
                  style={{ width: "100px" }}
                />
              )}
              {progress ? (
                <Progress className="my-2" progress={progress} />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="flex-[0.5] px-16">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center "
          >
            <h2 className="font-medium mb-4 text-gray-900 ">
              Title & Location
            </h2>
            <div className="mb-3">
              <input
                type="text"
                id="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Post Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-7 h-7 text-gray-200"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.39348 4.09347L4.39349 4.09345C5.34998 3.13696 6.64726 2.59961 7.99994 2.59961C9.35262 2.59961 10.6499 3.13696 11.6064 4.09345C12.5629 5.04994 13.1002 6.34722 13.1002 7.69989C13.1002 9.05257 12.5629 10.3499 11.6064 11.3063L7.99994 14.9128L4.39349 11.3063L4.39348 11.3063C3.91984 10.8327 3.54413 10.2705 3.2878 9.6517C3.03147 9.03291 2.89954 8.36968 2.89954 7.69989C2.89954 7.03011 3.03147 6.36688 3.2878 5.74809C3.54413 5.12929 3.91984 4.56705 4.39348 4.09347ZM7.99994 9.79989C8.55689 9.79989 9.09104 9.57864 9.48486 9.18482C9.87869 8.79099 10.0999 8.25685 10.0999 7.69989C10.0999 7.14294 9.87869 6.6088 9.48486 6.21497C9.09104 5.82114 8.55689 5.5999 7.99994 5.5999C7.44299 5.5999 6.90884 5.82114 6.51502 6.21497C6.12119 6.6088 5.89994 7.14294 5.89994 7.69989C5.89994 8.25685 6.12119 8.79099 6.51502 9.18482C6.90884 9.57864 7.44299 9.79989 7.99994 9.79989Z"
                      fill="#6B7280"
                      stroke="#6B7280"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="email-address-icon"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
            <h2 className="font-sm font-normal mb-2 text-gray-900">
              Description
            </h2>
            {/* <div className="mb-2">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
            </div> */}
            <div className="mb-6">
              <textarea
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Description ..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tags (comma separated)
              </label>
              <input
                type="text"
                id="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                placeholder="Food, Travel, etc."
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 self-end"
            >
              Create Post
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CreatePost;
