import React from "react";

const Loader = () => {
return (
<div className="flex justify-center items-center py-12">
<div className="h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
</div>
);
};

export default Loader;