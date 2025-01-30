/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
export const uploadImageToCloudinary = async (file: any) => {
  console.log(file);
  const formData = new FormData();
  formData.append("file", file);
  formData.append("cloud_name", process.env.NEXT_PUBLIC_Cloud_Name as string);
  formData.append(
    "upload_preset",
    process.env.NEXT_PUBLIC_UpLoad_PRESET as string
  );
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_Cloud_Name}/image/upload`,
    { method: "POST", body: formData }
  );
  const data = await res.json();
  // console.log(data);
  return data?.secure_url;
};
