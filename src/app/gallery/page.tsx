import Photos from "@/src/components/pages/gallery/Photos";

/* eslint-disable prettier/prettier */
const page = () => {
  return (
    <div className="container mx-auto">
      <div className="py-16">
        <h1 className="text-6xl text-green-600 font-bold pb-2">Gallery</h1>
        <hr className="w-[200px] h-1 bg-green-600 " />
      </div>
      <Photos/>
    </div>
  );
};

export default page;
